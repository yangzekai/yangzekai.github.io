var app = angular.module('contactApp', ['vcRecaptcha']);

app.controller('ContactController', function ContactController($scope, $http) {
  $scope.name = "";
  $scope.email = "";
  $scope.words = "";
  $scope.state1 = true;
  $scope.state2 = true;
  $scope.recaptchaResponse = "";

  $scope.submit = function() {
    $scope.state1 = false;
    $scope.state2 = true;
    if($scope.recaptchaResponse == "") {
      $scope.state1 = true;
      $scope.state2 = false;
    }
    else {
      $http.post('http://h313-mailer.herokuapp.com/', JSON.stringify({ 'name':$scope.name, 'email':$scope.email, 'words':$scope.words})).success(function(data){
        $scope.state1 = false;
        $scope.state2 = false;
        console.log("sent!");
      });
    }
  };
});
