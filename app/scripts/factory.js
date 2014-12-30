
fantasyApp.service('playerApi', function($http) {
delete $http.defaults.headers.common['X-Requested-With'];
this.fetchApi = function(callbackFunc) {
    $http({
        method: 'GET',
        url: '/ffb.json'
     }).success(function(data){
        // With the data succesfully returned, call our callback
        callbackFunc(data);
    }).error(function(){
        console.log("error getting user api data");
    });
 }
});