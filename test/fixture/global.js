'use strict';

for (var key in global) {
  if (global.hasOwnProperty(key)) {
    exports[key] = global[key];
  }
}
