var loveBlock = function() {
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

loveBlock();


$(document).ready(function() {
  photoCircles();
  
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
