#######################################################
# Require
#######################################################
require 'angular/angular.min'
<% if (includeAngularRoute) { %>
require 'angular-route/angular-route.min'
<% } %>
<% if (includeAngularResource) { %>
require 'angular-resource/angular-resource.min'
<% } %>
<% if (includeAngularAnimate) { %>
require 'angular-animate/angular-animate.min'
<% } %>
<% if (includeAngularClickOutside) { %>
require 'angular-click-outside/angular-click-outside.js'
<% } %>


window._ = require 'underscore'

#######################################################
# Setup
#######################################################
app = angular.module 'app', []



#######################################################
# Wayfind Viewer App
#######################################################
app.controller  'MainCtrl', require './controllers/MainCtrl'
