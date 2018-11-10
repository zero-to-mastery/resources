$(document).ready(function () {
  // add change class to toggler
  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change');
  });

  // Dynamically determine the height of the navbar
  let navHeight = $('.navbar').outerHeight();

  // fix the navbar to the top when I scroll down
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= navHeight) {
      $('.navbar').addClass('fixed-top');
      $('#header').css("padding-top", navHeight);
    } else {
      $('.navbar').removeClass('fixed-top');
      $('#header').css("padding-top", "0");
    }
  });

  // smooth scrolling
  $('.nav-item a').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      // Offset the scroll by the height of navbar to
      // show all the section content
      scrollTop: $(target).offset().top - navHeight
    }, 1800);
  });
}); // end of document ready
