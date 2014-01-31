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

enterBlock();

var $top = $('#top');
$(window).scroll(function() {
  $top.text($(window).scrollTop());
});