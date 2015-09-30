'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$timeout', '$mdDialog', function ($scope, $timeout, $mdDialog) {

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
                var test = $scope.items[item];
                purgeEmpty();

                $timeout(function () {
                    $scope.prize = "";
                    $scope.wait = false;
                }, 4000);
                return test;
            } else {
                showMessage();
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

        var showMessage = function () {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('You need $WAG, stat!')
                    .content('Add  swag inventory to the box on the right first.')
                    .ok('Okie dokes!')
            );
        };


        var test = function (items, iterations) {
            console.log("----------------BEGIN TEST---------------\n");
            console.log("Testing " + items + " items for " + iterations + " iterations.");
            var results = [];
            for (var k = 0; k < items; k++) {
                var testCase = "Item " + k;
                $scope.items.push({name: testCase, amount: 10000});
                results.push({name: testCase, chosen: 0});
            }
            for (var j = 0; j < iterations; j++) {
                var t = $scope.roulette();
                for (var m = 0; m < results.length; m++) {
                    if (results[m].name === t.name) {
                        results[m].chosen++;
                    }
                }
            }
            for (var l = 0; l < items; l++) {
                console.log(results[l].name + " was chosen " + (results[l].chosen / iterations) * 100 + "% of the time.");
            }
            $scope.items = [];
            console.log("----------------END TEST---------------\n");
        };


        //test(1, 10000);
        //test(2, 100);
        //test(2, 1000);
        //test(2, 10000);
        //test(15, 100);
        $scope.items.push({name: "Example Item", amount: 1});


    }]);