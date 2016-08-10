angular
  .module('Cedruber')
  .factory('CustomersFactory', CustomersFactory);

CustomersFactory.$inject = ['$http'];

function CustomersFactory($http) {
  return {};

}
