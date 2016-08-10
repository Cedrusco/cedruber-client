angular
  .module('Cedruber')
  .directive('navbar', navbar);

function navbar(){
  return {
    restrict: 'E',
    templateUrl: '/pre-build/navbar/navbar.html'
  };
}
