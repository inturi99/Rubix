'use strict';

module.exports = function entry(src) {
  if (this && this.cacheable) {
    this.cacheable();
  }
  return [
    'var __ReactStyle = require("react-style");',
    src,
    'var __ReactStyle_result = __ReactStyle.compile(__ReactStyle.maxOverridesLength);',
    'module.exports = [[module.id, __ReactStyle_result.css, ""]];',
    'module.exports.__classNames = __ReactStyle_result.classNames;'
  ].join('\n');
};
