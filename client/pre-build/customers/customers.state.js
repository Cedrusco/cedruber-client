angular
  .module('Cedruber')
  .config(CustomersConfig);

CustomersConfig.$inject = ['$stateProvider'];

function CustomersConfig($stateProvider) {
  $stateProvider.state('customers', {
    url: '/customers',
    templateUrl: '/pre-build/customers/customers.html',
    controller: 'CustomersController'
  });
}
