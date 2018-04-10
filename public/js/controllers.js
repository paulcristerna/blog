// Controllers.

app.controller('postsCtrl', function($http) 
{
    var posts = this;

    // Posts list.

    $http.get('/posts').success(function(data) 
    {
        posts.list = data;
    });
});

app.controller('postCtrl', function($http,$routeParams) 
{
    var id = $routeParams.id;
    var post = this;

    $http.get('post/'+id).success(function(data) 
    {
        post.content = data;
    });
});

app.controller('deleteCtrl', function($http,$routeParams) 
{
    var id = $routeParams.id;
    var posts = this;

    $http.delete('delete/'+id).success(function(data) 
    {
        $location.path('/')
    });
});