angular.module('phones.directives', ['mm.foundation'])
	.directive('phonemeList', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/phonemes.html',
			controller: 'PhonemeController',
			controllerAs: 'phoneme'
		};
	})
	// .directive('structureForm', function(){
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'partials/structure.html',
	// 		controller: 'SyllableController',
	// 		controllerAs: 'syllable'
	// 	};
	// })
	.directive('structureFormNew', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/structure2.html',
			controller: 'StructureController',
			controllerAs: 'struct',
		};
	})
	.directive('generatedForm', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/generated.html',
			controller: 'StructureController',
			controllerAs: 'struct'
		};
	})
	.directive('activity', function() {
        return {
            restrict: 'EA',
            templateUrl: 'partials/activity.html',
            replace: true,
            scope: {
                message: '@'
            },
            link: function (scope, element, attrs) {}
        };
    })
    .directive('ipaTable', function() {
    	return {
    		restrict: 'E',
    		templateUrl: 'partials/ipa_consonants.html',
    		controller: 'IpaController',
    		controllerAs: 'ipa'
    	}
    });