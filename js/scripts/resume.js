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
