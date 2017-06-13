;(() => {
  /**
   * Plugin | vue-style2
   */
  const VueStyle2 = {
    // Installed or not
    installed: false,

    // Grint will overwrite to match package.json
    version: '1.0.0',

    /**
     * Installer function for Vue plugins
     * @param {Function} Vue - Vue's lib
     */
    install(Vue) {
      if (VueStyle2.installed) {
        // We're installed, kill it
        return;
      }

      // Vue component for style2
      Vue.component('style2', {
        // Template for component
        // <slot> is important, see: http://vuejs.org/guide/components.html#Named-Slots
        template: '<div style="display:none"><slot></slot></div>',

        // NOTE: I tried doing this with Vue 2's new render() function.
        //       It was a nightmare and I never got it to work.
        mounted() {
          // Setup the style element
          const parent = this.$el.parentElement;
          const s = document.createElement('style');
          s.type = 'text/css';
          s.appendChild(document.createTextNode(this.$el.innerHTML));

          // Inject into the DOM
          parent.appendChild(s);

          // See: https://vuejs.org/v2/guide/migration.html#ready-replaced
          this.$nextTick(() => {
            // Code that assumes this.$el is in-document
            // Remove the dummy <div> template for component
            this.$el.remove();
          });
        },
      });

      // Let Vue know we're now installed
      VueStyle2.installed = true;
    },
  };

  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = VueStyle2;
  } else if (typeof define === 'function' && define.amd) {
    define(() => VueStyle2);
  } else if (typeof window !== 'undefined') {
    window.VueStyle2 = VueStyle2;
  }
})();
