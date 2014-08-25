angular.module( 'sample', [
  'ui.router',
  'restangular',
  'sample.auth',
  'sample.todoList',
  'sample.todoItem',
  'sample.login',
  'auth0'
])
.config( function ( RestangularProvider, $urlRouterProvider, authProvider, $httpProvider) {

  authProvider.init({
    domain: 'samples.auth0.com',
    clientID: 'BUIJSW9x60sIHBw8Kd9EmCbj8eDIFxDC',
    callbackURL: location.href,
    loginState: 'login'
  });

  RestangularProvider.setBaseUrl('http://auth0-test-todo-api.herokuapp.com/api/');

  $httpProvider.interceptors.push('authInterceptor');

  $urlRouterProvider.otherwise('/');
})
.run(function(auth) {
  auth.hookEvents();
})
.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

})

;

