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
                        "data--350-bottom='display:none;' data-anchor-target='.id3'>I love </p>");

  likes.forEach(function(elm, i) {
    var $newLove = $('<p>'+elm+'</p>');

    $newLove.attr('data-center-top', 'opacity:0;')
            .attr('data-center', 'opacity:1;')
            .attr('data-center-bottom', 'opacity:0;');
    $likeBlock.append($newLove);
  });
};

var photoCircles = function() {
  $('#photo-circles').height($('.id4').height()*0.75);

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
    'portrait.jpg',
    'coldDock.jpg',
    'energy.jpg',
    'gates.jpg'
  ];

  for(var i=0; i<imageUrls.length; i++) {
    var imageUrl = './images/splash/' + imageUrls[i];
    $circle = createCircle(imageUrl, imageUrls.length);
    $('#photo-circles').append($circle);
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

var createPhotoCirclesWithMovement = function() {
  var photoClassName = '.photo-circle-element';
  $(photoClassName).remove();
  photoCircles();
  _addHorizontalMovement(photoClassName);

  $('.photo-circle-element').click(function(e) {
    _closeModal();
    var $window = $(window);
    var height = $window.height()/2;
    var width = $window.width()/2;

    var bg = $(this).css('background-image');
    var $target = $('.id4 .background');

    var $photoModal = $('<div></div>')
                        .css('background-image', bg)
                        .width(width)
                        .height(height)
                        .css('top', height*.5)
                        .css('left', width*.5)
                        .addClass('photoModal');

    $target.append($('<div class="photoModalBack"></div>')).append($photoModal);
    _listenForModalClose();
  });
};

var _closeModal = function() {
  $('.photoModalBack').remove();
  $('.photoModal').remove();
};

var _listenForModalClose = function() {
  $('.photoModalBack').on('click', function() {
    _closeModal();
  });
};

var addResumeLogos = function() {
  var logos = [
    'angularjs',
    'apache',
    'backbone',
    'C++',
    'C',
    'express-js',
    'grunt',
    'jasmine',
    'javascript',
    'jquery',
    'mongodb',
    'mysql',
    'nodejs',
    'phonegap',
    'php',
    'ruby',
    'stylus'
  ];
  var $resume = $('.resumeIcons');
  var location = 10;

  $.each(logos, function(i, logoName) {
    location = location + 50;

    var $newLogo = $('<div></div>')
                .css('background-image', 'url("./images/logos/'+logoName+'_logo.png")')
                .css('left', location+'px');
    $resume.append($newLogo);
  });
};
$(document).ready(function() {
  // must declare slide height first for circles to work
  var $section = $('.slide');
  var winH = $(window).height();
  var sectionHeight = winH*1.5;
  $section.height(sectionHeight);
  createPhotoCirclesWithMovement();
  loveBlock();
  // addResumeLogos();
  
  
  var s = skrollr.init({
        // render: function(data) {
        //     //Debugging - Log the current scroll position.
        //     //console.log(data.curTop);
        // }
  });

  var bodyHeight = sectionHeight * $section.length;
  $('body').height(bodyHeight);

});
