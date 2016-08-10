angular
  .module('Cedruber')
  .controller('CustomersController', CustomersController);

CustomersController.$inject = ['$scope', '$http'];

function CustomersController($scope, $http) {

  function init() {
    $scope.getCustomers();
    $scope.greetCustomers('Michael')
  };

  $scope.greetCustomers = function(message) {
    $http
      .post('https://api.us.apiconnect.ibmcloud.com/ashrafinteractive-cloudscom-michael-space/sb/api/Customers/greet?client_id=fa09217a-5336-4b19-8339-f8e524b7360d&client_secret=P3vN1xN3xO7pI2rY5rR5hH1fR1gR1eU4qP5iR2rC1sU2sH1dS3', {msg: message})
      .then(function(response) {
        console.log('the response', response)
      })

  }

  $scope.getCustomers = function () {
    $http.defaults.headers.common = {
      'Cache-Control': 'no-cache'
    }

    $http.get('https://api.us.apiconnect.ibmcloud.com/ashrafinteractive-cloudscom-michael-space/sb/api/Customers?client_id=fa09217a-5336-4b19-8339-f8e524b7360d&client_secret=P3vN1xN3xO7pI2rY5rR5hH1fR1gR1eU4qP5iR2rC1sU2sH1dS3')
      .then(function(response) {
        console.log('the response', response)
        $scope.message = {
          data: response.data,
          url: response.config.url
        }
        $scope.customers = response.data;
      })
      .catch(function(err) {
        console.log('there was an error', err)
      })
  }

  $scope.createCustomer = function () {
    $http.post('https://api.us.apiconnect.ibmcloud.com/ashrafinteractive-cloudscom-michael-space/sb/api/Customers?client_id=fa09217a-5336-4b19-8339-f8e524b7360d&client_secret=P3vN1xN3xO7pI2rY5rR5hH1fR1gR1eU4qP5iR2rC1sU2sH1dS3', $scope.customer)
      .then(function(response) {
        if(response.status === 200) {
          $scope.message = 'Customer Created Successfully';
        }
      })
      .catch(function(err) {
        $scope.message = JSON.stringify(err);
      })
  }
  init();

}
