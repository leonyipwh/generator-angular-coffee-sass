'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the unreal ' + chalk.red('generator-angular-coffee-sass') + ' generator!'
    ));

    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }]).then(function (answers) {
      this.log('app name', answers.name);
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('**/**/*.*'),
      this.destinationPath('./')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
