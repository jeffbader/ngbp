(function(){
	'use strict';
	
	angular.module( 'app.config', [])

		.constant('appName', 'MyApp')
		.constant('appVersion', '1.0.0')
		.run( initApplication);
		
		function initApplication () {
		}
})();

