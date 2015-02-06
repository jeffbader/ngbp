(function(){
    'use strict';
    
    angular
        .module( 'app.routes', ['ui.router'])
        .config( initRoutes);
        
        function initRoutes ($urlRouterProvider ) {
            $urlRouterProvider.otherwise( '/home' );
        }
})();

