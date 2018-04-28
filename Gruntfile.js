module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: 'web/js/.jshintrc'
            },
            core: {
                src: 'web/js/*.js'
            },
            test: {
                src: 'web/js/tests/specs/*.js'
            }
        },
        jscs: {
            options: {
                config: 'web/js/.jscsrc'
            },
            core: {
                src: '<%= jshint.core.src %>'
            },
            test: {
                src: '<%= jshint.test.src %>'
            }
        },
        jasmine: {
            src : [
                'web/js/tests/app.js',
                'web/js/contactService.js',
                'web/js/contactCtrl.js'
            ],
            options: {
                specs : 'web/js/tests/specs/*.js',
                vendor: [
                    'web/js/libs/jquery.min.js',
                    'web/js/libs/angular.min.js',
                    'web/js/tests/angular-mocks.js',
                    'web/js/libs/bootstrap.min.js'
                ]
            }
        }
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    grunt.registerTask('default', ['jshint:core', 'jshint:test', 'jscs:core', 'jscs:test', 'jasmine']);
};
