// Routes.

app.config(function($routeProvider) {
  $routeProvider
  	.when('/', {
        templateUrl : 'list.html',
        controller  : 'postsCtrl'
    })
  	.when('/post/:id', {
        templateUrl : 'post.html',
        controller  : 'postCtrl'
    })
    .when('/delete/:id', {
        templateUrl : 'list.html',
        controller  : 'deleteCtrl'
    })
   .otherwise({redirectTo: '/'});
});