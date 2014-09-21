angular.module('ipa.controllers', ['mm.foundation', 'ui.filters'])
    .controller('IpaController', function($scope, $rootScope, Data) {
        $scope.ipaItem = Data.ipaItem;
        $scope.usedPhonemes = Data.usedPhonemes;
        $scope.phonemeList = $scope.usedPhonemes[$scope.ipaItem.item.toLowerCase()];
        $scope.checkbox = {
            '1': {
                phone: 'p',
                selected: false
            },
            '2': {
                phone: 'b',
                selected: false
            },
            '3': {
                phone: 't',
                selected: false
            },
            '4': {
                phone: 'd',
                selected: false
            },
            '5': {
                phone: 'ʈ',
                selected: false
            },
            '6': {
                phone: 'ɖ',
                selected: false
            },
            '7': {
                phone: 'c',
                selected: false
            },
            '8': {
                phone: 'ɟ',
                selected: false
            },
            '9': {
                phone: 'k',
                selected: false
            },
            '10': {
                phone: 'g',
                selected: false
            },
            '11': {
                phone: 'q',
                selected: false
            },
            '12': {
                phone: 'ɢ',
                selected: false
            },
            '13': {
                phone: 'ʔ',
                selected: false
            },
            '14': {
                phone: 'm',
                selected: false
            },
            '15': {
                phone: 'ɱ',
                selected: false
            },
            '16': {
                phone: 'n',
                selected: false
            },
            '17': {
                phone: 'ɳ',
                selected: false
            },
            '18': {
                phone: 'ɲ',
                selected: false
            },
            '19': {
                phone: 'ŋ',
                selected: false
            },
            '20': {
                phone: 'ɴ',
                selected: false
            },
            '21': {
                phone: 'ʙ',
                selected: false
            },
            '22': {
                phone: 'r',
                selected: false
            },
            '23': {
                phone: 'ʀ',
                selected: false
            },
            '24': {
                phone: 'ɾ',
                selected: false
            },
            '25': {
                phone: 'ɽ',
                selected: false
            },
            '26': {
                phone: 'ɸ',
                selected: false
            },
            '27': {
                phone: 'β',
                selected: false
            },
            '28': {
                phone: 'f',
                selected: false
            },
            '29': {
                phone: 'v',
                selected: false
            },
            '30': {
                phone: 'θ',
                selected: false
            },
            '31': {
                phone: 'ð',
                selected: false
            },
            '32': {
                phone: 's',
                selected: false
            },
            '33': {
                phone: 'z',
                selected: false
            },
            '34': {
                phone: 'ʃ',
                selected: false
            },
            '35': {
                phone: 'ʒ',
                selected: false
            },
            '36': {
                phone: 'ʂ',
                selected: false
            },
            '37': {
                phone: 'ʐ',
                selected: false
            },
            '38': {
                phone: 'ç',
                selected: false
            },
            '39': {
                phone: 'ʝ',
                selected: false
            },
            '40': {
                phone: 'x',
                selected: false
            },
            '41': {
                phone: 'ɣ',
                selected: false
            },
            '42': {
                phone: 'χ',
                selected: false
            },
            '43': {
                phone: 'ʁ',
                selected: false
            },
            '44': {
                phone: 'ħ',
                selected: false
            },
            '45': {
                phone: 'ʕ',
                selected: false
            },
            '46': {
                phone: 'h',
                selected: false
            },
            '47': {
                phone: 'ɦ',
                selected: false
            },
            '48': {
                phone: 'ɬ',
                selected: false
            },
            '49': {
                phone: 'ɮ',
                selected: false
            },
            '50': {
                phone: 'ʋ',
                selected: false
            },
            '51': {
                phone: 'ɹ',
                selected: false
            },
            '52': {
                phone: 'ɻ',
                selected: false
            },
            '53': {
                phone: 'j',
                selected: false
            },
            '54': {
                phone: 'ɰ',
                selected: false
            },
            '55': {
                phone: 'l',
                selected: false
            },
            '56': {
                phone: 'ɭ',
                selected: false
            },
            '57': {
                phone: 'ʎ',
                selected: false
            },
            '58': {
                phone: 'ʟ',
                selected: false
            },
            '59': {
                phone: 'ʘ',
                selected: false
            },
            '60': {
                phone: 'ɓ',
                selected: false
            },
            '61': {
                phone: 'pʼ',
                selected: false
            },
            '62': {
                phone: 'ǀ',
                selected: false
            },
            '63': {
                phone: 'ɗ',
                selected: false
            },
            '64': {
                phone: 'tʼ',
                selected: false
            },
            '65': {
                phone: 'ǃ',
                selected: false
            },
            '66': {
                phone: 'ʄ',
                selected: false
            },
            '67': {
                phone: 'kʼ',
                selected: false
            },
            '68': {
                phone: 'ǂ',
                selected: false
            },
            '69': {
                phone: 'ɠ',
                selected: false
            },
            '70': {
                phone: 'sʼ',
                selected: false
            },
            '71': {
                phone: 'ǁ',
                selected: false
            },
            '72': {
                phone: 'ʛ',
                selected: false
            },
            '73': {
                phone: 'ʍ',
                selected: false
            },
            '74': {
                phone: 'w',
                selected: false
            },
            '75': {
                phone: 'ɥ',
                selected: false
            },
            '76': {
                phone: 'ʜ',
                selected: false
            },
            '77': {
                phone: 'ʢ',
                selected: false
            },
            '78': {
                phone: 'ʡ',
                selected: false
            },
            '79': {
                phone: 'ɕ',
                selected: false
            },
            '80': {
                phone: 'ʑ',
                selected: false
            },
            '81': {
                phone: 'ɺ',
                selected: false
            },
            '82': {
                phone: 'ɧ',
                selected: false
            },
            '83': {
                phone: 't͡s',
                selected: false
            },
            '84': {
                phone: 't͡ʃ',
                selected: false
            },
            '85': {
                phone: 't͡ɕ',
                selected: false
            },
            '86': {
                phone: 'ʈ͡ʂ',
                selected: false
            },
            '87': {
                phone: 'd͡z',
                selected: false
            },
            '88': {
                phone: 'd͡ʒ',
                selected: false
            },
            '89': {
                phone: 'd͡ʑ',
                selected: false
            },
            '90': {
                phone: 'ɖ͡ʐ',
                selected: false
            },
            '91': {
                phone: 'i',
                selected: false
            },
            '92': {
                phone: 'y',
                selected: false
            },
            '93': {
                phone: 'ɨ',
                selected: false
            },
            '94': {
                phone: 'ʉ',
                selected: false
            },
            '95': {
                phone: 'ɯ',
                selected: false
            },
            '96': {
                phone: 'u',
                selected: false
            },
            '97': {
                phone: 'ɪ',
                selected: false
            },
            '98': {
                phone: 'ʏ',
                selected: false
            },
            '99': {
                phone: 'ʊ',
                selected: false
            },
            '100': {
                phone: 'e',
                selected: false
            },
            '101': {
                phone: 'ø',
                selected: false
            },
            '102': {
                phone: 'ɘ',
                selected: false
            },
            '103': {
                phone: 'ɵ',
                selected: false
            },
            '104': {
                phone: 'ɤ',
                selected: false
            },
            '105': {
                phone: 'o',
                selected: false
            },
            '106': {
                phone: 'ə',
                selected: false
            },
            '107': {
                phone: 'ɛ',
                selected: false
            },
            '108': {
                phone: 'œ',
                selected: false
            },
            '109': {
                phone: 'ɜ',
                selected: false
            },
            '110': {
                phone: 'ɞ',
                selected: false
            },
            '111': {
                phone: 'ʌ',
                selected: false
            },
            '112': {
                phone: 'ɔ',
                selected: false
            },
            '113': {
                phone: 'æ',
                selected: false
            },
            '114': {
                phone: 'ɐ',
                selected: false
            },
            '115': {
                phone: 'a',
                selected: false
            },
            '116': {
                phone: 'ɶ',
                selected: false
            },
            '117': {
                phone: 'ɑ',
                selected: false
            },
            '118': {
                phone: 'ɒ',
                selected: false
            },
        };
        //$scope.generator = new Generators($scope);

        $scope.$on("myEvent", function (event, args) {
           $scope.ipaInit();
        });

        $scope.ipaInit = function() {
            $scope.phonemeList = Data.usedPhonemes[$scope.ipaItem.item.toLowerCase()];
            angular.forEach($scope.checkbox, function(i, v) {
                //console.log(i);
                if($scope.phonemeList.indexOf($scope.checkbox[v].phone) != -1) {

                    $scope.checkbox[v].selected = true;
                } else {
                    $scope.checkbox[v].selected = false;
                }
            });
        }

        $scope.ipaChecked = function() {
            $scope.phonemeList = [];
            angular.forEach($scope.checkbox, function(i, v) {
                if($scope.checkbox[v].selected) {
                    //console.log($scope.checkbox[v].phone);
                    $scope.phonemeList.push($scope.checkbox[v].phone);
                }
            });
        }

        $scope.addIPA = function(e) {
            $scope.usedPhonemes[$scope.ipaItem.item.toLowerCase()] = $scope.phonemeList;
            $rootScope.tabs='phonemes';
            Data.ipaItem.item = '';
            Data.ipaItem.title = '';
        }

        $scope.closeIPA = function () {
            $rootScope.tabs='phonemes';
        }
        // $scope.ipaChecked = function() {

        //     $scope.ipa.phonemeList = angular.copy($scope.ipa.checkbox);
        //     console.log($scope.ipa);
        //     // $('#ipaConsonants').find('input[type=checkbox]:checked').each( function(){
        //     //     $scope.ipa.phonemeList.push($(this).val());
        //     // });
        // }
        // $scope.addIPA = function(e, item) {
        //     $scope.ipa.phonemeList = [];
        //     var form = angular.element(e.target);
        //     form.find('input[type=checkbox]:checked').each( function(){
        //         $scope.ipa.phonemeList.push($(this).val());
        //     });
        //     item = item.toLowerCase();
        //     $scope.usedPhonemes[item] = $scope.ipa.phonemeList;
        // }

    });
