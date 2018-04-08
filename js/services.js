'use strict';

angular.module('yogaStudioApp')
    .service('newsFactory', function () {
        var news = [{
                date: 'January 2018',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sollicitudin massa. Praesent ullamcorper velit vitae arcu eleifend, eget blandit risus lacinia. Morbi ac elit ipsum. Vestibulum auctor dolor et pulvinar interdum. Sed facilisis facilisis velit quis pulvinar. Vivamus volutpat, tellus et consectetur euismod, nisl diam ultrices enim, in porta magna leo sit amet nunc.',
                event_type: 'newsletter'
                },
            {
                date: 'December 2017',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sollicitudin massa. Praesent ullamcorper velit vitae arcu eleifend, eget blandit risus lacinia. Morbi ac elit ipsum. Vestibulum auctor dolor et pulvinar interdum. Sed facilisis facilisis velit quis pulvinar. Vivamus volutpat, tellus et consectetur euismod, nisl diam ultrices enim, in porta magna leo sit amet nunc.',
                event_type: 'newsletter'
                },
            {
                date: 'November 2017',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sollicitudin massa. Praesent ullamcorper velit vitae arcu eleifend, eget blandit risus lacinia. Morbi ac elit ipsum. Vestibulum auctor dolor et pulvinar interdum. Sed facilisis facilisis velit quis pulvinar. Vivamus volutpat, tellus et consectetur euismod, nisl diam ultrices enim, in porta magna leo sit amet nunc.',
                event_type: 'newsletter'
                },
            {
                date: 'October 2017',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sollicitudin massa. Praesent ullamcorper velit vitae arcu eleifend, eget blandit risus lacinia. Morbi ac elit ipsum. Vestibulum auctor dolor et pulvinar interdum. Sed facilisis facilisis velit quis pulvinar. Vivamus volutpat, tellus et consectetur euismod, nisl diam ultrices enim, in porta magna leo sit amet nunc.',
                event_type: 'newsletter'
                }
            ];
        this.getNews = function () {
            return news;
        };
        this.getOneNews = function (index) {
            return news[index];
        }
    })
    .service('teamFactory', function () {
        var team = [{
                firstName: 'Laura',
                lastName: 'Ashley',
                qualification: 'Certified Yoga teacher and specialized in Surya Namaskar &amp; Meditiation',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
            {
                firstName: 'Courtney',
                lastName: 'Blake',
                qualification: 'Certified Yoga Teacher and specialized in Prenatal Yoga',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
            {
                firstName: 'Tara',
                lastName: 'Nelson',
                qualification: 'Certified Theraputic Yoga Teacher',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
            {
                firstName: 'Necolous',
                lastName: 'Cage',
                qualification: 'Certified Yoga Teacher and specialized in Ashtanga Yoga',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }

            ];
        this.getTeam = function () {
            return team;
        };
        this.getTeamMember = function (index) {
            return team[index];
        };
        this.checkIndex = function (index) {
            if (index % 2 == 0)
                return true;
            else
                return false;
        }
    })
    .service('passesFactory', function () {
        var passes = [{
                id: '1',
                type: 'dropIn',
                name: 'Single Drop-In',
                price: '$15',
                valuepack: 'false',
                gst: 'GST included',
                terms: 'Pass is not refundable or transferable'
        },
            {
                id: '2',
                type: 'dropIn',
                name: '10 Times Pass',
                price: '$135',
                valuepack: 'false',
                gst: 'GST included',
                terms: 'Pass is not refundable or transferable'
        },
            {
                id: '3',
                type: 'dropIn',
                name: '20 Times Pass',
                price: '$275',
                valuepack: 'false',
                gst: 'GST included',
                terms: 'Pass is not refundable or transferable'
        },
            {
                id: '4',
                type: 'membership',
                name: 'Monthly Membership',
                price: '$100',
                valuepack: 'false',
                gst: 'GST included',
                terms: 'Pass is not refundable or transferable'
        },
            {
                id: '5',
                type: 'membership',
                name: '3 months unlimited',
                price: '$350',
                valuepack: 'true',
                gst: 'GST included',
                terms: 'Pass is not refundable or transferable'
        },
            {
                id: '6',
                type: 'membership',
                name: '6 Months membership',
                price: '$650',
                valuepack: 'false',
                gst: 'GST included',
                terms: 'Pass is not refundable or transferable'
        },
            {
                id: '7',
                type: 'membership',
                name: 'Long-Term Membership',
                price: '$1000',
                valuepack: 'false',
                gst: 'GST included',
                terms: 'Pass is not refundable or transferable'
        }
        ];
        this.getPasses = function () {
            return passes;
        };
        this.getPass = function (index) {
            return passes[index];
        }
    })
    .service('galleryFactory', function () {
        var pics = [
            {
                id: '1',
                name: 'Inside Studio 1',
                url: 'http://placehold.it/400x300'
            },
            {
                id: '2',
                name: 'Inside Studio 2',
                url: 'http://placehold.it/400x300'
            },
            {
                id: '3',
                name: 'Inside Studio 3',
                url: 'http://placehold.it/400x300'
            },
            {
                id: '4',
                name: 'Inside Studio 4',
                url: 'http://placehold.it/400x300'
            },
            {
                id: '5',
                name: 'Inside Studio 5',
                url: 'http://placehold.it/400x300'
            },
            {
                id: '6',
                name: 'Inside Studio 6',
                url: 'http://placehold.it/400x300'
            },
            {
                id: '7',
                name: 'Inside Studio 7',
                url: 'http://placehold.it/400x300'
            },
            {
                id: '8',
                name: 'Inside Studio 8',
                url: 'http://placehold.it/400x300'
            }];
        this.getPics = function () {
            return pics;
        };
        this.getOnePic = function (index) {
            return pics[index];
        }
    })
    .service('testimonyFactory', function () {
        var testimonials = [
            {
                id: '1',
                username: 'Jessica',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non libero ipsum. Donec iaculis eu diam ac cursus. Fusce posuere eros eget metus iaculis, in consequat nisi mattis. Integer euismod mi enim, sed vestibulum erat tincidunt eu. Pellentesque porta congue tincidunt. Proin ex justo, scelerisque sit amet est at, dictum posuere nibh. In in accumsan sapien.'
            },
            {
                id: '2',
                username: 'Anonymous',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non libero ipsum. Donec iaculis eu diam ac cursus. Fusce posuere eros eget metus iaculis, in consequat nisi mattis. Integer euismod mi enim, sed vestibulum erat tincidunt eu. Pellentesque porta congue tincidunt. Proin ex justo, scelerisque sit amet est at, dictum posuere nibh. In in accumsan sapien.'
            },
            {
                id: '3',
                username: 'Matt',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non libero ipsum. Donec iaculis eu diam ac cursus. Fusce posuere eros eget metus iaculis, in consequat nisi mattis. Integer euismod mi enim, sed vestibulum erat tincidunt eu. Pellentesque porta congue tincidunt. Proin ex justo, scelerisque sit amet est at, dictum posuere nibh. In in accumsan sapien.'
            },
            {
                id: '4',
                username: 'Lindsy',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non libero ipsum. Donec iaculis eu diam ac cursus. Fusce posuere eros eget metus iaculis, in consequat nisi mattis. Integer euismod mi enim, sed vestibulum erat tincidunt eu. Pellentesque porta congue tincidunt. Proin ex justo, scelerisque sit amet est at, dictum posuere nibh. In in accumsan sapien.'
            }];
        this.getTestimony = function () {
            return testimonials;
        };
        this.getOneTestimony = function (index) {
            return testimonials[index];
        }
    })
    .service('indexFactory', function ($location) {
        // var lpath === ;
        this.getLPath = function () {
            //alert(lpath);
            var v = lpath.search("home");
            // alert(v);
            return lpath === $location.path();

        }


    });
