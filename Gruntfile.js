module.exports = function(grunt) {

    grunt.initConfig({
        watch : {
            stylesheets: {
                files: ['styles/**/*.styl'],
                tasks: [ 'stylus' ],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            scripts: {
                files: [ 'js/**/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            text: {
                files: ['*.html'],
                tasks: [],
                options: {
                    spawn: false,
                    livereload: true
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
                    'styles/vendor.min.css': ['vendor/bootstrap/css/bootstrap-theme.css',
                                              'vendor/bootstrap/bootstrap.css']
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

