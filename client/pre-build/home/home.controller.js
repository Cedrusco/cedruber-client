angular
  .module('Cedruber')
  .controller('HomeController', HomeController);

HomeController.$inject = ['$scope'];

function HomeController($scope) {
  $scope.msgFromScope = 'Your day belongs to you.';
}
