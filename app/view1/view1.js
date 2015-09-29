'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {

        $scope.imageSource = "res/blanket.jpg";
        $scope.items = [];
        $scope.prize = "";
        $scope.newItemName = '';
        $scope.newItemAmount = '';


        $scope.roulette = function () {
            var item = Math.floor(Math.random() * $scope.items.length);
            $scope.items[item].amount--;
            $scope.prize = $scope.items[item].name;
            purgeEmpty();

            setTimeout(function() { $scope.prize = "";}, 3000);
        };

        $scope.addItem = function () {
            if (!isNaN($scope.newItemAmount) && $scope.newItemName != '' && $scope.newItemAmount != 0 && $scope.newItemAmount != '') {
                $scope.items.push({name: $scope.newItemName, amount: $scope.newItemAmount});
                $scope.newItemName = '';
                $scope.newItemAmount = '';
                document.itemList.itemName.focus();
            }

        };

        $scope.subtract = function(item) {
            item.amount--;
            purgeEmpty();
        };

        var purgeEmpty = function() {
            for (var i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].amount <= 0) {
                    $scope.items.splice(i, 1);
                }
            }
        };
    }]);