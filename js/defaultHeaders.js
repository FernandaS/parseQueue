var app = angular.module('parseQ');

    app.factory('httpRequestInterceptor', function () {
      return {
        request: function (config) {
          config.headers = {'X-Parse-Application-Id': 'RzMpwNokG1f8U9drTlUPr89ulVnKblO75A97eYEz', 'X-Parse-REST-API-Key': 'SIwH5feknr7eg75eAY2d2bheq7DdXcwq3lUixQlo'}
          return config;
        }
      };
    });