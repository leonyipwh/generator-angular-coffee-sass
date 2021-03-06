# generator-angular-coffee-sass
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Download Month](http://img.shields.io/npm/dm/generator-angular-coffee-sass.svg?style=flat-square)](https://www.npmjs.org/package/generator-angular-coffee-sass)

> Quick start webapp with AngualrJS, coffeescript, sass, underscoreJS


## Features

Please see our [gulpfile](app/templates/gulpfile.js) for up to date information on what we support.

* Browserify with AngualrJS v1.5.8 and underscoreJS
* enable [ES2015 features](https://babeljs.io/docs/learn-es2015/) using [Babel](https://babeljs.io)
* CSS Autoprefixing
* Built-in preview server with BrowserSync
* Automagically compile Sass
* Automagically lint your scripts
* Map compiled CSS to source stylesheets with source maps
* Automagically wire-up dependencies installed with [Bower](http://bower.io)


## Installation

First, install [Yeoman](http://yeoman.io) and generator-angular-coffee-sass using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).


```
npm install -g yo
npm install -g generator-angular-coffee-sass
```


Then generate your new project:

```
yo angular-coffee-sass
```


Yeoman will create a project with the following structure:

    .
    ├── app
    │   │── _coffee
    │   │── _sass
    │   │── fonts
    │   │── images
    │   │── views
    │   └── index.html
    ├── node_modules
    ├── bower_components
    ├── test
    ├── .gitignore
    ├── bower.json
    ├── package.json
    └── gulpfile.js

## Getting Started

- DEV: `gulp serve`

- DEPLOY: `gulp release`


## License

MIT © [Leon Yip]()


[npm-image]: https://badge.fury.io/js/generator-angular-coffee-sass.svg
[npm-url]: https://npmjs.org/package/generator-angular-coffee-sass
[travis-image]: https://travis-ci.org/leonyipwh/generator-angular-coffee-sass.svg?branch=master
[travis-url]: https://travis-ci.org/leonyipwh/generator-angular-coffee-sass
[daviddm-image]: https://david-dm.org/leonyipwh/generator-angular-coffee-sass.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/leonyipwh/generator-angular-coffee-sass
