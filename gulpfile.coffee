fs=require('fs')
gulp=require('gulp')
runSequence=require('run-sequence')
del=require('del')
concat=require('gulp-concat')
imgeMin=require('gulp-imagemin')
browserSync=require('browser-sync').create()

assets=JSON.parse(fs.readFileSync('assets.json'))
console.log(assets)

#构建任务结构
gulp.task('default',(callback)->
    runSequence(['clean'],['build'],['serve','watch'],callback)
)

gulp.task('clean',(callback)->
    del(['./dist/'],callback)
)

gulp.task('build',(callback)->
    runSequence(['assetsJs','assetsCss','assetsPlugins'],['appJs','appCss','imageMin','copyHtml'],callback)
)

#资源监听
gulp.task('serve',->
    browserSync.init({
      server:{
        baseDir:'./dist/'
      }
      port:2741
    })
)

gulp.task('watch',->
   gulp.watch('./src/**/*.*',['reload'])
)

gulp.task('reload',(callback)->
    runSequence(['build'],['reload-browser'],callback)
)

gulp.task('reload-browser',->
   browserSync.reload()
)

#资源文件处理
gulp.task('copyHtml',->
   gulp.src('./src/**/*.html')
   .pipe(gulp.dest('./dist/'))
)

gulp.task('assetsJs',->
  gulp.src(assets.assetsJs)
  .pipe(concat('assets.js',{newLine:';\n'}))
  .pipe(gulp.dest('./dist/assets/js/'))
)
gulp.task('assetsCss',->
  gulp.src(assets.assetsCss)
  .pipe(concat('assetsCss.css',{newLine:'\n\n'}))
  .pipe(gulp.dest('./dist/assets/css/'))
)
#gulp.task('assetsFont',->
#  gulp.src(assets.assetsFont)
#  .pipe(gulp.dest('./dist/assets/fonts/'))
#)

gulp.task('assetsPlugins',->
  gulp.src(assets.noCompressPlugin)
  .pipe(gulp.dest('./dist/assets/Plugins/'))
)

gulp.task('appJs',->
  gulp.src(assets.appJs)
  .pipe(concat('app.js',{newLine:';\n\n'}))
  .pipe(gulp.dest('./dist/assets/js/'))
)
gulp.task('appCss',->
  gulp.src(assets.appCss)
  .pipe(concat('appCss.css',{newLine:'\n\n'}))
  .pipe(gulp.dest('./dist/assets/css/'))
)

gulp.task('imageMin',->
  gulp.src(assets.copyImages)
#  .pipe(imgeMin())
  .pipe(gulp.dest('./dist/assets/images/'))
)