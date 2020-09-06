/*jshint esversion: 6*/

var zero = 0;

// nav dissapears on scroll down. reapers on scroll up
$(document).ready(function () {
  $(window).on('scroll', function () {
    $('.navbar').toggleClass('hide', $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });

  // nav fades above scroll of zero
  $(window).scroll(function () {
    var pos = $(this).scrollTop();
    if (pos >= 1) {
      $('nav').css('opacity', 0.8);
    } else {
      $('nav').css('opacity', 1);
    }
  });

  // slowly scroll down to nav clicked sections
  $('.slide').click(function (e) {
    var linkHref = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(linkHref).offset().top - 80,
      },
      1000
    );

    e.preventDefault();
  });

  $('.icon').click(function (e) {
    $('.links').toggleClass('responsive');
    $('.links').toggleClass('hidden');
  });

  $(window).resize(function () {
    if ($(window).width() < 780) {
      $('.slide').click(function (e) {
        $('.links').toggleClass('responsive');
        $('.links').toggleClass('hidden');

        e.preventDefault();
      });
    }
  });
});
