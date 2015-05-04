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
        src: 'web/js/tests/*.js'
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

    qunit: {
      files: 'web/js/tests/index.html'
    },

    csslint: {
      options: {
        csslintrc: 'web/css/.csslintrc'
      },
      core: [
          'web/css/main.css'
      ]
    }

  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  grunt.registerTask('default', ['jshint:core', 'jshint:test', 'jscs:core', 'jscs:test', 'csslint:core', 'qunit']);
};
