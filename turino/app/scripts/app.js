'use strict';

var turinoApp  = angular.module('turinoApp', ['ngProgress'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/mision/', {
        templateUrl: 'views/mision.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

turinoApp.config(function(progressbarProvider) {
  progressbarProvider.setColor('firebrick');
  progressbarProvider.setHeight('2px');
});

turinoApp.controller('MainController', ['$scope','progressbar',
                     function($scope,progressbar) {
                       $scope.name = 'Lars';
                       $scope.counter = 0;
                       $scope.show = false;

                       progressbar.start();
                       $scope.$on('$viewContentLoaded', function() {
                         progressbar.complete();
                         $scope.show = true;
                        });
}]);

turinoApp.controller('HeaderController', ['$scope','$location',
                     function($scope,$location) {
                       $scope.isActive = function(viewlocation) {
                         return viewlocation === $location.path();
                       };
}]);
