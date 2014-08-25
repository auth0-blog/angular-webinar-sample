angular.module('sample.auth', [
  'ui.router'
])
.config(function($stateProvider) {
  $stateProvider
    .state('auth', {
      abstract: true,
      controller: 'AuthCtrl',
      templateUrl: 'authenticated/authenticated.html',
      data: {
        requiresLogin: true
      }
    });
})
.controller('AuthCtrl', function($scope, auth, $state) {
  $scope.auth = auth;

  $scope.logout = function() {
    auth.signout();
    $state.go('login');
  };

});
