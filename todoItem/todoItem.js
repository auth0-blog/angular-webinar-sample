angular.module('sample.todoItem', [
  'ui.router'
])
.config(function($stateProvider) {
  $stateProvider
    .state('auth.todoItem', {
      url: '/todos/:id',
      controller: 'TodoItemCtrl',
      templateUrl: 'todoItem/todoItem.html'
    });
})
.controller('TodoItemCtrl', function($scope, $stateParams, Restangular) {
  Restangular.one('todos', $stateParams.id).get().then(function(todo) {
    $scope.todo = todo;
  });
});
