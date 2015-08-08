angular.module('products')

.controller('productsController', [
  '$scope', 'Product', '$rootScope', function($scope, Product, $rootScope) {
    $scope.remove = function(id) {
      $rootScope.products = $rootScope.products.filter(function(e) {
        if (e.id !== id) { return e; }
      });
    }
  }
])

.controller('productsNewController', [
  '$scope', 'Product', '$rootScope', '$state', function($scope, Product, $rootScope, $state) {
    $scope.product = new Product({});
    $scope.createProduct = function() {
      $rootScope.maxProductId += 1;
      $scope.product.id = $rootScope.maxProductId;
      $rootScope.products.push($scope.product);
      $state.go('products.list');
    }
  }
])

.controller('productsEditController', [
  '$scope', '$stateParams', '$state', '$rootScope', function($scope, $stateParams, $state, $rootScope) {
    id = $stateParams.id;
    $scope.product = $rootScope.products.filter(function(e) { if (e.id == id) {return e;} })[0]
    $scope.updateProduct = function() {
      $state.go('products.list');
    }
  }
])

.controller('productsShowController', [
  '$scope', '$stateParams', '$rootScope', function($scope, $stateParams, $rootScope) {
  	id = $stateParams.id;
    $scope.product = $rootScope.products.filter(function(e) { if (e.id == id) {return e;} })[0]
    $scope.comments = $scope.product.comments;    	
    $scope.addComment = function() {
    	$scope.comments.push({body: $scope.comment.body, created_at: Date.now()});
    	$scope.comment.body = "";
    }
  }
]);



/*
angular.module('products')

.controller('productsController', [
  '$scope', 'Product', function($scope, Product) {
    $scope.products = Product.query();
    $scope.remove = function(id) {
      Product.delete({id: id}, function () {
        $scope.products = $scope.products.filter(function(e) {
          if (e.id !== id) { return e; }
        });
      })
    }
  }
])

.controller('productsNewController', [
  '$scope', 'Product', '$window', function($scope, Product, $window) {
    $scope.product = new Product({});
    $scope.createProduct = function() {
      $scope.product.$create( function() {
        $window.location.href = '/';
      })
    }
  }
])

.controller('productsEditController', [
  '$scope', '$stateParams', '$window', 'Product', function($scope, $stateParams, $window, Product) {
    id = $stateParams.id;
    $scope.product = Product.get({id: id});
    $scope.updateProduct = function() {
      $scope.product.$update({id: id}, function() {
        $window.location.href = '/';
      })
    }
  }
])

.controller('productsShowController', [
  '$scope', '$stateParams', 'Product', function($scope, $stateParams, Product) {
    id = $stateParams.id;
    $scope.product = Product.get({id: id}, function() {
      $scope.comments = $scope.product.comments;      
    });
    $scope.addComment = function() {
      Product.add_comment({id: id}, {comment: $scope.comment.body}, function(saved_comment) {
        $scope.comments.push({body: saved_comment.body, created_at: saved_comment.created_at});
        $scope.comment.body = "";
      })
    }
  }
]);
*/
