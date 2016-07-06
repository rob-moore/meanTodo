(function (){
  angular.module('navBar', ['ngMaterial'])
    .controller('AppCtrl', AppCtrl);
  function AppCtrl($scope) {
    $scope.currentNavItem = 'Home';
  }
})();
