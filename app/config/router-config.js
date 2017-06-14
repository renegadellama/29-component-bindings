'use strict';

module.exports = ['$stateProvider', '$urlServiceProvider', function($stateProvider, $urlServiceProvider){
  $urlServiceProvider.rules.when('', '/join#signup');
  $urlServiceProvider.rules.when('/', '/join#signup');
  $urlServiceProvider.rules.when('/signup', '/join#signup');
  $urlServiceProvider.rules.when('/login', '/join#login');

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'landing',
      url: '/join',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl'
    },
    // {
    //   name: 'gallery',
    //   url: '/gallery',
    //   template: require('../view/gallery/gallery-item.html'),
    //   controller: 'GalleryController',
    //   controllerAs: 'galleryCtrl'
    // }
  ];

  routes.forEach($stateProvider.state);
}];
