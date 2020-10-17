$(document).ready(function () {
  var star_full = '<i class="fas fa-star"></i>';
  var star_empty = '<i class="far fa-star"></i>';
  var star_half = '<i class="fas fa-star-half-alt"></i>';

  $('.star_0').html(star_empty.repeat(5));
  $('.star_1').html(star_full + star_empty.repeat(4));
  $('.star_2').html(star_full.repeat(2) + star_empty.repeat(3));
  $('.star_3').html(star_full.repeat(3) + star_empty.repeat(2));
  $('.star_4').html(star_full.repeat(4) + star_empty.repeat(1));
  $('.star_5').html(star_full.repeat(5));

  $('.star_half').html(star_half + star_empty.repeat(4));
  $('.star_1_half').html(star_full + star_half + star_empty.repeat(3));
  $('.star_2_half').html(star_full.repeat(2) + star_half + star_empty.repeat(2));
  $('.star_3_half').html(star_full.repeat(3) + star_half + star_empty.repeat(1));
  $('.star_4_half').html(star_full.repeat(4) + star_half);
});
