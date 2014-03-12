var loveBlock = function() {
  var likes = [ 'Web Development',
                'Traveling',
                'Basketball',
                'Mountain Biking',
                'Road Biking',
                'Colorado',
                'Shaved Ice',
                'Snorkling',
                'Electronics'];
  var $likeBlock = $('#love-block').append("<p data-bottom-top='display:none;' data-"+ $(window).height()/2 
                        + "-center-top='top:250px;display:block;'" +
                        "data--450-bottom='display:none;' data-anchor-target='.id3'>I love </p>");

  likes.forEach(function(elm, i) {
    var $newLove = $('<p>'+elm+'</p>');

    $newLove.attr('data-center-top', 'opacity:0;')
            .attr('data-center', 'opacity:1;')
            .attr('data-center-bottom', 'opacity:0;');
    $likeBlock.append($newLove);
  });
};

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

var addHorizontalMovement = function(elm) {
  var $elements = $(elm);

  $elements.each(function(i, item) {
    var $item = $(item);
    var leftPos = $item.position().left;
    var randomSpeed = (Math.random() * $(window).width())/2;

    if(leftPos < $(window).width()/2) {
      randomSpeed = randomSpeed+leftPos;
      $item.attr('data-bottom-top', 'left:'+leftPos+'px;')
            .attr('data-top', 'left:'+randomSpeed+'px;');
    } else {
      var rightPos = $(window).width() - leftPos;
      randomSpeed = rightPos - randomSpeed;
      $item.attr('data-bottom-top', 'left:'+rightPos+'px;')
            .attr('data-top', 'left:'+randomSpeed+'px;');
    }
  });
};

var createPhotoCirclesWithMovement = function() {
  var photoClassName = '.photo-circle-element';
  $(photoClassName).remove();
  photoCircles();
  addHorizontalMovement(photoClassName);
};

loveBlock();

$('.reloadPhotos').on('click', function() {
  createPhotoCirclesWithMovement();
});


$('.photo-circle-element').on('down', function() {
  console.log('helloe');
});


$(document).ready(function() {
  createPhotoCirclesWithMovement();

  var $section = $('section');
  var winH = $(window).height();
  $section.height(winH);

   var s = skrollr.init({
        // render: function(data) {
        //     //Debugging - Log the current scroll position.
        //     //console.log(data.curTop);
        // }
    });
  
});
