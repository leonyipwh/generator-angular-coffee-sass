'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the unreal ' + chalk.red('generator-angular-coffee-sass') + ' generator!'
    ));

    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      },
      {
        type: 'checkbox',
        name: 'angularModules',
        message: 'Which angular modules would you like to add?',
        choices: [
          {
            name: 'angular-route',
            value: 'includeAngularRoute',
            checked: true
          },
          {
            name: 'angular-animate',
            value: 'includeAngularAnimate',
            checked: true
          },
          {
            name: 'angular-resource',
            value: 'includeAngularResource',
            checked: true
          },
          {
            name: 'angular-click-outside',
            value: 'includeAngularClickOutside',
            checked: true
          }
        ]
      },
      {
        type: 'checkbox',
        name: 'features',
        message: 'Which additional features would you like to include?',
        choices: [
          {
            name: 'imagCMS',
            value: 'imagCMS',
            checked: true
          },
          {
            name: 'imagTranslate',
            value: 'imagTranslate',
            checked: true
          }
        ]
      }
    ]).then(function (answers) {
      var features = answers.features;

      function hasFeature(feat) {
        return features && features.indexOf(feat) !== -1;
      }
      this.projectName = hasFeature('projectName');
      this.features = hasFeature('features');

      // Angular Modules
      var angularModules = answers.angularModules;

      function hasAngularModules(feat) {
        return angularModules && angularModules.indexOf(feat) !== -1;
      }
      this.includeAngularRoute = hasAngularModules('includeAngularRoute');
      this.includeAngularResource = hasAngularModules('includeAngularResource');
      this.includeAngularAnimate = hasAngularModules('includeAngularAnimate');
      this.includeAngularClickOutside = hasAngularModules('includeAngularClickOutside');

      done();
    }.bind(this));
  },

  copyFiles: function () {
    // test folder
    this.fs.copy(
      this.templatePath('test/**/*'),
      this.destinationPath('test')
    );

    // app files
    this.fs.copy(
      this.templatePath('app/*.*'),
      this.destinationPath('app')
    );

    // SASS files
    this.fs.copy(
      this.templatePath('app/_sass/**/*'),
      this.destinationPath('app/_sass'),
      {globOptions: {dot: true}}
    );

    // controllers files
    this.fs.copy(
      this.templatePath('app/_coffee/controllers/*'),
      this.destinationPath('app/_coffee/controllers/')
    );

    // Gulpfile
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
  },

  templateFiles: function () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        projectName: this.projectName,
        includeAngularRoute: this.includeAngularRoute,
        includeAngularResource: this.includeAngularResource,
        includeAngularAnimate: this.includeAngularAnimate,
        includeAngularClickOutside: this.includeAngularClickOutside
      }
    );

    this.fs.copyTpl(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json'),
      {
        projectName: this.projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath('app/_coffee/main.coffee'),
      this.destinationPath('app/_coffee/main.coffee'),
      {
        includeAngularRoute: this.includeAngularRoute,
        includeAngularResource: this.includeAngularResource,
        includeAngularAnimate: this.includeAngularAnimate,
        includeAngularClickOutside: this.includeAngularClickOutside
      }
    );
  },

  misc: function () {
    mkdirp('app/images');
    mkdirp('app/fonts');
  },

  install: function () {
    this.installDependencies();
  }
});
