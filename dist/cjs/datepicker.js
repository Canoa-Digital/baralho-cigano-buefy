'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-14c82365.js');
require('./helpers.js');
require('./chunk-7d9344e1.js');
require('./chunk-171e6903.js');
require('./chunk-608e1140.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-767d934a.js');
require('./chunk-ae7e641a.js');
require('./chunk-d1e18557.js');
require('./chunk-f833184b.js');
require('./chunk-8a4da21b.js');
var __chunk_15 = require('./chunk-9543387f.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_15.Datepicker);
  }
};
__chunk_5.use(Plugin);

exports.BDatepicker = __chunk_15.Datepicker;
exports.default = Plugin;
