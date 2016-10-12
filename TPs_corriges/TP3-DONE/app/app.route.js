(function(){
    'use strict';
    
    angular
    .module('fjs')
    .config(routeGlobal);
    
    routeGlobal.$inject = ['$routeProvider'];
    
    function routeGlobal($routeProvider) {
        // BONUS
        $routeProvider
        .otherwise({
            redirectTo: '/'
        });
    }
    
})();