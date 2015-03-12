'use strict';

angular.module('jonWoodApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home/home.tpl.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}]);