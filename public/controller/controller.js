   var app = angular.module('myApp', []);
app.controller('AppCtrl', function ($scope, $http) {
    // console.log("hello world")



$http.get('/player').success(function(response){
    console.log("msg from get method")
    console.log(JSON.stringify(response))
    $scope.districts= response;
})
$http.get('/coach').success(function(response){
    console.log("msg from get method")
    console.log(JSON.stringify(response))
    $scope.thanas= response;
})
   $scope.selectedDist={};
            $scope.districts = [
                            ];

            $scope.thanas = [
                
            ];
            $scope.filterExpression = function(thana) {
                console.log("thana"+ JSON.stringify(thana));
                return (thana.id === $scope.selectedDist.id );

            };

        });