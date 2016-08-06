'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'core', // core
  'myApp.view1', // views
  'myApp.view2',
  'myApp.version', // version
  'components.people' // people
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
