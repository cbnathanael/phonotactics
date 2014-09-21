angular.module('structure.controllers', ['mm.foundation', 'ui.filters'])
	.controller('StructureController', function($scope, $rootScope, Data, Generators) {
		$scope.generate = new Generators($scope);
		$scope.usedPhonemes = Data.usedPhonemes;
		$scope.syllableForm = [];
		$scope.syllable = {
			nucleus: {
				structure: 'A(B)(C)',
				phonemes: ''
			},
			onset: {
				structure: 'C',
				phonemes: ''
			},
			coda: {
				structure: 'C',
				phonemes: ''
			},
		};

		parseForm = function(str, idx) {
			var struct = { sub: [], phones: '', i: 0 };
			struct.i = idx || 0;
			//debugger;
			var subElements = '';
			var elements = '';

			while(struct.i < str.length) {
				// if ( str.charAt(struct.i) == ')') {
				// 	struct.i ++;
				// 	struct.arr.push(subElements);
				// 	subElements = '';
				// 	return struct;
				// }
				if ( str.charAt(struct.i) == ')') {
					debugger;
					//struct.phones = elements;
					//return struct;
				}
				if ( str.charAt(struct.i) == '(') {
					debugger;
					struct.i++;
					subElements = parseForm(str, struct.i);
					struct.sub = subElements;
					struct.i = elements.i;
					debugger;
				}
				else {
					debugger;
					if(str.charAt(struct.i) !='' && str.charAt(struct.i) != ')' ) {
						elements += str.charAt(struct.i);
					}
					struct.i++;
				}
			}
			struct.phones = elements;

			return struct;
		}
		
		getPhonemes = function(form) {
			var tempArray = [];
			var phones = [];
			var finalPhones = [];
			

			if(form.phones.length > 1) {
				tempPhone = form.phones.split('');
				for(i=0;i<tempPhone.length;i++) {
					tempPhone[i] = $scope.usedPhonemes[tempPhone[i].toLowerCase()]
				}
				phones = $scope.generate.allPossibleCases(tempPhone);
			} else {
				phones = $scope.usedPhonemes[form.phones.toLowerCase()];
			}
			
			if(form.sub.phones) {
				tempArray = getPhonemes(form.sub);
				newPhones = [phones, tempArray];
				newPhones = $scope.generate.allPossibleCases(newPhones);
				finalPhones = phones.concat(newPhones);
				debugger;
			} else {
				finalPhones = phones;
			}
			debugger;
			return finalPhones;
		}

		makeStructure = function(form) {
			var phones = [];
			var tempArray = [];
			var newSyllables = [];
			angular.forEach(form, function(value, key) {
				//console.log(typeof value + ' ' +key);

				if(typeof value == 'object') {
					tempArray = makeStructure(value);
				}
				else if (typeof value == 'string') {
					console.log(value);
				}
			});
			return phones;
		}

		$scope.generateStructure = function() {
			if($scope.syllable.nucleus.structure.split('(').length == $scope.syllable.nucleus.structure.split(')').length) {
				$scope.syllableForm = parseForm($scope.syllable.nucleus.structure, 0);
				//$scope.syllable.nucleus.phonemes = getPhonemes($scope.syllableForm);

				//$scope.syllable.nucleus.phonemes = makeStructure($scope.syllableForm);
				
			}
			else {
				alert('mismatch');
			}
			//$scope.syllable.nucleus.phonemes = parseForm($scope.syllable.nucleus.structure);
			//debugger;
		}
	});
