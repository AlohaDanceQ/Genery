$(function () {

  $('.header__burger').click(function (event) {
    $('.header__burger,.header__mobile, .header').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.search__btn').click(function (event) {
    $('.search-inp, .x').toggleClass('active');
  });
  $('.x').click(function (event) {
    $('.search-inp, .x').toggleClass('active');
  });

});
