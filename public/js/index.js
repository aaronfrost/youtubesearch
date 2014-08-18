angular.module('searchApp', []);

angular.module('searchApp').controller('MainController', function($scope, $http){

  $scope.$watch('searchTerm', function(newValue, oldValue){
    $http.get('/search', {params:{searchTerm: newValue}})
        .then(function(res){
          console.log(res.data);
          $scope.results = res.data;
        });
  });

});