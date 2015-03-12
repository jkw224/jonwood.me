'use strict';

angular.module('jonWoodApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'views/projects/projects.tpl.html',
    controller: 'projectsCtrl'
  });
}])

.controller('projectsCtrl', [function() {

}]);