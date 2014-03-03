# grunt-replace-json-glob

> Expands globs in json files.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-replace-json-glob --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-replace-json-glob');
```

## The "replace_json_glob" task

### Overview
In your project's Gruntfile, add a section named `replace_json_glob` to the data
object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  replace_json_glob: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Usage Examples

In this example, we replace globs in the first set of content_scripts in a
Chrome extension's manifest.json:

```js
grunt.initConfig({
  replace_json_glob: {
    dist: {
      files: [{
        src: 'app/manifest.json',
        dest: 'dist/manifest.json',
        subdir: 'app',
        props: ['content_scripts.0.js']
      }],
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Jonathan Skeate. Licensed under the MIT license.
