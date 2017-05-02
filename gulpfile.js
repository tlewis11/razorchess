let gulp = require('gulp');
let util = require('gulp-util');
let webpack = require('webpack');
let webpackStream = require('webpack-stream');
let webpackConfig = require('./webpack.config.js');
let open = require('gulp-open');

let WebpackDevServer = require('webpack-dev-server');

let devUrl = "http://localhost:8080/webpack-dev-server/app/index.html";


gulp.task('default', ['run-dev']);

gulp.task('deploy', ['webpack'] , function() {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('webpack', function() {
    return gulp.src('app/index.js')
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest('dist/'));

});

gulp.task("dev", ["deploy"], function() {

    let config = Object.create(webpack(webpackConfig));
    new WebpackDevServer(config, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new util.PluginError("webpack-dev-server", err);
        // Server listening
        util.log("[webpack-dev-server]", devUrl);

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('run-dev', ['dev'], function() {
    return gulp.src(__filename)
        .pipe(open({uri: devUrl}));
});
