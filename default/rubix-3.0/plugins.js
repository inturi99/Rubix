var gulp = require('gulp');

var gutil = require('gulp-util');
var uglify = require('gulp-uglifyjs');

var runSequence = require('run-sequence');

function logData(data) {
  gutil.log(
    gutil.colors.blue(
      gutil.colors.bold(data)
    )
  );
}

gulp.task('minifyplugins', function() {
  gulp.src([
    '/js/common/pace/pace.js',
    '/js/common/uuid/uuid.js',
    '/bower_components/modernizr/modernizr.js',
    '/bower_components/codemirror/lib/codemirror.js',
    '/bower_components/codemirror/mode/javascript/javascript.js',
    '/bower_components/jquery/dist/jquery.js',
    '/bower_components/jquery-ui/jquery-ui.min.js',
    '/bower_components/moment/moment.js',
    '/bower_components/eventemitter2/lib/eventemitter2.js',
    '/bower_components/vex/js/vex.combined.min.js',
   // '/bower_components/chartjs/chart.js',
    '/bower_components/trumbowyg/dist/trumbowyg.js',
    '/bower_components/blueimp-gallery/js/blueimp-gallery.js',
    '/js/vendor/p-scrollbar/min/perfect-scrollbar.min.js',
    '/bower_components/react/react-with-addons.js',
    '/js/vendor/datatables/datatables.js',
    '/js/common/react-l20n/react-l20n.js',
    '/js/common/rubix-bootstrap/rubix-bootstrap.js',
    '/js/vendor/gmaps/gmaps.js',
    '/js/vendor/bootstrap/bootstrap.js',
    '/js/vendor/bootstrap-slider/bootstrap-slider.js',
    '/js/vendor/bootstrap-datetimepicker/bootstrap-datetimepicker.js',
    '/js/vendor/ion.tabs/ion.tabs.min.js',
    '/js/vendor/ion.rangeSlider/ion.rangeSlider.min.js',
    '/js/vendor/d3/d3.js',
    '/js/vendor/jquery.knob/jquery.knob.js',
    '/js/vendor/leaflet/leaflet.js',
    '/js/vendor/sparklines/sparklines.js',
    '/js/vendor/switchery/switchery.js',
    '/js/vendor/raphael/raphael.js',
    '/js/vendor/messenger/messenger.min.js',
    '/js/vendor/select2/select2.js',
    '/js/vendor/xeditable/xeditable.js',
    '/js/vendor/typeahead/typeahead.js',
    '/js/vendor/jquery-steps/jquery-steps.js',
    '/js/vendor/jquery-validate/jquery-validate.js',
    '/js/vendor/tablesaw/tablesaw.js',
    '/js/vendor/fullcalendar/fullcalendar.js',
    '/js/vendor/nestable/nestable.js',
    '/js/vendor/dropzone/dropzone.js',
    '/js/vendor/jcrop/color.js',
    '/js/vendor/jcrop/jcrop.js',
    '/js/vendor/prism/prism.js',
    '/js/vendor/morris/morris.js',
    '/js/vendor/timeline/timeline.js',
    '/js/vendor/holder/holder.js',
    '/bower_components/c3/c3.js',
    '/js/common/rubix/rubix.js',
    '/js/common/globals.js',
  ]).pipe(uglify('external.min.js', {
      preserveComments: false,
      compress: {
        warnings: false
      }
    })).pipe(gulp.dest('public/js/minified'));
});

logData('Minifying plugins. Please wait...');
gulp.task('default', function(callback) {
  runSequence('minifyplugins', function() {
    callback();
    gutil.log(
      gutil.colors.bgMagenta(
        gutil.colors.red(
          gutil.colors.bold('[          COMPLETED MINIFICATION          ]')
        )
      )
    );
  });
});
