/*
* To use this method, pass the createPhotoCirclesWithMovement function:
* 1: containerClass - the id or class name (usually the background or section)
* 2: circleDiv - the id or class prepended with a '#' or '.' that you want the 
*    circles to be held within
* 3: a list of optional parameters (optional: if nothing is passed then no photos
*    will be created)
*    a) classname: the class name(s) you want each circle to contain
*    b) imagePath: a general image path (read to example if not clear)
*    c) imageUrls: all photos that will be created
*
* eg:
*   imageUrls = ['a.jpg', 'b.jpg', 'c.jpg'];
*   imagePath = 'images/';
*   
* printed images paths: 
*   'images/a.jpg'
*   'images/b.jpg'
*   'images/c.jpg'
*/
var createPhotoCirclesWithMovement = function(containerClass, circleDiv, params, movement) {
  var photoClassName = '.' + params.classname;
  $(photoClassName).remove();
  photoCircles(containerClass, circleDiv, params);

  if(movement) {
    _addHorizontalMovement(photoClassName);
  }
};

var createCircle = function(imageUrl, containerTagClass, circleClassNames, num, selector) {
  selector = selector || '.'+circleClassNames.split(' ').join('.');
  var radius = Math.floor($(window).width()/num);
  var circleSize = Math.floor(Math.random()*radius) + radius;
  var randX = Math.floor($(window).width()*Math.random()) - radius;
  var randY = Math.floor($(containerTagClass).height()*Math.random());
  var $circle = $("<div class='"+ circleClassNames +"'></div>")
          .css('left', randX + 'px')
          .css('top', randY + 'px')
          .width(circleSize + 'px')
          .height(circleSize + 'px')
          .css('border-radius', circleSize +'px')
          .css('-webkit-border-radius', circleSize + 'px')
          .css('background-image', 'url(' + imageUrl + ')');

    debugger;
  if($circle.overlaps(selector).length > 0) {
    createCircle(imageUrl, containerTagClass, circleClassNames, num);
  } else {
    return $circle;
  }
};

var photoCircles = function(heightOfWindow, containerTagClass, params) {
  $(containerTagClass).height($(heightOfWindow).height()*0.75);
  var circleClassNames = params.classname || '';
  circleClassNames += ' circle';
  var imagePath = params.imagePath || '';
  var imageUrlPaths = params.imageUrls || [];

  for(var i=0; i<imageUrlPaths.length; i++) {
    var imageUrl = imagePath + imageUrlPaths[i];
    $circle = createCircle(imageUrl, containerTagClass, circleClassNames, imageUrlPaths.length);
    $(containerTagClass).append($circle);
  }
};

var _addHorizontalMovement = function(elm) {
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