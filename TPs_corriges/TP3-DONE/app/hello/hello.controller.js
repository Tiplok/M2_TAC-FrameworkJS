(function(){
    'use strict';
    
    angular
    .module('fjs.hello')
    .controller('HelloController', helloController);
    
    function helloController() {
        var vm = this;
        
        vm.message = "Hello World !!";
    }
    
})();