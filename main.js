$(document).ready(function () {
  // add change class to toggler
  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')
  })

  // fix the navbar to the top when I scroll down
  $(window).scroll(function () {
    let position = $(this).scrollTop()
    if (position >= 128) {
      $('.navbar').addClass('navbar-background')
      $('.navbar').addClass('fixed-top')
    } else {
      $('.navbar').removeClass('navbar-background')
      $('.navbar').removeClass('fixed-top')
    }
  })

  // smooth scrolling
  $('.nav-item a').click(function (link) {
    link.preventDefault

    let target = $(this).attr('href')
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 2000)
  })

}) // end of document ready
