var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('resize', ()=>{
  return gulp
    .src('./pre/*.{png,jpg,jpeg}')
    .pipe(
      $.responsive(
        {
          '*': [
            {
              width: 1280,
              // rename: {
              //   suffix: '-450',
              //   // extname: '.jpg'
              // },
              withoutEnlargement: true,
              // format: 'jpeg'
            },
          ]
        },
        {
          // Global configuration for all images
          // The output quality for JPEG, WebP and TIFF output formats
          quality: 90,
          // Use progressive (interlace) scan for JPEG and PNG output
          progressive: true,
          // Strip all metadata
          withMetadata: false,
          // Do not emit the error when image is enlarged.
          errorOnEnlargement: false
        }
      )
    )
    .pipe(gulp.dest('./ThisFolderShouldNotExist'));
});






const imagemin = require('gulp-imagemin');

// exports.default = () => (
// 	gulp.src('./pre/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('./post'))
// );

gulp.task("compress", ()=>{
  return gulp.src('./ThisFolderShouldNotExist/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./post'));
});