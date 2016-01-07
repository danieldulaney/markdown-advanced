'use strict';
(function(){
	var mdaUtil = angular.module('mdaUtil', []);

	mdaUtil.filter('rendermda', function(){
		return function(input){
			return input;
		};
	});
})();