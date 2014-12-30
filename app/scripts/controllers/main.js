'use strict';

/**
 * @ngdoc function
 * @name fantasyFootballApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fantasyFootballApp
 */
angular.module('fantasyFootballApp').controller('MainCtrl', function ($scope, $http, $filter) {

	$scope.players = [];

	$http.get('ffb.json').success(function(data) {
		angular.copy(data, $scope.players);
	});

    $scope.sort = [];
    $scope.setSort = function(type) { $scope.sort = type.toLowerCase(); };

    $scope.check = true;
    $scope.toggleActive= function() {
        $scope.check = $scope.check === false ? true: false;
    };

 	$scope.isTaken = [];

    $scope.toggleClass = function (id) {
    	$scope.isTaken[id] = $scope.isTaken[id]=='player__drafted'?'':'player__drafted';
    };

    $scope.taken = [];

    $scope.toggleChecked = function (item, index) {
        $scope.taken.push(item);
        $scope.isTaken[item] = $scope.isTaken[item]=='error'?'':'error';
    };

});
