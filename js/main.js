var enterBlock = function() {
  var likes = [ 'Web Development',
                'Traveling',
                'Basketball',
                'Mountain Biking',
                'Road Biking',
                'Colorado',
                'Shaved Ice',
                'Sushi',
                'Snorkling',
                'Electronics'];
  var $likeBlock = $('#love-block');
  var opZero1 = 870;
  var opOne = 1020;
  var opZero2 = 1090;
  $likeBlock.append("<p data-0='display:none;'" +
                        "data-1000='position:fixed;top:250px;display:block'" +
                        "data-2000='display:none;'>I love </p>");

  likes.forEach(function(elm, i) {
    opZero1 = opZero1+60;
    opOne = opOne+60;
    opZero2 = opZero2+60;

    var $newLove = $('<p>'+elm+'</p>');

    $newLove.attr('data-' + opZero1, 'opacity:0;')
        .attr('data-' + opOne, 'opacity:1;')
        .attr('data-' + opZero2, 'opacity:0;');
    $likeBlock.append($newLove);
  });
};

var onHoverFill = function() {
  var hoverFill = function($target, color) {
    var $paths = $target.find('path');
    for(var i=0; i<$paths.length; i++) {
      $paths.eq(i).css('fill', color);
    }
  };

  $('.contact-info-link').hover(function() {
    hoverFill($(this), 'red');
  }, function() {
    hoverFill($(this), 'black');
  });
};

var photoCircles = function() {
  $('#photo-circles').height($(window).width()/2);

  var createCircle = function(imageUrl, num) {
    var radius = Math.floor($(window).width()/num);
    var circleSize = Math.floor(Math.random()*radius) + radius;
    var randX = Math.floor($(window).width()*Math.random()) - radius;
    var randY = Math.floor($('#photo-circles').height()*Math.random());

    if(randX > $(window).width()) {

    }

    return $("<div class='circle'></div>")
            .css('position', 'absolute')
            .css('left', randX + 'px')
            .css('top', randY + 'px')
            .width(circleSize + 'px')
            .height(circleSize + 'px')
            .css('border-radius', circleSize +'px')
            .css('-webkit-border-radius', circleSize + 'px')
            .css('background-image', 'url(' + imageUrl + ')')
            .css('background-size', circleSize + 'px')
            .css('background-repeat', 'no-repeat')
            .css('background-position', '50%');
  };

  var imageUrls = [
    'boats.jpg',
    'poolparty.jpg',
    'tiger.jpg',
    'portrait.JPG',
    'coldDock.JPG',
    'energy.JPG',
    'gates.jpg'
  ];

  for(var i=0; i<imageUrls.length; i++) {
    var imageUrl = './images/splash/' + imageUrls[i];
    $circle = createCircle(imageUrl, imageUrls.length);
    $('#photo-circles').append($circle);
  }
};

enterBlock();
photoCircles();


$(document).ready(function() {

  var $top = $('#top');
  $(window).scroll(function() {
    $top.text($(window).scrollTop());
  });

  onHoverFill();
});
