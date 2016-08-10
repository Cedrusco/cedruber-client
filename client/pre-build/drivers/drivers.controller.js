angular
  .module('Cedruber')
  .controller('DriversController', DriversController);

DriversController.$inject = ['$scope', '$http'];

function DriversController($scope, $http) {

  function init() {
    $scope.getDrivers();
  };


  $scope.getDrivers = function () {
    $http.get('https://api.us.apiconnect.ibmcloud.com/ashrafinteractive-cloudscom-michael-space/sb/api/Drivers?client_id=fa09217a-5336-4b19-8339-f8e524b7360d&client_secret=P3vN1xN3xO7pI2rY5rR5hH1fR1gR1eU4qP5iR2rC1sU2sH1dS3')
      .then(function(response) {
        console.log('the response', response)
        $scope.message = {
          data: response.data,
          url: response.config.url
        }
        $scope.drivers = response.data;
      })
      .catch(function(err) {
        console.log('there was an error', err)
      })
  }

  $scope.createDriver = function () {
    $http.post('https://api.us.apiconnect.ibmcloud.com/ashrafinteractive-cloudscom-michael-space/sb/api/Drivers?client_id=fa09217a-5336-4b19-8339-f8e524b7360d&client_secret=P3vN1xN3xO7pI2rY5rR5hH1fR1gR1eU4qP5iR2rC1sU2sH1dS3', $scope.driver)
      .then(function(response) {
        if(response.status === 200) {
          $scope.message = 'Driver Created Successfully';
        }
      })
      .catch(function(err) {
        $scope.message = err;
      })
  }
  init();

}
