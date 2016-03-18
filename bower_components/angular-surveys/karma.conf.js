module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ],
        files:[
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/jquery-ui/jquery-ui.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-translate/angular-translate.min.js',
            'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
            'bower_components/angular-ui-sortable/sortable.min.js',
            'bower_components/angular-elastic/elastic.js',
            'dist/*.js',
            'test/*.js'


        ],
        // start these browsers
        browsers: ['PhantomJS'],
        reporters: ['progress'],
        logLevel: config.LOG_INFO,
        singleRun: false
    });
};