(function(){
	'use strict';

	angular
		.module( 'app.views.home.controller', ['app.config'])
		.controller( 'HomeController', HomeController);
		
		function HomeController(appName ) {
            this.appName = appName;
		}
		
})();

