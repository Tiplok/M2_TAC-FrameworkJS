var myApp = angular.module('fjs',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Bonjour!';
}]);
