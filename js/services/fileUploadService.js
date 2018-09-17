angular.module("gympassChallenge").service('fileUpload', ['$http', function ($http, $state) {
    this.uploadFileToUrl = function(file, uploadUrl){
       
        var fd = new FormData();
        fd.append("file", file);

        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).then(function(response){
            return response.data;
        });
    }
}]);