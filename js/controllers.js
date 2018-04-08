'use strict';
angular.module('yogaStudioApp')
    .controller('NewsController', ['$scope', 'newsFactory', function ($scope, newsFactory) {
        $scope.news = newsFactory.getNews();
    }])
    .controller('TeamController', ['$scope', 'teamFactory', function ($scope, teamFactory) {
        $scope.team = teamFactory.getTeam();
                             }])
    .controller('PassesController', ['$scope', 'passesFactory', function ($scope, passesFactory) {
        $scope.passes = passesFactory.getPasses();
                             }])
    .controller('GalleryController', ['$scope', 'galleryFactory', function ($scope, galleryFactory) {
        $scope.pics = galleryFactory.getPics();
                             }])
    .controller('TestimonyController', ['$scope', 'testimonyFactory', function ($scope, testimonyFactory) {
        $scope.testimonials = testimonyFactory.getTestimony();
                             }])
    .controller('navController', ['$scope', '$location', function ($scope, $location) {
        $scope.isHome = function () {
            var a = $location.path().search("home");
            alert(a);
            return a;
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }])
