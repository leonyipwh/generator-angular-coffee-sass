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

    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      },
      {
        type: 'checkbox',
        name: 'features',
        message: 'Which additional features would you like to include?',
        choices: [{
          name: 'Imag CMS',
          value: 'includeCMS',
          checked: true
        }]
      },
    ]).then(function (answers) {
      var features = answers.features;

      function hasFeature(feat) {
        return features && features.indexOf(feat) !== -1;
      };

      this.projectName = hasFeature('projectName');

      this.log('Project Name', answers.projectName);
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('**/**/*.*'),
      this.destinationPath('./')
    );
  },

  packageJSON: function () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        projecName: this.projecName,
      }
    );
  },

  install: function () {
    this.installDependencies();
  }
});
