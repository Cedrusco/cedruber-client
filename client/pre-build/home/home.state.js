angular
  .module('Cedruber')
  .config(HomeConfig);

HomeConfig.$inject = ['$stateProvider'];

function HomeConfig($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/pre-build/home/home.html',
    controller: 'HomeController'
  });
}
