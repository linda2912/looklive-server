var gulp = require('gulp'); //The require statement tells Node to look into the node_modules folder for a package named gulp. 

var browserSync = require('browser-sync');

gulp.task('watch', function() {
    browserSync ({
        proxy: 'http://localhost:3000'
    });

    gulp.watch('public/styles/*.css', ['website-css'])

});

gulp.task('website-css', function(){
    return gulp.src('public/styles/*.css')
        .pipe(browserSync.reload({stream: true}))
});

//https://css-tricks.com/gulp-for-beginners/

var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');

gulp.task('minifyCss', function(){
    return gulp.src('public/styles/style.css')
    .pipe(cssnano())
    .pipe(gulp.dest('public/dist'))
})

gulp.task('minifyJs', function() {
    return gulp.src('public/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'))
})

gulp.task('images', function(){
  return gulp.src('public/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('public/dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('public/fonts/**/*')
  .pipe(gulp.dest('public/dist/fonts'))
})


//old code

// var gulp = require('gulp'),
//     svgSprite = require('gulp-svg-sprite');

// var svgConfig = {
//     dest: '.',
//     shape: {
//         dimension: {
//             maxWidth: 15,
//             maxHeight: 15
//         },
//         spacing: {
//             padding: 1,
//         },
//     },
//     mode: {
//         css: {
//             dest: '.',
//             sprite: 'sprite.svg',
//             render: {
//                 css: true
//             },
//             example: true,
//             prefix: '.icn-'
//         }
//     }
// };

// gulp.task('icons', function () {
//     gulp.src('./public//icons/svg/*.svg')
//         .pipe(svgSprite(svgConfig))
//         .pipe(gulp.dest('./public/icons/sprite/'));
// });
