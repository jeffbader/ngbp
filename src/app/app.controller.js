(function(){
    'use strict';
    
    angular
        .module( 'app.controller', ['app.config'])
        .controller( 'AppController', AppController);
        
        function AppController ( $scope, $location,  appName, appVersion) {
            $scope.appName = appName;
            $scope.appVersion = appVersion;
            
            $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                if ( angular.isDefined( toState.data.pageTitle ) ) {
                    $scope.pageTitle = toState.data.pageTitle + ' | ' + appName ;
                }
            });
        }
})();

