'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const changed = require('gulp-changed')
const maps = require('gulp-sourcemaps')

/**
 * SCSS / CSS
 **/

const SCSS_SRC = './src/assets/scss/**/*.scss'
const SCSS_DEST = './src/assets/css'

// Compile SCSS
gulp.task('compileSass', () => {
  gulp.src(SCSS_SRC)
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(maps.write('./'))
    .pipe(gulp.dest(SCSS_DEST))
})

// Detect changes in SCSS
gulp.task('watchScss', () => {
  gulp.watch(SCSS_SRC, ['compileSass'])
})

// Run tasks
gulp.task('default', ['watchScss'])
