/* eslint no-var:0 */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    hinting: false,
    autoprefixer: {
      browsers: [
        'ie >= 10',
        'safari >= 7',
        'last 2 versions',
        'ios >= 7'
      ]
    },
    babel: {
      includePolyfill: true
    },
    svg: {
      paths: [
        'tests/dummy/public/icons'
      ]
    }
  });

  app.import('bower_components/simple-css-reset/reset.css');

  return app.toTree();
};
