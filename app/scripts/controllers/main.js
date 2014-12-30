'use strict';

/**
 * @ngdoc function
 * @name fantasyFootballApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fantasyFootballApp
 */
angular.module('fantasyFootballApp').controller('MainCtrl', function ($scope, $http) {
	$scope.players = [];
	$http.get('ffb.json').success(function(data) {
		angular.copy(data, $scope.players);
	});

	$scope.hot = function(item) {
	    if(item.hot > 1) return "player__hot";
	    return true;
	};

	$scope.isGrey = [];

    $scope.toggleClass = function (id) {
    	$scope.isGrey[id] = $scope.isGrey[id]=='error'?'':'error';
    };

});
