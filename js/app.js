'use strict';
angular.module('yogaStudioApp', ['ui.router'])
    .config(['$locationProvider', '$urlRouterProvider', '$stateProvider',
             function ($locationProvider, $urlRouterProvider, $stateProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('root', {
                    abstract: true,
                    template: '<div ui-view="header"></div><div ui-view="container"></div>',

                })
                .state('root.home', {
                    url: '/home',
                    views: {
                        header: {
                            templateUrl: "views/header1.html"
                        },
                        container: {
                            templateUrl: "views/home.html",
                            controller: 'NewsController'
                        }
                    }
                })
                .state('root.aboutus', {
                    url: '/aboutus',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: "views/aboutus.html"
                        }
                    }
                })
                .state('root.contactus', {
                    url: '/contactus',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/contactus.html'
                        }
                    }
                })
                .state('root.news', {
                    url: '/news',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/news.html',
                            controller: 'NewsController'
                        }
                    }
                })
                .state('root.passes', {
                    url: '/passes',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/passes.html',
                            controller: 'PassesController'
                        }
                    }

                })
                .state('root.team', {
                    url: '/team',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/ourteam.html',
                            controller: 'TeamController'
                        }
                    }


                })
                .state('root.gallery', {
                    url: '/gallery',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/gallery.html',
                            controller: 'GalleryController'
                        }
                    }
                })
                .state('root.testimonial', {
                    url: '/testimonial',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/testimonial.html',
                            controller: 'TestimonyController'
                        }
                    }
                })
                .state('root.description', {
                    url: '/description',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/description.html'
                        }
                    }
                })
                .state('root.schedule', {
                    url: '/schedule',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/schedule.html'
                        }
                    }
                })
                .state('root.classes', {
                    url: '/classes',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/classes.html'
                        }
                    }
                })
                .state('root.workshop', {
                    url: '/workshop',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/workshop.html'
                        }
                    }
                })
                .state('root.corpclasses', {
                    url: '/corpclasses',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/corpclasses.html'
                        }
                    }
                })
                .state('root.privateclasses', {
                    url: '/privateclasses',
                    views: {
                        header: {
                            templateUrl: "views/header2.html"
                        },
                        container: {
                            templateUrl: 'views/privateclasses.html'
                        }
                    }
                })
             }]);
