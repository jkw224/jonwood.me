'use strict';

angular.module('jonWoodApp.resume', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'views/resume/resume.tpl.html',
    controller: 'resumeCtrl'
  });
}])

.controller('resumeCtrl', [function() {

}]);