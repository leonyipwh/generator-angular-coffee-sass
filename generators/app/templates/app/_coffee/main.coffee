#######################################################
# Require
#######################################################
require 'angular/angular.min'


require 'angular-resource/angular-resource.min'


require 'angular-animate/angular-animate.min'




window._ = require 'underscore'

#######################################################
# Setup
#######################################################
app = angular.module 'app', []



#######################################################
# Wayfind Viewer App
#######################################################
app.controller  'MainCtrl', require './controllers/MainCtrl'



