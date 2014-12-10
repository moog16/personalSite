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
                paths: [
                    'node_modules/',    // nib
                    'styles/'             // Individual components
                ],
                compress: false,
                define: {
                    'images-directory': '../images/'
                }
            },
            files : {
                'styles/main.css': 'styles/**/*.styl'
            }
          }
        }, 
        uglify: {
            vendors: {
                files: {
                    'js/vendor.min.js': ['vendor/*.js']
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
                    'js/main.min.js': ['js/scripts/*.js',
                                       'vendor/shapeHoverEffect/hovers.js']
                }
            }
        },
        cssmin: {
            build: {
                files: {
                    'styles/vendor.min.css': ['vendor/bootstrap/**/*.css',
                                              'vendor/shapeHoverEffect/*.css']
                }
            }
        },
        clean: {
            build: {
                src: ['js/*.min.js', 'styles/*.min.css']
            }
        }
    });
    

    grunt.registerTask('clean', ['clean']);
    grunt.registerTask('styles', ['stylus', 'cssmin']);
    grunt.registerTask('scripts', ['uglify']);


    grunt.registerTask('build', ['styles', 'scripts']);
    grunt.registerTask('default', ['clean', 'build', 'watch']);

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
};

