export default function($scope) {
  $scope.todos = [
    {
      task: 'do dishes',
      isCompleted: false
    },
    {
      task: 'learn angular',
      isCompleted: true
    }
  ];

  $scope.onCompletedClick = (todo) => {
    todo.isCompleted = !todo.isCompleted;
  }; 
}
