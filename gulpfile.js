var gulp = require('gulp');
var sass = require('gulp-sass');
// var babel = require('gulp-babel');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var rtlcss = require('gulp-rtlcss');
var del = require('del');

var paths = {
    // scripts: {
    //   src: 'scripts/**/*.js',
    //   dest: 'scripts/'
    // },
    ADCB_styles: {
        src: 'src/adcb/**/*.scss',
        dest: 'dist/adcb/assets/styles/'
    },
    ADCE_styles: {
        src: 'src/adce/*.scss',
        dest: 'dist/adce/assets/styles/'
    },
    ADCP_styles: {
        src: 'src/adcp/*.scss',
        dest: 'dist/adcp/assets/styles/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del(['ADCB_styles', 'ADCE_styles', 'ADCP_styles']);
}

/*
 * Define our tasks using plain functions ADCB
 */
function ADCB_En_styles() {
    return gulp.src(paths.ADCB_styles.src)
        .pipe(sass())
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 10', 'ie 11', 'opera 12.1'))
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(rename({
            basename: 'toolkit',
            suffix: '-en-custom'
        }))
        .pipe(gulp.dest(paths.ADCB_styles.dest));
}

function ADCB_Ar_styles() {
    return gulp.src(paths.ADCB_styles.src)
        .pipe(sass())
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 10', 'ie 11', 'opera 12.1'))
        .pipe(rtlcss())
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(rename({
            basename: 'toolkit',
            suffix: '-ar-custom'
        }))
        .pipe(gulp.dest(paths.ADCB_styles.dest));
}

/*
 * Define our tasks using plain functions ADCP
 */
function ADCP_En_styles() {
    return gulp.src(paths.ADCP_styles.src)
        .pipe(sass())
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 10', 'ie 11', 'opera 12.1'))
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(rename({
            basename: 'toolkit',
            suffix: '-en'
        }))
        .pipe(gulp.dest(paths.ADCP_styles.dest));
}

function ADCP_Ar_styles() {
    return gulp.src(paths.ADCP_styles.src)
        .pipe(sass())
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 10', 'ie 11', 'opera 12.1'))
        .pipe(rtlcss())
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(rename({
            basename: 'toolkit',
            suffix: '-ar'
        }))
        .pipe(gulp.dest(paths.ADCP_styles.dest));
}

/*
 * Define our tasks using plain functions ADCE
 */
function ADCE_En_styles() {
    return gulp.src(paths.ADCE_styles.src)
        .pipe(sass())
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 10', 'ie 11', 'opera 12.1'))
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(rename({
            basename: 'toolkit',
            suffix: '-en'
        }))
        .pipe(gulp.dest(paths.ADCE_styles.dest));
}

function ADCE_Ar_styles() {
    return gulp.src(paths.ADCE_styles.src)
        .pipe(sass())
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 10', 'ie 11', 'opera 12.1'))
        .pipe(rtlcss())
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(rename({
            basename: 'toolkit',
            suffix: '-ar'
        }))
        .pipe(gulp.dest(paths.ADCE_styles.dest));
}

// function cleanToolkit() {
//     return del(['dist/**/assets/styles/']);
// }
// function scripts() {
//   return gulp.src(paths.scripts.src, { sourcemaps: true })
//     .pipe(babel())
//     .pipe(uglify())
//     .pipe(concat('commons.min.js'))
//     .pipe(gulp.dest(paths.scripts.dest));
// }


function watch() {
    // Static Server + watching scss/html files
    // gulp.watch(paths.scripts.src, scripts);
    //ADCB
    gulp.watch(paths.ADCB_styles.src, ADCB_En_styles);
    gulp.watch(paths.ADCB_styles.src, ADCB_Ar_styles);
    // ADCP
    gulp.watch(paths.ADCP_styles.src, ADCP_En_styles);
    gulp.watch(paths.ADCP_styles.src, ADCP_Ar_styles);
    //ADCE
    gulp.watch(paths.ADCE_styles.src, ADCE_En_styles);
    gulp.watch(paths.ADCE_styles.src, ADCE_Ar_styles);
}

function watchADCB() {
    // Static Server + watching scss/html files
    // gulp.watch(paths.scripts.src, scripts);
    //ADCB
    gulp.watch(paths.ADCB_styles.src, ADCB_En_styles);
    gulp.watch(paths.ADCB_styles.src, ADCB_Ar_styles);
}

function watchADCP() {
    // ADCP
    gulp.watch(paths.ADCP_styles.src, ADCP_En_styles);
    gulp.watch(paths.ADCP_styles.src, ADCP_Ar_styles);
}

function watchADCE() {
    //ADCE
    gulp.watch(paths.ADCE_styles.src, ADCE_En_styles);
    gulp.watch(paths.ADCE_styles.src, ADCE_Ar_styles);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
// var build = gulp.series(clean , scripts , englishstyles , arabicstyles);
var build = gulp.series(clean, ADCB_En_styles, ADCB_Ar_styles, ADCP_En_styles, ADCP_Ar_styles, ADCE_En_styles, ADCE_Ar_styles);
// var english = gulp.series(clean , arabicstyles);
// var arabic = gulp.series(clean , arabicstyles); 

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.watch = watch;
exports.watchADCB = watchADCB;
exports.watchADCP = watchADCP;
exports.watchADCE = watchADCE;
// exports.scripts = scripts;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;