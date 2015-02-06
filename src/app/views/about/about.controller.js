(function(){
    'use strict';
    
    angular
        .module( 'app.views.about.controller', ['ui.bootstrap', 'app.config'])    
        .controller( 'AboutController', AboutController);

    function AboutController( appName, appVersion) {
        this.appName = appName;
        this.appVersion = appVersion;
    }

})();
