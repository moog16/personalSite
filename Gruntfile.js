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
        }
        // ,
        // jshint: {
        //     options: {
        //         curly: true,
        //         eqeqeq: true,
        //         immed: true,
        //         latedef: true,
        //         newcap: true,
        //         noarg: true,
        //         sub: true,
        //         undef: true,
        //         unused: true,
        //         boss: true,
        //         eqnull: true,
        //         globals: {
        //             jQuery: true
        //         }
        //     },
        //     gruntfile: {
        //         src: 'Gruntfile.js'
        //     }
        // }
    });
    

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('default', ['watch']);
};

