angular.module( 'sample', [
  'ui.router',
  'restangular',
  'sample.todoList',
  'sample.todoItem'
])
.config( function ( RestangularProvider, $urlRouterProvider) {
  RestangularProvider.setBaseUrl('http://auth0-test-todo-api.herokuapp.com/api/open');

  $urlRouterProvider.otherwise('/');
})
.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

})

;

