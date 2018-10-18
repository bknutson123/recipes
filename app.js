var firstApp = angular.module('myApp', []);
firstApp.controller('myCtrl',
    function($scope, $http) {
        $scope.food = [];
        var url = "https://www.themealdb.com/api/json/v1/1/categories.php";
                $http.get(url).then(function(response) {
                    console.log(response.data.categories);
                    $scope.food = response.data.categories;
                });
        $scope.random = function() {
             var url = "https://www.themealdb.com/api/json/v1/1/random.php";
                $http.get(url).then(function(response) {
                    console.log(response.data.meals);
                    $scope.food = response.data.meals;
                });

        }
        
        $scope.otherClicked = function(category, id) {
            console.log(category);
            if (category == undefined) {
                var url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
                $http.get(url).then(function(response) {
                    console.log(response.data.meals);
                    $scope.food = response.data.meals;
                });
            }
            else {
            var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
                $http.get(url).then(function(response) {
                    console.log(response.data.meals);
                    $scope.food = response.data.meals;
                });
            }
        }
        
        $scope.clicked = function(category, id) {
            console.log(category);
            if (category == undefined) {
                var url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
                $http.get(url).then(function(response) {
                    console.log(response.data.meals);
                    $scope.food = response.data.meals;
                });
            }
            else {
            var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
                $http.get(url).then(function(response) {
                    console.log(response.data.meals);
                    $scope.food = response.data.meals;
                });
            }
        }
        $scope.reload = function() {
            var url = "https://www.themealdb.com/api/json/v1/1/categories.php";
                $http.get(url).then(function(response) {
                    console.log(response.data.categories);
                    $scope.food = response.data.categories;
                });
        }

    });
