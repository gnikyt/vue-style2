'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
  /**
   * Plugin | vue-style2
   */
  var VueStyle2 = {
    // Installed or not
    installed: false,

    // Grint will overwrite to match package.json
    version: '1.1.0',

    /**
     * Installer function for Vue plugins
     * @param {Function} Vue - Vue's lib
     */
    install: function install(Vue) {
      if (VueStyle2.installed) {
        // We're installed, kill it
        return;
      }

      // Vue component for style2
      Vue.component('style2', {
        // Template with default slot
        template: '<slot></slot>',

        // Render the tag
        render: function render(createElement) {
          // Simple style tag with text/css
          return createElement('style', { attrs: { type: 'text/css' } }, this.$slots.default);
        }
      });

      // Let Vue know we're now installed
      VueStyle2.installed = true;
    }
  };

  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') {
    module.exports = VueStyle2;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return VueStyle2;
    });
  } else if (typeof window !== 'undefined') {
    window.VueStyle2 = VueStyle2;
  }
})();
