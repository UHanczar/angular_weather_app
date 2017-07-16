app.controller('forecastController', ['$scope', '$http', 'forecast', function ($scope, $http, forecast) {

  $scope.Math = window.Math;
  $scope.message = 'I am here!';
  $scope.unitSymbol = ' °C';
  $scope.windSymbol = ' m/s';


  forecast.weather().then(function (info) {
    $scope.data = info;
    console.log(info);
  });

  $http.get('data/weather.json').then(function (dat) {
    $scope.content = dat;

  });

  // forecast.weather().then(function(info) {
  //
  //   $scope.data = info;
  //
  // });












  $scope.changeFormat = function () {
      if($scope.unitSymbol === ' °C') {
         $scope.unitSymbol = ' °F';
        var forTemp = $scope.data.weather.main.temp * 1.8 + 32;
        $scope.data.weather.main.temp = forTemp;
      } else if($scope.unitSymbol === ' °F'){
          $scope.unitSymbol = ' °C';
          var CelTemp = ($scope.data.weather.main.temp - 32) / 1.8;
          $scope.data.weather.main.temp = CelTemp;
      }
  };


}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {}]);



