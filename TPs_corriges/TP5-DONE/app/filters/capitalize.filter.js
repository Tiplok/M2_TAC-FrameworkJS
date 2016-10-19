(function(){
    'use strict';
    
    angular
    .module('fjs.filters')
    .filter('capitalize', capitalizeFilter);
    
    function capitalizeFilter() {
        return function(input) {
            var result = "";
            
            result = input.substring(0, 1).toUpperCase() + input.substring(1);
            
            return result;
        };
    }
    
})();