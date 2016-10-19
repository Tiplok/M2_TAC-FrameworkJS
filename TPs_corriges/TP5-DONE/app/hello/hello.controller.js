(function(){
    'use strict';
    
    angular
    .module('fjs.hello')
    .controller('HelloController', helloController);
    
    helloController.$inject = ['$filter'];
    
    function helloController($filter) {
        var vm = this;
        
        vm.message = "Hello World !!";
        vm.messageEnMajuscule = $filter('uppercase')(vm.message);
        
        // BONUS
        vm.date = new Date();
        vm.price = 1.2376898;
    }
    
})();