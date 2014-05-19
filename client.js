pipe.once('package.json:render', function render(pagelet) {
  'use strict';

  var placeholders = $(pagelet.placeholders)
    , guides = placeholders.find('.guide');

  /**
   * Show or hide the different guides when people interact with the JSON blob.
   *
   * @param {Event} e DOM event.
   * @api private
   */
  placeholders.on('click mouseover', 'pre a:not(.trigger)', function guide() {
    guides.hide();

    placeholders.find('#'+ this.href.split('#').pop().replace('.', '\\.'))
      .css('top', $(document).scrollTop() + 100 +'px')
      .show();
  });

  /**
   * Hide all nodejitsu specific configuration values.
   *
   * @param {Event} e DOM event.
   * @api private
   */
  placeholders.on('click', 'a.nodejitsu', function nodejitsu(e) {
    e.preventDefault();

    placeholders.find('.nodejitsu').fadeOut();
  });
});
