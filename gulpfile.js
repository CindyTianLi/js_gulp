var gulp = require('gulp');



var uglify = require("gulp-uglify");




//gulp.task('default',function(){
//  console.log('hello world');
//});

//gulp.task('default',function(){
//	
//  console.log('hello world');
//});




//
//npm install --save-dev gulp-uglify




var uglify = require("gulp-uglify");



gulp.task('minify-js', function () {
    gulp.src('unpressed/js/*.js')          // 引入js
        .pipe(uglify())              //   声明压缩js文件
        .pipe(gulp.dest('pressed/js')); //   压缩后的保存目录
});



/*
*
*
*
* npm install --save-dev gulp-minify-css
* */


var minifyCss = require("gulp-minify-css");


gulp.task('minify-css', function () {
    gulp.src('unpressed/css/*.css') //引入css
        .pipe(minifyCss())    //压缩css
        .pipe(gulp.dest('pressed/css'));
});


/*
* npm install --save-dev   gulp-minify-html
*
* */

var minifyHtml = require("gulp-minify-html");

gulp.task('minify-html', function () {
    gulp.src('unpressed/html/*.html') // 引入html
        .pipe(minifyHtml())    //压缩html
        .pipe(gulp.dest('pressed/html'));
});




/*图片压缩*/

/*
* 
npm install --save-dev   gulp-imagemin

npm install --save-dev  imagemin-pngquant
*
* */

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


 gulp.task('gulp-img', function () {
	gulp.src('unpressed/imgs/*')
     .pipe(imagemin({
      progressive: true,
      use: [pngquant()] 
     }))
     .pipe(gulp.dest('pressed/imgs'));
});







 gulp.task('default',['minify-js','minify-css','minify-html','gulp-img'], function () {
		console.log('成功');
});



/*执行一个任务同步执行其他任务*/

/*
 gulp.task('default',['minify-js','minify-css','minify-html'], function () {
 return gulp.src('img/*')
     .pipe(imagemin({
      progressive: true,
      use: [pngquant()] //
     }))
     .pipe(gulp.dest('demo/img'));
});

*/