/*jshint esversion: 6*/

var zero = 0;

// nav dissapears on scroll down. reapers on scroll up
$(document).ready(function() {
  $(window).on("scroll", function() {
    $(".navbar").toggleClass("hide", $(window).scrollTop() > zero);
    zero = $(window).scrollTop();
  });

  // nav fades above scroll of zero
  $(window).scroll(function() {
    var pos = $(this).scrollTop();
    if (pos >= 1) {
      $("nav").css("opacity", 0.8);
    } else {
      $("nav").css("opacity", 1);
    }
  });

  // slowly scroll down to nav clicked sections
  $(".slide").click(function(e) {
    var linkHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(linkHref).offset().top - 80
      },
      1000
    );

    e.preventDefault();
  });

  $(".icon").click(function(e) {
    $(".links").toggleClass("responsive");
    $(".links").toggleClass("hidden");
  });

  $(window).resize(function() {
    if ($(window).width() < 780) {
      $(".slide").click(function(e) {
        $(".links").toggleClass("responsive");
        $(".links").toggleClass("hidden");

        e.preventDefault();
      });
    }
  });
});

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const fs = require('fs');

// fs.readFile('index.html', (err, data) => {
//     if (err) throw err;

//     const server = http.createServer((req, res) => {
//         res.statusCode = 200;
//         res.setHeader('Content-type', 'text/html');
//         res.write(data);
//         res.end();
//     });

//     server.listen(port, hostname, (err) => {
//         if (err) {
//             consol.log("something went wrong", err);
//         }
//         console.log(`listening on port ${port}...`);
//     });
// });
