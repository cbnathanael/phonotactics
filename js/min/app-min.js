
(function() {
    var phones = angular.module('phones', ['mm.foundation', 'ui.filters', 'phones.controllers', 'ipa.controllers', 'dirPagination', 'structure.controllers', 'phones.directives', 'phones.services', 'ngAnimate']);
    phones.filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });



})();



//$(document).foundation();