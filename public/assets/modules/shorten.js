(function ($) {
  $.fn.shorten = function (settings) {
    let config = {
      showChars: 100,
      ellipsesText: '...',
      moreText: 'View more',
      lessText: 'View less',
    };

    if (settings) {
      $.extend(config, settings);
    }

    $(document).off('click', '.morelink');

    $(document).on(
      {
        click: function () {
          let $this = $(this);
          if ($this.hasClass('less')) {
            $this.removeClass('less');
            $this.html(config.moreText);
          } else {
            $this.addClass('less');
            $this.html(config.lessText);
          }
          $this.parent().prev().toggle();
          $this.prev().toggle();
          return false;
        },
      },
      '.morelink'
    );

    return this.each(function () {
      let $this = $(this);
      if ($this.hasClass('shortened')) return;

      $this.addClass('shortened');
      let content = $this.html();
      if (content.length > config.showChars) {
        let c = content.substr(0, config.showChars);
        let h = content.substr(
          config.showChars,
          content.length - config.showChars
        );
        let html =
          c +
          '<span class="moreellipses">' +
          config.ellipsesText +
          ' </span><span class="morecontent"><span>' +
          h +
          '</span> <a href="#0" class="morelink">' +
          config.moreText +
          '</a></span>';
        $this.html(html);
        $('.morecontent span').hide();
      }
    });
  };
})(window.$);
