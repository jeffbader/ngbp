(function(){
    'use strict';
    
    angular
        .module( 'app.views.about.routes', ['ui.router'])
        .config(initRoutes);
        
    function initRoutes( $stateProvider ) {
        $stateProvider.state( 'about', {
            url: '/about',
            views: {
                'main': {
                    controller: 'AboutController',
                    templateUrl: 'views/about/about.tpl.html'
                }
            },
            data:{ pageTitle: 'What is It?' }
        });
    }
})();
