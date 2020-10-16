$(document).ready(function () {
  var star_full = '<i class="fas fa-star"></i>';
  var star_empty = '<i class="far fa-star"></i>';
  var star_half = '<i class="fas fa-star-half-alt"></i>';

  $('.0_star').html(star_empty.repeat(5));
  $('.1_star').html(star_full + star_empty.repeat(4));
  $('.2_star').html(star_full.repeat(2) + star_empty.repeat(3));
  $('.3_star').html(star_full.repeat(3) + star_empty.repeat(2));
  $('.4_star').html(star_full.repeat(4) + star_empty.repeat(1));
  $('.5_star').html(star_full.repeat(5));

  $('.half_star').html(star_half + star_empty.repeat(4));
  $('.1_half_star').html(star_full + star_half + star_empty.repeat(3));
  $('.2_half_star').html(star_full.repeat(2) + star_half + star_empty.repeat(2));
  $('.3_half_star').html(star_full.repeat(3) + star_half + star_empty.repeat(1));
  $('.4_half_star').html(star_full.repeat(4) + star_half);
});
