var $top = $('#top');
$(window).scroll(function() {
  $top.text($(window).scrollTop());
})
