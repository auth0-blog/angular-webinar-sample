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
  auth.signin({
    standalone: true,
    chrome: true
  });

});
