(function(){
    'use strict';
    
    angular
        .module( 'app', [
            'templates-app',
            'templates-common',
            'app.config',
            'app.controller',
            'app.routes',
            'app.views.about',
            'app.views.home',
            'ui.router'
        ]);
})();

