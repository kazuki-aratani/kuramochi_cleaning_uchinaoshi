$(function() {
  var scrollpos = 0;
  $('.dropdown-switch').on('click', function() {
      if ($('body').hasClass('fixed')) {
          $('body').removeClass('fixed').css({'top': 0});
          window.scrollTo(0, scrollpos);
      } else {
          scrollpos = $(window).scrollTop();
          $('body').addClass('fixed').css({'top': -scrollpos});
      }
      return false;
  });

  $('body').on('click', function(e) {
      if ($(e.target).closest('.dropdown-nav').length === 0 && $('body').hasClass('fixed')) {
          $('body').removeClass('fixed').css({'top': 0});
          window.scrollTo(0, scrollpos);
          return false;
      }
  });
});

function goBackAndReload() {
  window.history.back();
  setTimeout(function() {
      window.location.reload();
  }, 100);
}