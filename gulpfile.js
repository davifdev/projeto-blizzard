import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import gulpBabel from "gulp-babel";
import concat from "gulp-concat";
import browserSync from "browser-sync";
import autoPrefixer from "gulp-autoprefixer";
import uglify from "gulp-uglify";

function sassCompiler() {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass({ style: "compressed" }))
    .pipe(
      autoPrefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

gulp.task("sass", sassCompiler);

function gulpJS() {
  return gulp
    .src("js/scripts/*.js")
    .pipe(concat("main.js"))
    .pipe(
      gulpBabel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./js"))
    .pipe(browserSync.stream());
}

gulp.task("mainjs", gulpJS);

function browser() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

gulp.task("browser-sync", browser);

function watch() {
  gulp.watch("./scss/*.scss", sassCompiler);
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("js/scripts/*js", gulpJS);
}

gulp.task("watch", watch);

gulp.task("default", gulp.parallel("watch", "browser-sync", "sass", "mainjs"));
