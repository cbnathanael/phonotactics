angular.module('phones.controllers', ['mm.foundation', 'ui.filters'])
    .controller('PhonemeController', function($scope, $rootScope, Data) {
        $scope.phonemes = Data.usedPhonemes;
        $scope.ipa = Data.ipaItem;

        $scope.ipaChart = function(e) {
            e = angular.element(e.target);
            var prefix = e.closest('.row').find('.prefix').html();
            prefix = $.parseHTML(prefix.trim());
            Data.ipaItem.item = prefix[0].textContent;
            Data.ipaItem.title = prefix[1].textContent;
            // $scope.ipa.item = item;
            $scope.initIPATab();
            $rootScope.tabs = 'ipa';
        }
        $scope.initIPATab = function(){
           $scope.$broadcast("myEvent", {username: 'foo' });
        };
    });
    // .controller('SyllableController', function($scope, $rootScope, $timeout, Data, Generators, Loaders) {
    //     $scope.syllables = [];
    //     $scope.numberSyllables = 0;
    //     $scope.pageSize = 28;
    //     $scope.currentPage = 0;
    //     $scope.syllableForm = [];

    //     $scope.structure = '(C)V(C)';
    //     $scope.usedPhonemes = Data.usedPhonemes;
    //     $scope.generate = new Generators($scope);
    //     $scope.loader = new Loaders($scope);

    //     //for IPA Table
    //     $scope.ipa = Data.ipaItem;

    //     $scope.numberOfPages = function() {
    //         return Math.ceil($scope.syllables.length / $scope.pageSize);
    //     }
        
        
    //     $scope.createSyllables = function(structure) {
            
    //         $scope.currentPage = 0;
    //         var newSyllables = [];
    //         var finalSyllables = [];
    //         var start = 0;
    //         var end = structure.length;
    //         var required = [];
    //         $.each(structure, function(i,v){
    //             if ( !v.optional) {
    //                 required.push(i);
    //             }
    //         });
    //         //populate with required
    //         finalSyllables.push.apply(finalSyllables, structure[required[0]].items);
    //         newSyllables.push.apply(newSyllables, structure[required[0]].items);
    //         //make our ending groups
    //         for (i = required[0] + 1; i < end; i++) {
    //             if (newSyllables.length < 1) {
    //                 newSyllables = structure[i].items;
    //             } else {
    //                 tempArray = [newSyllables, structure[i].items];
    //                 newSyllables = $scope.generate.allPossibleCases(tempArray);
    //             }

    //             finalSyllables.push.apply(finalSyllables, newSyllables);

    //         }
    //         //clear for opening
    //         newSyllables = [];
    //         for (i = required[0] - 1; i > -1; i--) {
    //             if (newSyllables.length < 1) {
    //                 newSyllables = structure[i].items;
    //             } else {
    //                 tempArray = [newSyllables, structure[i].items];
    //                 newSyllables = $scope.generate.allPossibleCasesInverse(tempArray);
    //             }
    //             //$scope.syllables.push.apply($scope.syllables, newSyllables);
    //         }
    //         tempArray = [finalSyllables, newSyllables];
    //         newSyllables = $scope.generate.allPossibleCasesInverse(tempArray);
    //         finalSyllables.push.apply(finalSyllables, newSyllables);            
    //         finalSyllables = $scope.generate.makeUnique(finalSyllables);
    //         $scope.syllables = [];
    //         $scope.syllables.push.apply($scope.syllables, finalSyllables);
    //         $scope.numberSyllables = $scope.syllables.length;
            

    //         //$scope.generate.hideActivity();
    //         $rootScope.isGen = true;
    //         $rootScope.tabs = 'generated';

    //     };

    //     $scope.parseForm = function(str) {
    //         group = '';
    //         arr = [];
    //         for (i = 0; i < str.length; i++) {
    //             if (str.charAt(i) == '(') {
    //                 i++;
    //                 if (group.length > 0) {
    //                     foo = {
    //                         optional: false,
    //                         items: group
    //                     };
    //                     arr.push(foo);
    //                     group = '';
    //                 }

    //                 while (str.charAt(i) != ')') {
    //                     group += str.charAt(i);
    //                     i++;
    //                 }
    //                 foo = {
    //                     optional: true,
    //                     items: group
    //                 };
    //                 arr.push(foo);
    //                 group = '';
    //             } else {
    //                 group += str.charAt(i);
    //             }
    //         }
    //         if (group.length > 0) {
    //             foo = {
    //                 optional: false,
    //                 items: group
    //             };
    //             arr.push(foo);
    //             group = '';
    //         }
    //         $.each(arr, function(i,v){

    //             v.items = v.items.toLowerCase();
    //             if(v.items.length > 1) {
                   
    //                 thisItem = v.items.split('');
    //                 $.each(thisItem, function(i, v){
    //                     thisItem[i] = $scope.usedPhonemes[v];
    //                 });

    //                 thisItemArray = $scope.generate.allPossibleCases(thisItem);
                    
    //             } else {
    //                 thisItemArray = $scope.usedPhonemes[v.items];
    //             }
    //             v.items = thisItemArray;
    //         });
    //         $scope.syllableForm = arr;
    //     }
        


    //     $scope.generateSyllables = function() {
    //         //$scope.loader.showButton('#generate', 'Generating...');
    //         $scope.loader.showActivity('Generating...');
    //         $timeout(function(){
    //             $scope.parseForm($scope.structure);
    //             $scope.createSyllables($scope.syllableForm);
    //             //$scope.loader.showButton('#generate', 'Generate');
    //         }, 1000);
    //         $scope.loader.hideActivity();
            

    //     }

    //     $scope.ipaChecked = function() {
            
    //         $scope.ipa.phonemeList = angular.copy($scope.ipa.checkbox);
    //         console.log($scope.ipa);
    //         // $('#ipaConsonants').find('input[type=checkbox]:checked').each( function(){
    //         //     $scope.ipa.phonemeList.push($(this).val());
    //         // });
    //     }
    //     $scope.addIPA = function(e, item) {
    //         $scope.ipa.phonemeList = [];
    //         var form = angular.element(e.target);
    //         form.find('input[type=checkbox]:checked').each( function(){
    //             $scope.ipa.phonemeList.push($(this).val());
    //         });
    //         item = item.toLowerCase();
    //         $scope.usedPhonemes[item] = $scope.ipa.phonemeList;
    //     }
    // });
