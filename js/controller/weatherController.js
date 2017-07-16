app.controller('forecastController', ['$scope', '$http', 'weatherAPI', function ($scope, $http, weatherAPI) {
  $scope.data = {};

  $scope.changeUnitSymbol = function(){
    if($scope.data.unitSymbol == " °C") {
      $scope.data.unitSymbol = ' °F';
      $scope.data.temp = $scope.data.tempFor;

    } else if($scope.data.unitSymbol == " °F"){
      $scope.data.unitSymbol = ' °C';
      $scope.data.temp = $scope.data.tempCel;
    }
  };

  $scope.showWeather = function() {
    weatherAPI.getLocation().then(function(locInfo) {
      weatherAPI.getWeather(locInfo.data.city).then(function(result) {
        $scope.data.city = locInfo.data.city;
        $scope.data.country = locInfo.data.country;
        $scope.data.temp = Math.round(result.data.main.temp, 2);
        $scope.data.tempCel = Math.round(result.data.main.temp, 2);
        $scope.data.tempFor = Math.round((result.data.main.temp * 9) / 5 + 32);
        $scope.data.unitSymbol = ' °C';
        $scope.data.weatherDesc = result.data.weather[0].description;
        $scope.data.icon = result.data.weather[0].icon;
        $scope.data.time = Date().substr(0, 10);

      });
    });
  };

  $scope.showWeather();


}]);