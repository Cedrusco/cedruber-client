angular.module('Cedruber', ['ui.router']);

angular
  .module('Cedruber')
  .config(AppConfig);

AppConfig.$inject = ['$urlRouterProvider', '$locationProvider'];

function AppConfig($urlRouterProvider, $locationProvider) {
  // This turns off hashbang urls (/#about) and changes it to something normal (/about)
  $locationProvider.html5Mode(true);

  // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
  $urlRouterProvider.otherwise('/');
}
