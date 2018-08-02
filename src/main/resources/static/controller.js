var app = angular.module("app" , []);
app.controller("appController", function($scope, $http){

    $http.get("http://localhost:8090/students/name/vivek").then(function(response){
        $scope.students=response.data;
    });

});
