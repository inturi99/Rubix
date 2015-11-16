/*global module:true*/
'use strict';

Math.log2 = Math.log2 || function(x) {
  return Math.log(x) / Math.LN2;
};

Math.log10 = Math.log10 || function(x) {
  return Math.log(x) / Math.LN10;
};

(function() {
  var Helpers = {
    avg: function(arr) {
      var v = 0;
      for (var index = 0; index < arr.length; ++index) {
        v += arr[index];
      }
      return v / arr.length;
    },
    min: function(arr) {
      if (arr.length === 0) return 0;
      var v = arr[0];
      for (var index = 1; index < arr.length; ++index) {
        var v2 = arr[index];
        if (Array.isArray(v2)) v2 = Helpers.avg(v2);
        if (v2 < v) v = v2;
      }
      return Math.max(0, v);
    },
    max: function(arr) {
      var v = 0;
      for (var index = 0; index < arr.length; ++index) {
        var v2 = arr[index];
        if (Array.isArray(v2)) v2 = Helpers.avg(v2);
        if (v2 > v) v = v2;
      }
      return Math.max(0, v);
    },
    upperMax: function(arr) {
      var v = 0;
      for (var index = 0; index < arr.length; ++index) {
        var v2 = arr[index];
        if (Array.isArray(v2)) v2 = Helpers.max(v2);
        if (v2 > v) v = v2;
      }
      return Math.max(0, v);
    },
    niceNumbers: function(range, round) {
      var exponent = Math.floor(Math.log10(range));
      var fraction = range / Math.pow(10, exponent);
      var niceFraction;
      if (round) {
        if (fraction < 1.5) niceFraction = 1;
        else if (fraction < 3) niceFraction = 2;
        else if (fraction < 7) niceFraction = 5;
        else niceFraction = 10;
      } else {
        if (fraction <= 1.0) niceFraction = 1;
        else if (fraction <= 2) niceFraction = 2;
        else if (fraction <= 5) niceFraction = 5;
        else niceFraction = 10;
      }
      return niceFraction * Math.pow(10, exponent);
    },
    getLinearTicks: function(min, max, maxTicks) {
      var range = Helpers.niceNumbers(max - min, false);
      var tickSpacing = Helpers.niceNumbers(range / (maxTicks - 1), true);
      return [
        Math.floor(min / tickSpacing) * tickSpacing,
        Math.ceil(max / tickSpacing) * tickSpacing,
        tickSpacing
      ];
    },
    getFont: function(options) {
      options.style = options.style || 'normal';
      options.variant = options.variant || 'normal';
      options.weight = options.weight || 'lighter';
      options.size = options.size || '12';
      options.family = options.family || 'Arial';
      return [options.style, options.variant, options.weight, options.size + 'px', options.family].join(' ');
    }
  };

  var BarChart = (function() {
    function BarChart(ctx, options) {
      this.options = {
        font: 'Helvetica',
        fontWeight: 'normal',
        fontSizeTitle: 24,
        fontSizeAxes: 20,
        fontSizeTicks: 18,
        fontSizeLabels: 18,
        paddingPercentBars: 0.10,
        paddingPercentTicks: 0.15,
        paddingPixelsVertical: 10,
        paddingPixelsHorizontal: 10,
        paddingPixelsTicks: 10,
        fillColorBackground: 'rgb(255, 255, 255)',
        strokeColorBars: 'rgb(0, 0, 0)',
        fillColorBars: 'rgba(180, 180, 180, 0.25)',
        scaleStyle: 'linear',
        errorBarStyle: 'none',
        defaultMaxTick: 0
      };
      options = options || { };
      for (var key in this.options) {
        if (options.hasOwnProperty(key)) this.options[key] = options[key];
      }
      this.ctx = ctx;
      this.content = { };
    }

    BarChart.prototype.update = function(content) {
      if (typeof content !== 'object') {
        throw new Error('Collections must be objects.');
      } else if (!(content.hasOwnProperty('labels') && content.hasOwnProperty('data'))) {
        throw new Error('Collection must specify labels and data.');
      } else if (!(Array.isArray(content.labels) && Array.isArray(content.data))) {
        throw new Error('Labels and data must be arrays.');
      } else if (content.labels.length !== content.data.length) {
        throw new Error('Labels and data length must match.');
      }
      content._data_standard_deviation = [];
      content._data_standard_error = [];
      for (var i = 0; i < content.data.length; ++i) {
        var isArr = Array.isArray(content.data[i]);
        if (this.options.scaleStyle === 'log2') {
          if (isArr) {
            for (var i3 = 0; i3 < content.data[i].length; ++i3) content.data[i][i3] = Math.log2(content.data[i][i3]);
          } else content.data[i] = Math.log2(content.data[i]);
        }
        if (isArr) {
          var mean = Helpers.avg(content.data[i]);
          var acc = 0;
          for (var i2 = 0; i2 < content.data[i].length; ++i2) acc += Math.pow(mean - content.data[i][i2], 2);
          acc = Math.sqrt(acc / (content.data[i].length - 1));
          content._data_standard_deviation.push(acc);
          content._data_standard_error.push(acc / Math.sqrt(content.data[i].length));
        } else {
          content._data_standard_deviation.push(0);
          content._data_standard_error.push(0);
        }
      }
      this.content = content;
      this.redraw();
    };

    BarChart.prototype.redraw = function() {
      setTimeout(function() {
        this._draw();
      }.bind(this), 0);
    };

    BarChart.prototype._draw = function() {
      var options = this.options;
      var ctx = this.ctx, content = this.content;
      ctx.translate(-0.5, -0.5);
      var width = ctx.canvas.width, height = ctx.canvas.height;
      var remainingWidth = width, remainingHeight = height;
      var index;

      if (options.fillColorBackground != null) {
        ctx.save();
        ctx.fillStyle = options.fillColorBackground;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      var topYPadding = options.paddingPixelsHorizontal;
      remainingHeight -= options.paddingPixelsHorizontal;
      ctx.fillStyle = 'rgb(0, 0, 0)';
      /* Draw title of bar chart */
      if (content.title != null) {
        ctx.save();
        ctx.font = Helpers.getFont({ weight: options.fontWeight, size: options.fontSizeTitle, family: options.font });
        ctx.textAlign = 'center';
        ctx.fillText(content.title, width / 2, topYPadding + options.fontSizeTitle);
        ctx.restore();
        remainingHeight -= options.fontSizeTitle * 1.25;
        topYPadding += options.fontSizeTitle * 1.25;
      }

      /* Compute required left padding */
      var leftXPadding = options.paddingPixelsVertical;
      remainingWidth  -= options.paddingPixelsVertical;

      var leftXDrawYLabel = null;
      if (content.yAxis != null) {
        leftXDrawYLabel = leftXPadding + options.fontSizeAxes * 0.5;
        remainingWidth -= options.fontSizeAxes * 1.25;
        leftXPadding += options.fontSizeAxes * 1.25;
      }

      ctx.save();
      ctx.font = Helpers.getFont({ weight: options.fontWeight, size: options.fontSizeTicks, family: options.font });
      var maxChartValue = Helpers.upperMax(content.data);
      if (options.defaultMaxTick > maxChartValue) maxChartValue = options.defaultMaxTick;
      var maxYAxisTickWidth = options.scaleStyle == 'log2' ? Math.ceil(Math.pow(2, maxChartValue)) : (Math.ceil(maxChartValue) + '.00');
      maxYAxisTickWidth = ctx.measureText(maxYAxisTickWidth).width;
      maxYAxisTickWidth = Math.ceil(maxYAxisTickWidth) + options.paddingPixelsTicks;
      remainingWidth -= maxYAxisTickWidth;
      leftXPadding += maxYAxisTickWidth;
      ctx.restore();

      var rightXPadding = options.paddingPixelsVertical;
      remainingWidth -= options.paddingPixelsVertical;

      /* Draw x-axis label of bar chart */
      var bottomYPadding = options.paddingPixelsHorizontal;
      remainingHeight -= options.paddingPixelsHorizontal;
      if (content.xAxis != null) {
        ctx.save();
        ctx.font = Helpers.getFont({ weight: options.fontWeight, size: options.fontSizeAxes, family: options.font });
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.textAlign = 'center';
        ctx.fillText(content.xAxis, (width - remainingWidth) + remainingWidth / 2, height - bottomYPadding);
        remainingHeight -= options.fontSizeAxes;
        bottomYPadding += options.fontSizeAxes;
        ctx.restore();
      }

      var widthPerBar = remainingWidth / content.data.length;

      /* Draw x-axis top labels */
      if (content.topLabels != null) {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = Helpers.getFont({ weight: options.fontWeight, size: options.fontSizeLabels, family: options.font });
        remainingHeight -= options.fontSizeLabels * 1.5;
        topYPadding += options.fontSizeLabels * 1.5;
        for (index = 0; index < content.topLabels.length; ++index) {
          ctx.fillText(
            content.topLabels[index],
            leftXPadding + index * widthPerBar + widthPerBar / 2,
            topYPadding - options.fontSizeLabels / 2
          );
        }
        ctx.restore();
      }

      /* Draw x-axis labels */
      ctx.save();
      ctx.font = Helpers.getFont({ weight: options.fontWeight, size: options.fontSizeLabels, family: options.font });
      var computedBarPadding = Math.floor((widthPerBar * options.paddingPercentBars) / 2);
      var maxTextWidth = 0, maxTextStackSize = 1;
      for (index = 0; index < content.labels.length; ++index) {
        var tLabel = content.labels[index];
        if (Array.isArray(tLabel)) {
          maxTextStackSize = Math.max(maxTextStackSize, tLabel.length);
          for (var index2 = 0; index2 < tLabel.length; ++index2) {
            maxTextWidth = Math.max(maxTextWidth, ctx.measureText(tLabel[index2]).width);
          }
        } else maxTextWidth = Math.max(maxTextWidth, ctx.measureText(tLabel).width);
      }
      var xLabelsRotated = false;
      if (maxTextWidth > widthPerBar - computedBarPadding) {
        ctx.textAlign = 'right';
        ctx.rotate(Math.PI * 1.5);
        xLabelsRotated = true;
      } else {
        ctx.textAlign = 'center';
      }
      for (index = 0; index < content.labels.length; ++index) {
        var cLabel = content.labels[index];
        var x = leftXPadding + index * widthPerBar + widthPerBar / 2, y = height - options.fontSizeLabels / 2 - bottomYPadding;
        if (xLabelsRotated) {
          y = topYPadding + remainingHeight - maxTextWidth + 5;
          y = [x, x = -y][0];
        }
        var yUp = options.fontSizeLabels * (maxTextStackSize - 1);
        if (Array.isArray(cLabel)) {
          var yUp;
          if (xLabelsRotated) {
            yUp = options.fontSizeLabels * (cLabel.length - 1.5);
            yUp /= 2;
          }
          for (var index2 = 0; index2 < cLabel.length; ++index2) {
            ctx.fillText(cLabel[index2], x, y - yUp);
            yUp -= options.fontSizeLabels;
          }
        } else {
          if (xLabelsRotated) yUp = -options.fontSizeLabels * 0.25;
          ctx.fillText(cLabel, x, y - yUp);
        }
      }
      if (xLabelsRotated) {
        remainingHeight -= maxTextWidth + 5;
        bottomYPadding += maxTextWidth + 5;
      } else {
        var remVal = options.fontSizeLabels * maxTextStackSize;
        remVal += options.fontSizeLabels * 0.5;
        remainingHeight -= remVal;
        bottomYPadding += remVal;
      }
      ctx.restore();

      /* Draw boundaries */
      ctx.save();
      ctx.strokeStyle = 'rgb(0, 0, 0)';
      ctx.beginPath();
      if (content.topLabels != null) {
        ctx.moveTo(leftXPadding + remainingWidth, topYPadding);
        ctx.lineTo(leftXPadding, topYPadding);
      } else {
        ctx.moveTo(leftXPadding, topYPadding);
      }
      ctx.lineTo(leftXPadding, topYPadding + remainingHeight);
      ctx.lineTo(leftXPadding + remainingWidth, topYPadding + remainingHeight);
      if (content.topLabels != null) ctx.lineTo(leftXPadding + remainingWidth, topYPadding);
      ctx.stroke();
      ctx.restore();

      /* Draw y-axis label of bar chart */
      if (content.yAxis != null) {
        ctx.save();
        ctx.rotate(Math.PI * 1.5);
        ctx.font = Helpers.getFont({ weight: options.fontWeight, size: options.fontSizeAxes, family: options.font });
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.textAlign = 'center';
        ctx.fillText(content.yAxis, -(topYPadding + remainingHeight / 2), leftXDrawYLabel);
        ctx.restore();
      }

      /* Draw y-axis labels */
      ctx.save();
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.20)';
      ctx.font = Helpers.getFont({ weight: options.fontWeight, size: options.fontSizeTicks, family: options.font });
      ctx.textAlign = 'right';
      var tickMeta = Helpers.getLinearTicks(0, maxChartValue, Math.max(2, remainingHeight / (options.fontSizeTicks * (1 + options.paddingPercentTicks))));
      maxChartValue = tickMeta[1] + Math.ceil(maxChartValue / options.fontSizeTicks);
      var ticks = [];
      while (tickMeta[0] <= tickMeta[1]) {
        ticks.push(tickMeta[0]);
        tickMeta[0] += tickMeta[2];
      }
      for (index = 0; index < ticks.length; ++index) {
        var tickHeight = Math.round(remainingHeight * (ticks[index] / maxChartValue));
        if (options.scaleStyle == 'log2' && ticks[index] !== 0) ticks[index] = Math.round(Math.pow(2, ticks[index]));
        else ticks[index] = Math.floor(ticks[index] * 100) / 100;
        ctx.fillText(ticks[index] + '', leftXPadding - options.paddingPixelsTicks, topYPadding + remainingHeight - tickHeight);
        if (index == 0) continue;
        ctx.beginPath();
        ctx.moveTo(leftXPadding, topYPadding + remainingHeight - tickHeight);
        ctx.lineTo(leftXPadding + remainingWidth, topYPadding + remainingHeight - tickHeight);
        ctx.stroke();
      }
      ctx.restore();

      /* Draw bars */
      ctx.save();
      ctx.font = Helpers.getFont({ weight: options.fontWeight, size: options.fontSizeLabels, family: options.font });
      ctx.textAlign = 'center';
      for (index = 0; index < content.data.length; ++index) {
        if (content.fillColor != null) {
          if (Array.isArray(content.fillColor)) ctx.fillStyle = content.fillColor[index];
          else ctx.fillStyle = content.fillColor;
        } else ctx.fillStyle = options.fillColorBars;
        if (content.strokeColor != null) {
          if (Array.isArray(content.strokeColor)) ctx.fillStyle = content.strokeColor[index];
          else ctx.fillStyle = content.strokeColor;
        } else ctx.strokeStyle = options.strokeColorBars;
        var v = content.data[index];
        if (Array.isArray(v)) v = Helpers.avg(v);
        var renderBarHeight = Math.round(remainingHeight * (v / maxChartValue));
        var renderStartX = leftXPadding + widthPerBar * index;
        var renderUpToY = topYPadding + remainingHeight - renderBarHeight;
        ctx.beginPath();
        ctx.moveTo(renderStartX + computedBarPadding, topYPadding + remainingHeight);
        ctx.lineTo(renderStartX + computedBarPadding, renderUpToY);
        ctx.lineTo(renderStartX + (widthPerBar - 1) - computedBarPadding, renderUpToY);
        ctx.lineTo(renderStartX + (widthPerBar - 1) - computedBarPadding, topYPadding + remainingHeight);
        ctx.stroke();
        ctx.fill();

        if (options.errorBarStyle === 'error') {
          var val;
          if ((val = content._data_standard_error[index]) != 0) {
            var renderBarError = Math.round(remainingHeight * (val / maxChartValue));
            ctx.beginPath();
            var wiskerWidth = Math.round((widthPerBar - computedBarPadding * 2) / 8);
            var x = leftXPadding + widthPerBar * index + widthPerBar / 2;
            ctx.moveTo(x - wiskerWidth, renderUpToY + renderBarError);
            ctx.lineTo(x + wiskerWidth, renderUpToY + renderBarError);
            ctx.moveTo(x, renderUpToY + renderBarError);
            ctx.lineTo(x, renderUpToY - renderBarError);
            ctx.moveTo(x - wiskerWidth, renderUpToY - renderBarError);
            ctx.lineTo(x + wiskerWidth, renderUpToY - renderBarError);
            ctx.stroke();
          }
        }

        if (content.barTooltips != null) {
          ctx.fillStyle = 'rgb(0, 0, 0)';
          ctx.fillText(content.barTooltips[index] || '', renderStartX + widthPerBar / 2, renderUpToY - 3);
        }
      }
      ctx.restore();
      ctx.translate(0.5, 0.5);
    };

    return BarChart;
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = BarChart;
  } else {
    window.BarChart = BarChart;
  }
})();
