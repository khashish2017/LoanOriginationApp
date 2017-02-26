(function() {
    'use strict';

    angular
		.module('los')
		.config(stateConfig);
    function stateConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise("/main");
        $stateProvider
    .state('main', {
        url: '',
        views: {
            'Header@': {
                templateUrl: 'app/_layout/header.html'
            },
            'Content@': {
            templateUrl: 'app/_layout/content.html'
            },
            'Footer@': {
            templateUrl: 'app/_layout/footer.html'
        }
        }
    })
    }

})();