'use strict';

angular.module('myApp')
	.controller('dataCtrl', function($scope, Service){
		$scope.test = 'My App';
		$scope.refreshFam = function(){
			// debugger;
	    	Service.getFamily().then(function(data) {
	  			var parseFam = function(){
	  				var famArr = [];
	  				for(var i = 0; i < data.length; i++){
	  					famArr.push([i+1]+'. Name: '+data[i].name);
	  					famArr.push([i+1]+'. Age: '+data[i].age);
	  					famArr.push([i+1]+'. Relationship: '+data[i].relationship);
					}
					return famArr;
				}
				$scope.family = parseFam();
			});
	    };
	    $scope.refreshFr = function(){
			// debugger;
	    	Service.getFriends().then(function(data) {
	  			$scope.friends = data;
			});
	    };
	    $scope.refreshAct = function(){
			// debugger;
	    	Service.getActivities().then(function(data) {
	  			$scope.activities = data;
			});
	    };
	    $scope.refreshMe = function(){
			// debugger;
	    	Service.getMe().then(function(data) {
	  			$scope.me = data;
			});
	    };
	    $scope.refreshFam();
	    $scope.refreshFr();
	    $scope.refreshAct();
	    $scope.refreshMe();
	    $scope.category = '';
	    $scope.showFamily = function(){
	  		$scope.category = $scope.family;
		};
		$scope.showFriends = function(){
	  		$scope.category = $scope.friends;
		};
		$scope.showActivities = function(){
	  		$scope.category = $scope.activities;
		};
		$scope.showMe = function(){
	  		$scope.category = $scope.me;
		};
		$scope.fam = '';
		$scope.addFamily = function(){
  			Service.postFamily($scope.fam).then(function(){
  				$scope.refreshFam();
  				$scope.fam='';
  			})
  		};
  		$scope.act = '';
  		$scope.addActivity = function(){
  			Service.postActivities($scope.act).then(function(){
  				$scope.refreshAct();
  				$scope.category = $scope.activities;
  				$scope.act='';
  			})
  		};
	});
