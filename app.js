'use strict';

// Declare app level module which depends on views, and components
angular.module('jonWoodApp', [
  'ngRoute',
  'jonWoodApp.home',
  'jonWoodApp.resume',
  'jonWoodApp.projects'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
});
}]);