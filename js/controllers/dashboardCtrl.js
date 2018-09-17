angular.module("gympassChallenge").controller("dashboardCtrl", function ($scope, $location, $stateParams){
    $scope.data = $stateParams.data;
});