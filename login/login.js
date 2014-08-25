angular.module('sample.login', [
  'ui.router'
])
.config(function($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'login/login.html'
    });
})
.controller('LoginCtrl', function($scope, auth, $state) {
  $scope.login = function() {
    auth.signin({
      connection: 'Username-Password-Authentication',
      email: $scope.email,
      password: $scope.password
    });
  }

  $scope.loginWithFacebook = function() {
    auth.signin({
      connection: 'facebook'
    });
  }


});
