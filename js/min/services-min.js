angular.module('phones.services', [])
    .factory('Data', function() {
        return {
            ipaItem: {
                item: '',
                title: ''
            },
            usedPhonemes: {
                a: [],
                b: [],
                c: ['p', 'b', 't', 'd', 'k', 'g', 'm', 'n', 'ŋ', 'r', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'h', 'j', 'l', 'w', 't͡ʃ', 'd͡ʒ'],
                //['p', 'b', 'm', 't', 'd', 'k', 'g', 'm', 'n', 'ɾ', 'f', 'v', 'θ', 'ð', 's', 'z', 't͡s', 'd͡z', 'j', 'l'],
                d: [],
                e: [],
                f: [],
                g: [],
                h: [],
                i: [],
                j: [],
                k: [],
                l: [],
                m: [],
                n: [], //['n','m'],
                o: [],
                p: ['p','t','k'],
                q: [],
                r: ['r'],
                s: [],
                t: [],
                u: [],
                v: ['i', 'u', 'ɛ', 'ɒ'],
                w: [],
                x: [],
                y: [],
                z: [],
            },
            allPhonemes: {
                a: ['ʋ','ɹ','ɻ','j','ɰ'],
                b: ['l','ɭ','ʎ','ʟ',],
                //c: ['p', 'b', 't', 'd', 'k', 'g', 'm', 'n', 'ŋ', 'r', 'f', 'v', 'θ', 'ð', 's', 'z', 'ʃ', 'ʒ', 'h', 'j', 'l', 'w', 't͡ʃ', 'd͡ʒ'],
                d: ['ʍ','w','ɥ','ʜ','ʢ','ʡ','ɕ','ʑ','ɺ','ɧ'],
                e: [],
                f: [],
                g: [],
                h: [],
                i: [],
                j: [],
                k: [],
                l: [],
                m: [],
                n: [],
                o: [],
                p: [],
                q: [],
                r: [],
                s: [],
                t: [],
                u: [],
                v: ['i', 'u', 'ɛ', 'ɒ'],
                w: [],
                x: [],
                y: [],
                z: [],
            }
        }
    })
    .factory('Generators', function($timeout) {

        function Factory($scope, $timeout) {

            this.$scope = $scope;
            this.$timeout = $timeout;
        }

        Factory.prototype.allPossibleCases = function(arr) {
            if (arr.length == 0) {
                return [];
            } else if (arr.length == 1) {
                return arr[0];
            } else {
                var result = [];
                var allCasesOfRest = this.allPossibleCases(arr.slice(1)); // recur with the rest of array
                if (allCasesOfRest.length == 0) {
                    return arr[0];
                } else if (arr[0].length == 0) {
                    return allCasesOfRest;
                } else {
                    for (var i = 0; i < allCasesOfRest.length; i++) {
                        for (var j = 0; j < arr[0].length; j++) {
                            result.push(arr[0][j] + allCasesOfRest[i]);
                        }
                    }
                    return result;
                }
            }

        }
        Factory.prototype.allPossibleCasesInverse = function(arr) {
            if (arr.length == 1) {
                return arr[0];
            } else {
                var result = [];
                var allCasesOfRest = this.allPossibleCases(arr.slice(1)); // recur with the rest of array
                if (allCasesOfRest.length == 0) {
                    return arr[0];
                } else {
                    for (var i = 0; i < allCasesOfRest.length; i++) {
                        for (var j = 0; j < arr[0].length; j++) {
                            result.push(allCasesOfRest[i] + arr[0][j]);
                        }
                    }
                    return result;
                }
            }

        }
        Factory.prototype.makeUnique = function(items) {



            var hashCheck = {},
                newItems = [];

            var extractValueToCompare = function(item) {
                if (angular.isObject(item) && angular.isString(filterOn)) {
                    return item[filterOn];
                } else {
                    return item;
                }
            };

            angular.forEach(items, function(item) {
                var valueToCheck, isDuplicate = false;

                for (var i = 0; i < newItems.length; i++) {
                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    newItems.push(item);
                }

            });
            items = newItems;

            return items;

        }




        return Factory;
    })
    .factory('Loaders', function($timeout) {

        function Factory($scope, $timeout) {

            this.$scope = $scope;
            this.$timeout = $timeout;
        };
        Factory.prototype.showActivity = function(msg) {
            $timeout(function() {
                $('#working').foundation('reveal', 'open');
            });
        };
        Factory.prototype.hideActivity = function() {
            $timeout(function() {
                $('#working').foundation('reveal', 'close');
            }, 1000); // message will be visible at least 1 sec
        };
        Factory.prototype.showButton = function(element, msg) {
            $timeout(function(){
                $(element).toggleClass('running').text(msg);    
            });
            
        };
        return Factory;
    });
