'use strict';

var Pagelet = require('pagelet');

Pagelet.extend({
  css:  'css.styl',
  js:   'client.js',
  view: 'view.html',
  dependencies: [
    '//code.jquery.com/jquery-2.1.0.min.js'
  ]
}).on(module);
