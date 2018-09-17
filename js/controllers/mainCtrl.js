angular.module("gympassChallenge").controller('mainCtrl', ['$scope', 'fileUpload', '$state', function($scope, fileUpload, $state){
    $scope.uploadFile = function(){
       var file = $scope.myFile;
       var uploadUrl = "http://localhost:8080/";
       fileUpload.uploadFileToUrl(file, uploadUrl).then(function(response){
           $state.go('dashboard', {data: response});
       });
    };
 }]);