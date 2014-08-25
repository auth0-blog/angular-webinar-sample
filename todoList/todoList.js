angular.module('sample.todoList', [
  'ui.router',
  'restangular'
])
.config(function($stateProvider) {
  $stateProvider
    .state('auth.todoList', {
      url: '/',
      controller: 'TodoListCtrl',
      templateUrl: 'todoList/todoList.html'
    });
})
.controller('TodoListCtrl', function($scope, Restangular, auth) {
  $scope.auth = auth;

  Restangular.all('todos').getList().then(function(todos) {
    $scope.todos = todos;
  });

  $scope.add = function() {
    $scope.todos.post({name: $scope.newTodo}).then(function(todo) {
      $scope.todos.push(todo);
      $scope.newTodo = '';
    });
  }

});
