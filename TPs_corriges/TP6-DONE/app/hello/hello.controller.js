(function(){
    'use strict';
    
    angular
    .module('fjs.hello')
    .controller('HelloController', helloController);
    
    function helloController($filter) {
        var vm = this;
        
        vm.message = "Hello World !!";
        vm.types = [
            {
                name: 'INFO',
                style: {'color':'blue'}
            },
            {
                name: 'DANGER',
                style: {'color':'red'}
            },
            {
                name: 'SUCCES',
                style: {'color':'green'}
            }
        ];
        vm.selectedType = vm.types[0];
        
    }
    
})();