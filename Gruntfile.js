module.exports = function(grunt) {

    grunt.initConfig({
        watch : {
            scripts : {
                files : [
                          'js/**/*.js',
                          '*.css',
                          'index.html'
                        ],
                options : {
                  livereload : 9090,
                }
            }
        },
        stylus : {
          compile : {
            options : {
                'paths': [
                    'node_modules/',    // nib
                    'styles/'             // Individual components
                ],
                compress: false
            },
            files : {
                'styles/main.css': 'styles/**/*.styl'
            }
          }
        }, 
        uglify: {
            vendors: {
                files: {
                    'js/vendor.min.js': ['vendor/boostrap/js/boostrap.js',
                                         'vendor/*.js']
                }
            },
            my_target: {
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    }
                },
                files: {
                    'js/main.min.js': ['js/scripts/main.js']
                }
            }
        },
        cssmin: {
            build: {
                files: {
                    'styles/main.min.css': [ 'vendor/bootstrap/css/bootstrap-theme.css',
                                                'vendor/bootstrap/bootstrap.css',
                                                'styles/main.css']
                }
            }
        },
    });
    


    grunt.registerTask('default', ['stylus', 'watch']);
    grunt.registerTask('build', ['stylus', 'cssmin', 'uglify']);

    grunt.registerTask('stylus', ['stylus']);

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};

