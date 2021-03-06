'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'core', // core

    'vendor',

    'myApp.view1', // views
    'myApp.view2',

    'myApp.version', // version

    'myApp.api', // api's

    'myApp.components.people', // people

    'myApp.components.person' // person


]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    //$locationProvider.html5Mode(true).hashPrefix('*');

    $routeProvider.otherwise({redirectTo: '/view1'});
}])
    .run(function () {
    });
