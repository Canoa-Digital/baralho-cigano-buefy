'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-7d9344e1.js');
require('./chunk-171e6903.js');
require('./chunk-4fc51fd2.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-bc5a58da.js');
var __chunk_7 = require('./chunk-396b9c00.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_7.Autocomplete);
  }
};
__chunk_5.use(Plugin);

exports.BAutocomplete = __chunk_7.Autocomplete;
exports.default = Plugin;
