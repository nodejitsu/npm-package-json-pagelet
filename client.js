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
    var offset = $(document).scrollTop() - guides.parent().offset().top;

    guides.hide();
    placeholders.find('#'+ this.href.split('#').pop().replace('.', '\\.'))
      .css('top', (offset < 0 ? 0 : offset) +'px')
      .show();
  });

  /**
   * Toggle all nodejitsu specific configuration values.
   *
   * @param {Event} e DOM event.
   * @api private
   */
  placeholders.on('click', 'a.trigger', function nodejitsu(e) {
    var element = $(this)
      , action = element.data('action')
      , hide = action === 'fadeOut';

    element.data('action', hide ? 'fadeIn' : 'fadeOut');
    element.find('span').text(hide ? 'Show' : 'Hide');
    placeholders.find('.nodejitsu')[action]();

    e.preventDefault();
  });
});
