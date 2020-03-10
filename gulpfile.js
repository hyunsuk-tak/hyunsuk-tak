var { src, dest, watch} = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

function css() {
    return src('scss/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
};
 exports.default = function () {
     watch('scss/*.scss', css);
     watch('scss/partials/*.scss', css);
 };

// exports.default = css; 