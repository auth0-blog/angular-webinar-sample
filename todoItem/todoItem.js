angular.module('sample.todoItem', [
  'ui.router'
])
.config(function($stateProvider) {
  $stateProvider
    .state('todoItem', {
      url: '/todos/:id',
      controller: 'TodoItemCtrl',
      templateUrl: 'todoItem/todoItem.html',
      data: {
        requiresLogin: true
      }
    });
})
.controller('TodoItemCtrl', function($scope, $stateParams, Restangular) {
  Restangular.one('todos', $stateParams.id).get().then(function(todo) {
    $scope.todo = todo;
  });
});
