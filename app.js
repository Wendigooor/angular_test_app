(function(){    

  angular.module('products', []);
  angular.module('testApp', ['ui.router', 'ngResource', 'products']);

  angular.module('testApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('products', {
          abstract: true,
          template: '<ui-view/>'
        })
          .state('products.list', {
            url: '/',
            templateUrl: 'views/products/index.html',
            controller: 'productsController'
          })
          .state('products.new', {
            url: '/products/new',
            templateUrl: 'views/products/new.html',
            controller: 'productsNewController'
          })
          .state('products.show', {
            url: '/products/:id',
            templateUrl: 'views/products/show.html',
            controller: 'productsShowController'
          })
          .state('products.edit', {
            url: '/products/:id/edit',
            templateUrl: 'views/products/edit.html',
            controller: 'productsEditController'
          }
        );
    }
  ])
  .run(function($state, $rootScope) {
    $rootScope.products = products;
    $rootScope.maxProductId = $rootScope.products.length;
  });

  products = [
    {id: 1, name: "qwe", description: "desc1", price: 10.1, comments: []},
    {id: 2, name: "ewq", description: "desc2", price: 112.1, comments: []},
    {id: 3, name: "123321", description: "desc3", price: 133.1, comments: []}
  ]

})(); 
