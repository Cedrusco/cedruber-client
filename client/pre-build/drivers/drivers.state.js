angular
  .module('Cedruber')
  .config(DriversConfig);

DriversConfig.$inject = ['$stateProvider'];

function DriversConfig($stateProvider) {
  $stateProvider.state('drivers', {
    url: '/drivers',
    templateUrl: '/pre-build/drivers/drivers.html',
    controller: 'DriversController'
  });
}
