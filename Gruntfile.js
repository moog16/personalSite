module.exports = function(grunt) {

    grunt.initConfig({
        watch : {
            scripts : {
                stylesheets: {
                    files: 'styles/stylus/*.styl',
                    tasks: [ 'styles' ]
                },
                scripts: {
                    files: 'js/scripts/*.js',
                    tasks: ['scripts']
                },
                files : [
                          'index.html',
                          'js/*.js/',
                          'styles/*.css'
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
    


    grunt.registerTask('styles', ['stylus', 'cssmin']);
    grunt.registerTask('scripts', ['uglify']);


    grunt.registerTask('build', ['styles', 'scripts']);
    grunt.registerTask('default', ['build', 'watch']);

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};

