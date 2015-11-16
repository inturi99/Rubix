var fs = require('fs');
var del = require('del');
var path = require('path');
var gulp = require('gulp');
var watch = require('watch');
var flip = require('css-flip');
var map = require('map-stream');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var transform = require('vinyl-transform');
var child_process = require('child_process');

var argv = require('yargs').argv;

var sass = require('gulp-sass');
var bless = require('gulp-bless');
var uglify = require('gulp-uglify');
var insert = require('gulp-insert');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var ttf2woff = require('gulp-ttf2woff');
var cssfont64 = require('gulp-cssfont64');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack-stream');
var dwebpack = require('webpack');

var runSequence = require('run-sequence');

var package = require('./package.json');

var defaultAppName = argv.name ? argv.name : 'app';
var createRTL = argv.rtl ? true : false;
var production = argv.production ? true : false;
var port = argv.port ? argv.port : 8080;
var wport = argv.wport ? argv.wport : 8079;
var whost = argv.whost ? argv.whost : 'localhost';

/* file patterns to watch */
var paths = {
  index: ['src/jsx/'+defaultAppName+'/index.html', 'server.js'],
  l20n: ['src/global/vendor/l20n/*.jsx'],
  jsx: ['src/jsx/*.jsx', 'src/global/requires/*.js', 'src/jsx/**/*.jsx', 'src/jsx/**/**/*.jsx', 'src/jsx/**/**/**/*.jsx', '!src/global/vendor/l20n/*.jsx'],
  scss: ['public/fonts/web/*.ttf', 'src/sass/*.scss', 'src/sass/**/*.scss', 'src/sass/**/**/*.scss', 'src/sass/**/**/**/*.scss', 'src/sass/**/**/**/**/*.scss', 'src/global/sass/*.scss', 'src/global/sass/**/*.scss', 'src/global/sass/**/**/*.scss', 'src/global/sass/**/**/**/*.scss', 'src/global/sass/**/**/**/**/*.scss'],
  ttf: ['public/fonts/dropbox/'+defaultAppName+'/*.ttf']
};

var banner = function() {
  return '/*! '+package.name+' - v'+package.version+' - '+gutil.date(new Date(), "yyyy-mm-dd")+
          ' [copyright: '+package.copyright+']'+' */';
};

function logData() {
  gutil.log(
    gutil.colors.bold(
      gutil.colors.blue.apply(this, arguments)
    )
  );
}

logData('Name :', defaultAppName);
logData('RTL  :', (createRTL ? 'yes':'no'));
logData('PORT :', port);
logData('WEBPACK DEV SERVER PORT :', wport);
logData('WEBPACK DEV SERVER HOST :', whost);
logData('Environment :', (production ? 'Production':'Development'));

/* ---------------------------------- */
/* --------- BEGIN APP:SASS --------- */
/* ---------------------------------- */
gulp.task('sass:app', function() {
  return gulp.src('./src/sass/'+defaultAppName+'/*.scss')
          .pipe(sass({
            // sourceComments: 'normal' // uncomment when https://github.com/sass/node-sass/issues/337 is fixed
          }))
          .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(gulp.dest('public/css/'+defaultAppName+'/raw/ltr'))
          .pipe(browserSync.reload({stream:true}));
});

gulp.task('sass:app:rtl', ['sass:app'], function() {
  if(!createRTL) return null;
  var flipStylesheet = transform(function(filename) {
    return map(function(chunk, next) {
      return next(null, flip(chunk.toString()));
    });
  });
  return gulp.src('public/css/'+defaultAppName+'/raw/ltr/*.css')
          .pipe(flipStylesheet)
          .pipe(gulp.dest('public/css/'+defaultAppName+'/raw/rtl'))
          .pipe(browserSync.reload({stream:true}));
});

gulp.task('minifycss:app', function() {
  return gulp.src(['public/css/'+defaultAppName+'/raw/ltr/*.css'])
          .pipe(minifycss())
          .pipe(gulp.dest('public/css/'+defaultAppName+'/min/ltr'));
});

gulp.task('minifycss:app:rtl', function() {
  if(!createRTL) return null;
  return gulp.src(['public/css/'+defaultAppName+'/raw/rtl/*.css'])
        .pipe(minifycss())
        .pipe(gulp.dest('public/css/'+defaultAppName+'/min/rtl'));
});

gulp.task('bless:app', function() {
  return gulp.src('public/css/'+defaultAppName+'/min/ltr/*.css')
          .pipe(bless())
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(gulp.dest('public/css/'+defaultAppName+'/blessed/ltr'));
});

gulp.task('bless:app:rtl', function() {
  if(!createRTL) return null;
  return gulp.src('public/css/'+defaultAppName+'/min/rtl/*.css')
          .pipe(bless())
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(gulp.dest('public/css/'+defaultAppName+'/blessed/rtl'));
});
/* -------------------------------- */
/* --------- END APP:SASS --------- */
/* -------------------------------- */

/* ----------------------------------------- */
/* ------------ BEGIN REACT.L20n ----------- */
/* ----------------------------------------- */
gulp.task('react:react-l20n', function() {
  return gulp.src('./src/global/vendor/l20n/index.jsx')
          .pipe(webpack({
            cache: true,
            module: {
              loaders: [
                {test: /\.jsx$/, loader: 'babel-loader?stage=1&compact=false'}
              ]
            }
          }))
          .pipe(rename('react-l20n.js'))
          .pipe(gulp.dest('public/js/common/react-l20n'));
});

gulp.task('uglify:react-l20n', function() {
  return gulp.src('public/js/common/react-l20n/react-l20n.js')
          .pipe(uglify({
            preserveComments: false,
            compress: {
              warnings: false
            }
          }))
          .pipe(rename('react-l20n.min.js'))
          .pipe(gulp.dest('public/js/common/react-l20n'));
});
/* --------------------------------------- */
/* ----------- END REACT.L20n ------------ */
/* --------------------------------------- */

var webpackConfig = function(withHotLoader) {
  var loaders = ['react-hot', 'babel-loader?cacheDirectory&stage=1&compact=false'];
  if(!withHotLoader) {
    loaders.shift();
  }

  return {
    cache: true,
    module: {
      loaders: [
        {test: /\.txt$/,
         exclude: /(node_modules|bower_components)/,
         loaders: ['babel-loader']},
        {test: /\package\.json$/,
         exclude: /(node_modules|bower_components)/,
         loaders: ['json']},
        {test: /[\\\\|\/]src[\\\\|\/]jsx[\\\\|\/](.*?)\.txt$/,
         exclude: /(node_modules|bower_components)/,
         loaders: ['raw']},
        {test: /[\\\\|\/]src[\\\\|\/]jsx[\\\\|\/](.*?)\.json$/,
         exclude: /(node_modules|bower_components)/,
         loaders: ['json']},
        {test: /[\.jsx|\.js]$/,
         exclude: /(node_modules|bower_components)/,
         loaders: loaders}
      ]
    },
    plugins: [
      new dwebpack.DefinePlugin({
        __BACKEND__: JSON.stringify('node'),
        __APPNAME__: JSON.stringify(defaultAppName)
      })
    ],
    resolve: {
      modulesDirectories: ['node_modules',
                            path.join('src'),
                            path.join('src', 'jsx', defaultAppName)],
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    externals: {
      'react': 'react'
    }
  };
};

/* --------------------------------- */
/* ---------- BEGIN APP:JS --------- */
/* --------------------------------- */
gulp.task('react:development:server', function() {
  var wconfig = webpackConfig(true);
  wconfig.externals.react = 'React';
  wconfig.entry = [
    'webpack-dev-server/client?http://'+whost+':'+wport,
    'webpack/hot/only-dev-server',
    './src/jsx/'+defaultAppName+'/main.jsx'
  ];
  wconfig.output = {
    path: process.cwd(),
    contentBase: 'http://'+whost+':'+wport,
    filename: 'bundle.js',
    publicPath: 'http://'+whost+':'+wport+'/scripts/'
  };
  wconfig.plugins = wconfig.plugins.concat([
    new dwebpack.HotModuleReplacementPlugin()
  ]);

  var server = new WebpackDevServer(dwebpack(wconfig), {
    publicPath: wconfig.output.publicPath,
    hot: true,
    inline: true,
    stats: {
      colors: true,
      progress: true
    }
  });

  server.listen(wport, function (err, result) {
    if (err) {
      console.log(err);
    }

    gutil.log('Webpack Dev Server started. Compiling...');
  });
});

gulp.task('react:development', function() {
  var wconfig = webpackConfig();
  wconfig.target = 'node';
  wconfig.output = {
   libraryTarget: 'commonjs2'
  };

  return gulp.src('src/jsx/'+defaultAppName+'/main.jsx')
          .pipe(webpack(wconfig))
          .pipe(rename(defaultAppName+'.node.js'))
          .pipe(gulp.dest('public/js/'+defaultAppName+'/'));
});

gulp.task('react:test', function() {
  var wconfig = webpackConfig();
  wconfig.target = 'node';
  wconfig.output = {
   libraryTarget: 'umd'
  };

  return gulp.src('./public/js/common/rubix-bootstrap/rubix-bootstrap.js')
          .pipe(webpack(wconfig))
          .pipe(rename('rubix-bootstrap.test.js'))
          .pipe(gulp.dest('public/js/common/rubix-bootstrap'));
});

gulp.task('react:app', function() {
  var wconfig = webpackConfig();
  wconfig.externals.react = 'React';
  return gulp.src('src/jsx/'+defaultAppName+'/main.jsx')
          .pipe(webpack(wconfig))
          .pipe(rename(defaultAppName+'.js'))
          .pipe(gulp.dest('public/js/'+defaultAppName+'/'));
});

gulp.task('react:concat', ['react:app'], function() {
  return gulp.src(['src/global/requires/*.js', 'public/js/'+defaultAppName+'/'+defaultAppName+'.js'])
          .pipe(concat(''+defaultAppName+'.js'))
          .pipe(insert.prepend('(function() {\n'))
          .pipe(insert.prepend(banner()+'\n'))
          .pipe(insert.append('\n})();'))
          .pipe(gulp.dest('public/js/'+defaultAppName+'/'));
});

gulp.task('uglify:app', ['react:concat'], function() {
  return gulp.src('public/js/'+defaultAppName+'/'+defaultAppName+'.js')
          .pipe(uglify({
            preserveComments: false,
            compress: {
              warnings: false
            }
          }))
          .pipe(rename(''+defaultAppName+'.min.js'))
          .pipe(insert.prepend(banner()))
          .pipe(gulp.dest('public/js/'+defaultAppName+'/'));
});
/* ------------------------------- */
/* ---------- END APP:JS --------- */
/* ------------------------------- */

/* --------------------------------- */
/* ------- BEGIN Base64 CSS -------- */
/* --------------------------------- */
gulp.task('base64-css:convert', function() {
  return gulp.src('public/fonts/dropbox/'+defaultAppName+'/*.ttf')
          .pipe(ttf2woff())
          .pipe(cssfont64())
          .pipe(replace('-Regular;', '; font-weight: normal; font-style: normal;'))
          .pipe(replace('-Bold;', '; font-weight: bold; font-style: normal;'))
          .pipe(replace('-Black;', '; font-weight: 800; font-style: normal;'))
          .pipe(replace('-Light;', '; font-weight: 300; font-style: normal;'))
          .pipe(replace('-Hairline;', '; font-weight: 300; font-style: normal;'))
          .pipe(replace('-Italic;', '; font-weight: normal; font-style: italic;'))
          .pipe(replace('-BoldItalic;', '; font-weight: bold; font-style: italic;'))
          .pipe(replace('-BlackItalic;', '; font-weight: 800; font-style: italic;'))
          .pipe(replace('-LightItalic;', '; font-weight: 300; font-style: italic;'))
          .pipe(replace('-HairlineItalic;', '; font-weight: 200; font-style: italic;'))
          .pipe(replace('font-woff', 'x-font-woff'))
          .pipe(gulp.dest('prebuild/css/fonts/'+defaultAppName));
});

gulp.task('base64-css:concat', ['base64-css:convert'], function() {
  return gulp.src(['prebuild/css/fonts/'+defaultAppName+'/*.css'])
          .pipe(insert.prepend('@charset "UTF-8";\n'))
          .pipe(concat('fonts.css'))
          .pipe(gulp.dest('public/css/fonts/'+defaultAppName))
          .pipe(browserSync.reload({stream:true}));
});

gulp.task('base64-css', ['base64-css:concat'], function(cb) {
  del('prebuild/css', function(err) {
    cb();
  });
});
/* --------------------------------- */
/* --------- END Base64 CSS -------- */
/* --------------------------------- */

/* --------------------------------- */
/* --------- BEGIN EXPRESS --------- */
/* --------------------------------- */
var child = null, browserSyncConnected = false;
gulp.task('express', function() {
  if(child) child.kill();
  child = child_process.spawn(process.execPath, ['./server.js'], {
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development',
      APP: defaultAppName,
      RTL: createRTL,
      PORT: 3000,
      WPORT: wport,
      WHOST: whost
    },
    stdio: ['ipc']
  });
  child.stdout.on('data', function(data) {
    gutil.log(gutil.colors.bgCyan(gutil.colors.blue(data.toString().trim())));
  });
  child.stderr.on('data', function(data) {
    gutil.log(gutil.colors.bgRed(gutil.colors.white(data.toString().trim())));
    browserSync.notify('ERROR: ' + data.toString().trim(), 5000);
  });
  child.on('message', function(m) {
    if(m === 'CONNECTED' && !browserSyncConnected) {
      gutil.log(gutil.colors.bgMagenta(gutil.colors.white('Server spawned! Starting proxy...')));
      browserSync({
        proxy: 'localhost:3000',
        port: port
      }, function() {
        browserSyncConnected = true;
      });
    } else {
      browserSync.notify(m, 5000);
    }
  });
});

process.on('uncaughtException', function(err) {
  if(child) child.kill();
  throw new Error(err);
});
/* ------------------------------- */
/* --------- END EXPRESS --------- */
/* ------------------------------- */

/* ------------------------------- */
/* -------- BEGIN NOTIFY --------- */
/* ------------------------------- */
gulp.task('notify', function() {
  browserSync.notify('Live reloading ...');
});
/* ------------------------------- */
/* ---------- END NOTIFY --------- */
/* ------------------------------- */

/* ------------------------------------ */
/* -------- BEGIN BROWSERSYNC --------- */
/* ------------------------------------ */
var createMonitor = function() {
  var callback = function(f) {
    browserSync.reload(f);
  };

  return function(p) {
    watch.createMonitor(p, function(m) {
      m.on('created', callback);
      m.on('changed', callback);
      m.on('removed', callback);
    });
  }
}

if(!production) {
  var m = createMonitor();
  m('public/imgs');
  m('public/locales');
}
/* ------------------------------------ */
/* ---------- END BROWSERSYNC --------- */
/* ------------------------------------ */

/* ------------------------------ */
/* --------- GULP TASKS --------- */
/* ------------------------------ */
gulp.task('sass', ['sass:app:rtl']);
gulp.task('react-l20n', ['react:react-l20n']);
gulp.task('uglify', ['uglify:react-l20n', 'uglify:app', 'react:development']);
gulp.task('clean:essentials', ['clean:react']);
gulp.task('minifycss', ['minifycss:app', 'minifycss:app:rtl']);
gulp.task('bless', ['bless:app', 'bless:app:rtl']);

gulp.task('build:css', ['sass']);
gulp.task('build:essentials', ['react-l20n']);

gulp.task('build:dev', ['build:css', 'build:essentials']);
gulp.task('build:dist', ['minifycss', 'bless', 'uglify']);

if(production) {
  logData('Building please wait...');
  gulp.task('default', function(callback) {
    runSequence('build:css', 'build:essentials', 'minifycss', 'bless', 'base64-css', 'uglify', function() {
      callback();
      gutil.log(
        gutil.colors.bgMagenta(
          gutil.colors.red(
            gutil.colors.bold('[          COMPLETED BUILD PROCESS          ]')
          )
        )
      );
    });
  });
} else {
  gulp.task('default', function(callback) {
    runSequence('react:development:server', 'react:development', 'build:css', 'build:essentials', 'base64-css', ['express', 'watch'], callback);
  });
}

gulp.task('development', function(callback) {
  runSequence('react:development', 'react:app', 'notify', 'express:watch', callback);
});

/*BEGIN: ALIASES FOR CERTAIN TASKS (for Watch)*/
gulp.task('react-l20n:watch', ['react-l20n'], ready);
gulp.task('build:css:watch', ['build:css'], ready);
gulp.task('express:watch', ['express'], ready);
gulp.task('rebuild:css', ['build:css'], ready);
gulp.task('base64-css:watch', ['base64-css'], ready);
/*END: ALIASES*/

gulp.task('watch', function() {
  gulp.watch(paths.index, ['express:watch']);
  gulp.watch(paths.l20n, ['react-l20n:watch']);
  gulp.watch(paths.scss, ['rebuild:css']);
  gulp.watch(paths.ttf, ['base64-css:watch'])
  gulp.watch(paths.jsx.concat(paths.scss), ['development']);
});

function ready() {
  gutil.log(
    gutil.colors.bgMagenta(
      gutil.colors.white(
        gutil.colors.bold('[          STATUS: READY          ]')
      )
    )
  );
}
