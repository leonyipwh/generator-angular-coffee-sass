'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('General checking', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({includeAngularRoute: true})
      .toPromise();
  });

  it('Required files exist', function () {
    assert.file([
      'package.json',
      'gulpfile.js',
      'bower.json'
    ]);
  });
});
