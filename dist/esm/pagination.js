import './chunk-1fafdf15.js';
import './helpers.js';
import './chunk-00b31897.js';
import './chunk-2b455134.js';
import { r as registerComponent, u as use } from './chunk-cca88db8.js';
import { P as Pagination, a as PaginationButton } from './chunk-d6fe0ad2.js';
export { P as BPagination, a as BPaginationButton } from './chunk-d6fe0ad2.js';

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Pagination);
    registerComponent(Vue, PaginationButton);
  }
};
use(Plugin);

export default Plugin;
