'use strict';

angular.module('subconnectApp')
  .filter('sumByKey', function () {
    return function (data, key) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
            return 0;
        }
        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            var amount = parseInt(data[i][key]);
            if (amount) {
               sum += amount; 
            } 
        }
        return sum;
    };
  });
