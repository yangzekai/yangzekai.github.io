var app = angular.module('aboutApp', []);

app.controller('DescriptionController', function DescriptionController($scope,$interval) {
  var describe = ["Programmer","Christian","Space Enthusiast","Redditor","Gamer","Socialist","Web Developer","Linux Aficionado","Family & Friends Tech Support","D&D Player","Sysadmin"];
  var counter = -1;
  $scope.description = describe[0];
  $interval(function(){
    if(counter < describe.length - 1)
      counter++;
    else
      counter = 0;
    $scope.description = describe[counter];
  }.bind(this), 1000);
});
