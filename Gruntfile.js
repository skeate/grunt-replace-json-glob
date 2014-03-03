/*
 * grunt-replace-json-glob
 * 
 *
 * Copyright (c) 2014 Jonathan Skeate
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    replace_json_glob: {
      build: {
        files: [{
            src: 'test/fixtures/basic.json',
            dest: 'tmp/basic.json',
            props: ['files']
          },
          {
            src: 'test/fixtures/subdir.json',
            dest: 'tmp/subdir.json',
            props: ['files'],
            subdir: 'test'
          },
          {
            src: 'test/fixtures/app/manifest.json',
            dest: 'tmp/dist/manifest.json',
            props: ['content_scripts.0.js'],
            subdir: 'test/fixtures/app'
          }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'replace_json_glob', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
