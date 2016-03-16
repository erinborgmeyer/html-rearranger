var $belowH1 = $('<h1>');
var $body = $('body');
var $belowUl = $('<ul>');
var $aboveHeading = $('<h1>');
var $aboveUl = $('<ul>');

$belowH1.html('Below ground veggies');

$body.append($belowH1);

$body.append($belowUl);

$aboveH1.html('Above ground veggies');

$body.append($aboveH1);

$body.append($aboveUl);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $belowUl.append($(this));
  } else {
    $aboveUl.append($(this));
  }
});