app.factory('weatherAPI', ['$http', function($http) {

  return {
    getLocation: function () {
      return $http.get("http://ip-api.com/json");
    },

    getWeather: function (city) {
      return $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=10398681c88c43794ad6ed5b9366ca29&units=metric");
    }

  };

}]);
