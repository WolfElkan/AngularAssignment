    /* our angular app modularize, with config */
    // var app = require(['config'])
     var app = angular.module('app', ['ngRoute']);
    /* configuration for angular route */
    app.config(function($routeProvider) {
      $routeProvider.when('/index', {
        templateUrl: 'partials/index.html',
        controller: 'indexController'
      })
      $routeProvider.when('/edit/:id', {
        templateUrl: 'partials/edit.html',
        controller: 'editController',
        controllerAs: 'eC'
      })
      $routeProvider.when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'newController',
      })
      $routeProvider.otherwise({
          redirectTo: '/index'
        });
    });
