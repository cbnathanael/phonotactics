angular.module('structure.controllers', ['mm.foundation', 'ui.filters'])
    .controller('StructureController', function($scope, $rootScope, $timeout, Data, Generators, Loaders) {
        $scope.numberSyllables = 0;
        $scope.pageSize = 28;

        $scope.currentPage = 0;
        $scope.nucleusError = "Imbalanced Parenthesis"
        $scope.balanceError = {
            coda: false,
            onset: false,
            nucleus: false
        };

        $scope.generate = new Generators($scope);
        $scope.usedPhonemes = Data.usedPhonemes;
        $scope.loader = new Loaders($scope);

        $scope.syllableForm = [];
        $scope.sonorityTemp = {};

        $scope.syllable = {
            allSyllables: [],
            nucleus: {
                structure: 'V(P(R))',
                phonemes: ''
            },
            onset: {
                structure: '',
                phonemes: ''
            },
            coda: {
                structure: '',
                phonemes: ''
            }
        };

        $scope.sonority = [{
            first: 'p',
            order: 'MUST NOT',
            last: 'm',
            section: 'all',
        }, {
            first: 'k',
            order: 'MUST',
            last: 'n',
            section: 'onset',
        }];
        $scope.testBalance = function(e, id) {
            var target = e.currentTarget;
            var val = target.value;
            if (val.split('(').length != val.split(')').length) {
                $scope.balanceError[id] = true;
            } else {
                $scope.balanceError[id] = false;
            }
        }
        parseForm = function(str) {
            var form = {};
            //strip anything other than alpha and ( ), hack into a nested array. This feels so dirty.
            str = '[' + str.replace(/[^a-zA-Z()]/g, "").replace(/\(/g, ",[").replace(/\)/g, "]").replace(/[a-zA-Z]/g, "'$&'").replace("''", "") + ']';
            form.phones = eval(str);
            return form;
        }

        getPhonemes = function(phones) {
            var thesePhones = phones;
            var tempArray = [];
            var tempValue = '';

            angular.forEach(thesePhones, function(v, k) {
                if (typeof v == 'object') {
                    tempArray = getPhonemes(v);
                } else if (typeof v == 'string') {
                    v = v.toLowerCase();
                    if (v.length > 1) {
                        tempArray = v.split('');
                        angular.forEach(tempArray, function(tv, tk) {
                            tempArray[tk] = [];
                            tempArray[tk].push.apply(tempArray[tk], $scope.usedPhonemes[tv]);
                        });
                        tempArray = $scope.generate.allPossibleCases(tempArray);
                    } else {
                        tempArray.push.apply(tempArray, $scope.usedPhonemes[v]);
                    }

                }
                thesePhones[k] = tempArray;
            })
            return thesePhones;
        }

        buildPhonemes = function(form) {
            var phones = [];
            var tempArray = [];
            var newSyllables = [];
            angular.forEach(form, function(value, key) {
                if (key == 0) {
                    phones = value;
                } else {
                    tempArray = buildPhonemes(value);
                    tempArray = [phones, tempArray];
                    newSyllables = $scope.generate.allPossibleCases(tempArray);
                    phones.push.apply(phones, newSyllables);
                }
            });
            return phones;
        }

        $scope.addSonorityRule = function() {
            $scope.sonority.push({
                first: $scope.sonorityTemp.first,
                order: $scope.sonorityTemp.order,
                last: $scope.sonorityTemp.last
            });
            $scope.sonorityTemp = {};
        }
        $scope.deleteSonorityRule = function(index) {
            $scope.sonority.splice(index, 1);
        }

        applySonority = function(phonemes) {
            var idx, sFirstLength, sLastLength;
            angular.forEach(phonemes, function(phValue, phKey) {
                angular.forEach($scope.sonority, function(sValue, sKey) {
                    idx = phValue.indexOf(sValue.first);
                    sFirstLength = sValue.first.length;
                    sLastLength = sValue.last.length;

                    if (idx > -1) {
                        if (phValue.substr(idx + sFirstLength, sLastLength) == sValue.last && sValue.order == "MUST NOT") {
                            phonemes.splice(phKey, 1);

                        } else if (phValue.substr(idx + sFirstLength, sLastLength) != sValue.last && sValue.order == "MUST") {
                            phonemes.splice(phKey, 1);

                        }
                    }
                });
            });
            return phonemes;
        }

        buildSyllables = function() {
            var syllables = [];
            var tempArray = [];
            var newSyllables = [];
            var finalSyllables = [];
            //$scope.syllable.allSyllables.length = 0;
            finalSyllables.push.apply(finalSyllables, $scope.syllable.nucleus.phonemes);

            //add coda
            tempArray = [finalSyllables, $scope.syllable.coda.phonemes];
            newSyllables = $scope.generate.allPossibleCases(tempArray);
            finalSyllables.push.apply(finalSyllables, newSyllables);

            //add onset
            
            tempArray = [finalSyllables, $scope.syllable.onset.phonemes];
            newSyllables = $scope.generate.allPossibleCasesInverse(tempArray);
            finalSyllables.push.apply(finalSyllables, newSyllables);
            finalSyllables = $scope.generate.makeUnique(finalSyllables);

            finalSyllables = applySonority(finalSyllables);

            $scope.syllable.allSyllables.push.apply($scope.syllable.allSyllables, finalSyllables);
        }

        $scope.generateStructure = function() {
            //start working reveal
            $scope.loader.showActivity('Generating...');
            $scope.syllable.nucleus.phonemes = [];
            $scope.syllable.onset.phonemes = [];
            $scope.syllable.coda.phonemes = [];
            $scope.syllable.allSyllables = [];

            $timeout(function() {
                //create basic components
                $scope.syllableForm = parseForm($scope.syllable.nucleus.structure);
                $scope.syllable.nucleus.phonemes = getPhonemes($scope.syllableForm.phones);
                $scope.syllable.nucleus.phonemes = buildPhonemes($scope.syllable.nucleus.phonemes);
                $scope.syllable.nucleus.phonemes = applySonority($scope.syllable.nucleus.phonemes);


                if($scope.syllable.onset.structure.length > 0) {
                    $scope.syllableForm = parseForm($scope.syllable.onset.structure);
                    $scope.syllable.onset.phonemes = getPhonemes($scope.syllableForm.phones);
                    $scope.syllable.onset.phonemes = buildPhonemes($scope.syllable.onset.phonemes);
                    $scope.syllable.onset.phonemes = applySonority($scope.syllable.onset.phonemes);
                }

                if($scope.syllable.coda.structure.length > 0) {
                    $scope.syllableForm = parseForm($scope.syllable.coda.structure);
                    $scope.syllable.coda.phonemes = getPhonemes($scope.syllableForm.phones);
                    $scope.syllable.coda.phonemes = buildPhonemes($scope.syllable.coda.phonemes);
                    $scope.syllable.coda.phonemes = applySonority($scope.syllable.coda.phonemes);
                }
                
                //build syllables
                buildSyllables();

                //shuffle?
                // if($scope.randomized) {
                    $scope.syllable.shuffled = angular.copy($scope.syllable.allSyllables);
                    shuffleArray($scope.syllable.shuffled);
                //}

                $scope.numberSyllables = $scope.syllable.allSyllables.length;
                $rootScope.isGen = true;
                $rootScope.tabs = 'generated';
            }, 1000);

            $scope.loader.hideActivity();
        }

        $scope.numberOfPages = function() {
            return Math.ceil($scope.syllable.allSyllables.length / $scope.pageSize);
        }
        var shuffleArray = function(array) {
            var m = array.length,
                t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

            return array;
        }
    })
    .animation('.sonority_rule', function() {
        return {
            move: function(element, done) {
                element.css('opacity', 0);
                jQuery(element).animate({
                    opacity: 1
                }, done);

                // optional onDone or onCancel callback
                // function to handle any post-animation
                // cleanup operations
                return function(isCancelled) {
                    if (isCancelled) {
                        jQuery(element).stop();
                    }
                }
            }
        }
    });
