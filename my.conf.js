var sourcePreprocessors = 'coverage';

function isDebug(argument) {
  return argument === '--debug';
}
if (process.argv.some(isDebug)) {
  sourcePreprocessors = [];
}

module.exports = function (config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['mocha', 'sinon-chai'],
    plugins: ['karma-mocha', 'karma-sinon-chai', 'karma-coverage', 'karma-chrome-launcher'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/*.js',
      'test/spec/*.js'
    ],
    browsers: ['Chrome'], // You may use 'ChromeCanary', 'Chromium' or any other supported browser

    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/*.js': sourcePreprocessors
    },

    singleRun: true
  });
};