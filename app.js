'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', []).
controller('main', function ($scope) {
  $scope.someText = 'Hello World!';
  $scope.someArray = [
    'cool thing 1',
    'cool thing 2',
    'cool thing 3',
    'cool thing 4',
    'cool thing 5'
  ]
});