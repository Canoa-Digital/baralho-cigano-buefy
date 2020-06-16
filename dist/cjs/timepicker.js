'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-7d9344e1.js');
require('./chunk-171e6903.js');
require('./chunk-608e1140.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-767d934a.js');
require('./chunk-70456686.js');
require('./chunk-ae7e641a.js');
require('./chunk-d1e18557.js');
require('./chunk-f833184b.js');
require('./chunk-8a4da21b.js');
var __chunk_16 = require('./chunk-6ae475a7.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_16.Timepicker);
  }
};
__chunk_5.use(Plugin);

exports.BTimepicker = __chunk_16.Timepicker;
exports.default = Plugin;
