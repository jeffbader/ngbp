(function(){
    'use strict';

    angular
        .module( 'app.views.home.routes', [
            'ui.router'
        ])

        .config(initRoutes);

        function initRoutes( $stateProvider ) {
            $stateProvider.state( 'home', {
                url: '/home',
                views: {
                    'main': {
                        controller: 'HomeController',
                        templateUrl: 'views/home/home.tpl.html'
                    }
                },
                data:{ pageTitle: 'Home' }
            });
        }
})();

