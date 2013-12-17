module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
              'css/style.css': 'css/style.scss'
            }
          }
        },

        watch: {
          options: {
            livereload: true,
          },
          css: {
            files: ['css/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            }
          },
        },

        connect: {
          server: {
            options: {
              port: 8000,
              base: './'
            }
          }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect']);

    grunt.registerTask('dev', ['connect', 'watch']);

};