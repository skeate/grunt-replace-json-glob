/*
 * grunt-replace-json-glob
 *
 *
 * Copyright (c) 2014 Jonathan Skeate
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('replace_json_glob', 'Expands globs in json files.', function () {
    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Read in file as JSON
      var json = grunt.file.readJSON(file.src);

      function objRef(obj, prop){
        var propList = prop.split('.');
        var temp = obj;
        for( var i = 0; i < propList.length-1; i++ ){
          temp = temp[propList[i]];
        }
        return {base: temp, prop: propList[i]};
      }

      for( var i = 0; i < file.props.length; i++ ){
        var o = objRef(json, file.props[i]);
        if( typeof file.subdir !== 'undefined' ){
          o.base[o.prop] = grunt.file.expand({cwd: file.subdir}, o.base[o.prop]);
        }
        else{
          o.base[o.prop] = grunt.file.expand(o.base[o.prop]);
        }
      }

      // Write the destination file.
      grunt.file.write(file.dest, JSON.stringify(json, null, "  "));

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
