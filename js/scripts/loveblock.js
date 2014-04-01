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