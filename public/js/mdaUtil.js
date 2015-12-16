'use strict';
(function(){
	var mdaUtil = angular.module('mdaUtil', []);

	mdaUtil.filter('rendermda', function(){
		return function(input){

			var parseBlocks = function(input){



				return input;
			};

			input = parseBlocks(input);

			return input;
		};
	});
})();