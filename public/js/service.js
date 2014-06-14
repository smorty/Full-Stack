'use strict';

angular.module('myApp')
  .service('Service', function ($http, $q) {
    this.getFamily = function(){
    	var deferred = $q.defer();
		$http({method: 'GET', url: 'http://localhost:9001/family'}).success(function(data) {
	      deferred.resolve(data);
	    });
	  return deferred.promise;
	}
	this.getFriends = function(){
    	var deferred = $q.defer();
		$http({method: 'GET', url: 'http://localhost:9001/friends'}).success(function(data) {
	      deferred.resolve(data);
	    });
	  return deferred.promise;
	}
	this.getActivities = function(){
    	var deferred = $q.defer();
		$http({method: 'GET', url: 'http://localhost:9001/activities'}).success(function(data) {
	      deferred.resolve(data);
	    });
	  return deferred.promise;
	}
	this.getMe = function(){
    	var deferred = $q.defer();
		$http({method: 'GET', url: 'http://localhost:9001/me'}).success(function(data) {
	      deferred.resolve(data);
	    });
	  return deferred.promise;
	}
	this.postFamily = function(text){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'http://localhost:9001/family',
			data: {message: text}
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	};
	this.postFriends = function(text){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'http://localhost:9001/friends',
			data: {message: text}
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	};
	this.postActivities = function(text){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'http://localhost:9001/activities',
			data: {activity: text}
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	};
	this.postMe = function(text){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'http://localhost:9001/me',
			data: {message: text}
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(err){
			deferred.reject(err);
		});
		return deferred.promise;
	};
  });