var app = angular.module("app" , []);
app.controller("appController", function($scope, $http){
//    $http.get("http://localhost:8090/students/name/vivek").then(function(response) {
//        this.students=response.data;
//    });

    self = this;

    $scope.students=[{"id": 1, "name": "demo", "course": "demo"}, {"id": 2, "name": "demo", "course": "demo"}];

    $http.get("http://localhost:8090/students/name/vivek").then(function(response){
        $scope.students=response.data;
    });

});
