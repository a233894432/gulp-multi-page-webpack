/**
 Gulpfile for gulp-multi-page-package
 created by diogoxiang
 time: 2016年11月11日10:18:31
*/

var gulp = require('gulp'),
    os = require('os'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    cssnano = require('gulp-cssnano'), // 获取 minify-css 模块（用于压缩 CSS）这个是最新的
    sass = require('gulp-ruby-sass'), // 获取 gulp-ruby-sass 模块
    sourcemaps = require('gulp-sourcemaps'), // map调试
    rename = require('gulp-rename'), // 重命名
    concat = require('gulp-concat'),
    gulpOpen = require('gulp-open'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    md5 = require('gulp-md5-plus'),
    fileinclude = require('gulp-file-include'),
    clean = require('gulp-clean'),
    spriter = require('gulp-css-spriter'),
    base64 = require('gulp-css-base64'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    connect = require('gulp-connect');

var host = {
    path: 'dist/',
    port: 3000,
    html: 'index.html'
};

var Sasspaths = {
    css: 'src/css/',
    sass: 'src/sass/',
    dist: 'dist/'
}

//mac chrome: "Google chrome", 
var browser = os.platform() === 'linux' ? 'Google chrome' : (
    os.platform() === 'darwin' ? 'Google chrome' : (
        os.platform() === 'win32' ? 'chrome' : 'firefox'));
var pkg = require('./package.json');

//将图片拷贝到目标目录
gulp.task('copy:images', function (done) {
    gulp.src(['src/images/**/*']).pipe(gulp.dest('dist/images'));
    gulp.src(['src/upload/**/*']).pipe(gulp.dest('dist/upload')).on('end', done);
});
// 将字体文件复制到 目标目录
gulp.task('copy:fonts', function (done) {
    gulp.src(['src/css/fonts/*']).pipe(gulp.dest('dist/css/fonts')).on('end', done);
});

//压缩合并css, css中既有自己写的.less, 也有引入第三方库的.css
gulp.task('lessmin', function (done) {
    gulp.src(['src/css/main.less', 'src/css/*.css'])
        .pipe(less())
        //这里可以加css sprite 让每一个css合并为一个雪碧图
        //.pipe(spriter({}))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css/'))
        .on('end', done);
});

// 压缩合并 SCSS,
gulp.task('sassmin', function (done) {
    var cssSrc = Sasspaths.sass + '*.scss',
        cssSrca = Sasspaths.css, // 源码也输出一份
        cssdist = Sasspaths.dist + 'css/'
    gulp.src(cssSrc)
    return sass(cssSrc, {
            style: 'expanded'
        })
        // .pipe(gulp.dest(cssSrca))
        .pipe(gulp.dest(cssdist))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano()) // 精简
        // .pipe(gulp.dest(cssSrca))
        .pipe(gulp.dest(cssdist))
        .on('error', function (err) {
            console.error('Error!', err.message)
        })


});



//将js加上10位md5,并修改html中的引用路径，该动作依赖build-js
gulp.task('md5:js', ['build-js'], function (done) {
    gulp.src('dist/js/*.js')
        .pipe(md5(10, 'dist/app/*.html'))
        .pipe(gulp.dest('dist/js'))
        .on('end', done);
});

//将css加上10位md5，并修改html中的引用路径，该动作依赖sprite
gulp.task('md5:css', ['sprite'], function (done) {
    gulp.src('dist/css/*.css')
        .pipe(md5(10, 'dist/app/*.html'))
        .pipe(gulp.dest('dist/css'))
        .on('end', done);
});

//用于在html文件中直接include文件
gulp.task('fileinclude', function (done) {
    gulp.src(['src/app/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/app'))
        .pipe(connect.reload()) // 刷新浏览器
        .on('end', done);

});

//雪碧图操作，应该先拷贝图片并压缩合并css
gulp.task('sprite', ['copy:images', 'sassmin'], function (done) {
    var timestamp = +new Date();
    gulp.src('dist/css/style.min.css')
        .pipe(spriter({
            spriteSheet: 'dist/images/spritesheet' + timestamp + '.png',
            pathToSpriteSheetFromCSS: '../images/spritesheet' + timestamp + '.png',
            spritesmithOptions: {
                padding: 10
            }
        }))
        .pipe(base64())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
        .on('end', done);
});

// 清理目标目录
gulp.task('clean', function (done) {
    gulp.src(['dist'])
        .pipe(clean())
        .on('end', done);
});

// 监听文件变化
gulp.task('watch', function (done) {
    gulp.watch('src/**/*', ['sassmin', 'build-js', 'fileinclude'])
        .on('end', done);
});

// 监听CSS 变化
gulp.task('watch:css', function (done) {
    gulp.watch('src/sass/**/*', ['sassmin', 'fileinclude'])
        .on('end', done);
});

// 启动 本地浏览器
gulp.task('connect', function () {
    console.log('connect------------');
    connect.server({
        root: host.path,
        port: host.port,
        livereload: true
    });
});

gulp.task('open', function (done) {
    gulp.src('')
        .pipe(gulpOpen({
            app: browser,
            uri: 'http://localhost:3000/app'
        }))
        .on('end', done);
});

var myDevConfig = Object.create(webpackConfig);

var devCompiler = webpack(myDevConfig);

//引用webpack对js进行操作
gulp.task("build-js", ['fileinclude'], function (callback) {
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});

//发布
gulp.task('default', ['connect', 'fileinclude', 'md5:css', 'md5:js', 'open']);

//开发
gulp.task('dev', ['connect', 'copy:images', 'fileinclude', 'sassmin', 'build-js', 'watch', 'open']);

// 开发SASS 
gulp.task('dev:css', ['connect', 'copy:images', 'fileinclude', 'sassmin', 'build-js', 'watch:css', 'open'])