(function(){
    'use strict';
    
    angular
    .module('fjs')
    .controller('FirstController4Win', firstController4Win);
    
    firstController4Win.$inject = ['$scope'];
    
    function firstController4Win ($scope) {
        // Variable scopée
        $scope.var1 = 'Je suis dans mon controller :)';
        // Variable non scopée, c'est une variable classiquement déclarée en Javascript
        var var2 = 'Et moi pas visible dans la vue car je ne suis pas dans le scope';
    
        // BONUS
        $scope.$watch('var1', function() {
           console.log('La variable var1 a envoyé un évenement de modification d\'état'); 
        });
    }
    
})();