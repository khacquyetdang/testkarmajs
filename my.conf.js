module.exports = function (config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['jasmine'],
    plugins: ['karma-jasmine', 'karma-coverage', 'karma-phantomjs-launcher'],
    files: [
      'src/*.js',
      'test/spec/*.js'
    ],
    browsers: ['PhantomJS'],

    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/*.js': ['coverage']
    },

    singleRun: true
  });
};