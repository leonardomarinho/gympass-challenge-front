angular.module("gympassChallenge").config(['$routeProvider', '$stateProvider', function($routeProvider, $stateProvider) {  
	$routeProvider.when('/', {
		templateUrl: 'views/main.html',
		controller: 'mainCtrl'
	});

	$routeProvider.when('/dashboard', {
		templateUrl: 'views/dashboard.html',
		controller: 'dashboardCtrl'
	});

	$routeProvider.otherwise({
		redirectTo: '/'
	});

    $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
			controller: 'dashboardCtrl',
			params: {
				data: {}
			}
	});
	
	$stateProvider.state('home', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'mainCtrl'
	});
}]);