var gulp = require('gulp');
var util = require('gulp-util');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

gulp.task('default', ['deploy']);

gulp.task('deploy', ['webpack'] , function() {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('./dist'));
})

gulp.task('webpack', function() {
    return gulp.src('app/index.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('dist/'));

});

gulp.task("dev", function() {

    var config = Object.create(webpack(webpackConfig));
    new WebpackDevServer(config, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new util.PluginError("webpack-dev-server", err);
        // Server listening
        util.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});