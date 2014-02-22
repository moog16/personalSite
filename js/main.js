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

// var onHoverFill = function() {
//   var hoverFill = function($target, color) {
//     var $paths = $target.find('path');
//     for(var i=0; i<$paths.length; i++) {
//       $paths.eq(i).css('fill', color);
//     }
//   };

//   $('.contact-info-link').hover(function() {
//     hoverFill($(this), 'red');
//   }, function() {
//     hoverFill($(this), 'black');
//   });
// };

var photoCircles = function() {
  $('#photo-circles').height($(window).width()/2);

  var createCircle = function(imageUrl, num) {
    var radius = Math.floor($(window).width()/num);
    var circleSize = Math.floor(Math.random()*radius) + radius;
    var randX = Math.floor($(window).width()*Math.random()) - radius;
    var randY = Math.floor($('#photo-circles').height()*Math.random());

    return $("<div class='circle photo-circle-element'></div>")
            .css('left', randX + 'px')
            .css('top', randY + 'px')
            .width(circleSize + 'px')
            .height(circleSize + 'px')
            .css('border-radius', circleSize +'px')
            .css('-webkit-border-radius', circleSize + 'px')
            .css('background-image', 'url(' + imageUrl + ')');

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


$(document).ready(function() {
  photoCircles();

  var $top = $('#top');
  $(window).scroll(function() {
    $top.text($(window).scrollTop());
  });

  // onHoverFill();


  var controller = $.superscrollorama({
    triggerAtCenter: false,
    playoutAnimations: true
  });

  // controller.pin($('#cityPark'), 100, {
    // anim: TweenMax.from($('#fade'),.5,{
    //   css:{opacity:0}}),
    //   0, // scroll duration of tween (0 means autoplay)
    //   200);
  // });

  // controller.addTween($('#cityPark'), 100, {
  //   anim: (new TimelineLite())
  //     .append(
  //       TweenMax.to($('#cityPark'), .25, 
  //         {css:{top: 0}})
  //       )
      // .append(
      //   TweenMax.to($('#cityPark'), .5, 
      //     {css:{top: 800}})
      // )
      // .append(
      //   TweenMax.to($('#cityPark'), .5, 
      //     {css:{top: 1000}})
      // )
      // .append(
      //   TweenMax.to($('#cityPark'), .5, 
      //     {css:{top: 1200}})
      // )
  // });

});
