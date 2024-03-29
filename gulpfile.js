var gulp = require('gulp');
var phonegapBuild = require('gulp-phonegap-build');

gulp.task('phonegap-build', function () {
    gulp.src('dist/**/*', {dot: true})
        .pipe(phonegapBuild({
            "isRepository": "true",
            "appId": "1850356",
            "user": {
                "email": "nizar.oukhchi@gmail.com",
                "password": "final118008"
            }
        }));
});

gulp.task('phonegap-build-debug', function () {
    gulp.src('dist/**/*', {dot: true})
        .pipe(phonegapBuild({
            "isRepository": "true",
            "appId": "1850356",
            "user": {
                "email": "nizar.oukhchi@gmail.com",
                "password": "final118008"
            }
        }));
});

gulp.task('default', ['phonegap-build']);