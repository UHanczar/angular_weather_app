app.factory('forecast', ['$http', function($http) {

  var apiKey = '10398681c88c43794ad6ed5b9366ca29';
  var lat = 0;
  var lon = 0;
  var units = 'metric';

  return {
    ip: function () {
      return $http.get('http://ip-api.com/json');
    },

    openWeatherData: function () {
      return $http.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=" + units + "&appid=" + apiKey);
    },

    weather: function () {
      var self = this;

      return this.ip().then(function (ipInfo) {
        return self.openWeatherData()
                    .then(function (weather) {
                      return {
                        ipInfo: ipInfo.data,
                        weather: weather.data
                      };
                    });
      });
    }
  };

}]);
