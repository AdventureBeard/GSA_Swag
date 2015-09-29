'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$timeout', function ($scope, $timeout) {

        $scope.items = [];
        $scope.prize = "";
        $scope.newItemName = '';
        $scope.newItemAmount = '';
        $scope.wait = false;


        $scope.roulette = function () {
            if ($scope.items.length > 0) {
                $scope.wait = true;
                var item = Math.floor(Math.random() * $scope.items.length);
                $scope.items[item].amount--;
                $scope.prize = $scope.items[item].name;
                purgeEmpty();

                $timeout(function () {
                    $scope.prize = "";
                    $scope.wait = false;
                }, 4000);
            }
        };

        $scope.addItem = function () {
            if (!isNaN($scope.newItemAmount) && $scope.newItemName != '' && $scope.newItemAmount != 0 && $scope.newItemAmount != '') {
                $scope.items.push({name: $scope.newItemName, amount: $scope.newItemAmount});
                $scope.newItemName = '';
                $scope.newItemAmount = '';
                document.itemList.itemName.focus();
            }
        };

        $scope.dec = function (item) {
            item.amount--;
            purgeEmpty();
        };

        $scope.inc = function (item) {
            item.amount++;
        };

        var purgeEmpty = function () {
            for (var i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].amount <= 0) {
                    $scope.items.splice(i, 1);
                }
            }
        };


    }]);