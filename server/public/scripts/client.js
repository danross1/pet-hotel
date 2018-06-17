const app = angular.module('HotelApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/dashboard.html',
        controller: 'DashboardController as vm'
    }).when('/owner', {
        templateUrl: '/views/owner.html',
        controller: 'OwnerController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
}]);
