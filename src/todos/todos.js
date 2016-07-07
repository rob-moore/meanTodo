import _ from 'lodash';

export default function ($scope) {
  let params = {
    createHasInput: false,
  };
  $scope.todos = [
    {
      task: 'do dishes',
      isCompleted: false,
      isEditing: false,
    },
    {
      task: 'learn angular',
      isCompleted: true,
      isEditing: false,
    },
  ];

  $scope.onCompletedClick = (todo) => {
    todo.isCompleted = !todo.isCompleted;
  };

  $scope.onEditClick = (todo) => {
    todo.isEditing = true;
    todo.updatedTask = todo.task;
  };

  $scope.onCancelClick = (todo) => {
    todo.isEditing = false;
  };

  $scope.createTask = () => {
    params.createHasInput = false;
    $scope.createTaskInput = '';
  };

  $scope.updateTask = (todo) => {
    todo.task = todo.updatedTask;
    todo.isEditing = false;
  };

  $scope.deleteTask = todoToDelete => {
    _.remove($scope.todos, todo => todo.task === todoToDelete.task);
  };

  $scope.$watch('createTaskInput', val => {
    if (!val && params.createHasInput) {
      $scope.todos.pop();
      params.createHasInput = false;
    } else if (val && !params.createHasInput) {
      $scope.todos.push({ task: val, isCompleted: false });
      params.createHasInput = true;
    } else if (val && params.createHasInput) {
      $scope.todos[$scope.todos.length - 1].task = val;
    }
  });
}
