'use strict';

angular.module('subconnectApp').factory('Sov', function Sov($q, $firebase) {
  var deferred = $q.defer();
  var FBURL = 'https://subconnect.firebaseio.com/';
///////////////////////////
//get data from Firebase
///////////////////////////
  return {
      getSoV: function () {
        var ref = new Firebase(FBURL);
        console.log('I made it inside');
        return $firebase(ref);
      }
    };
  return deferred.promise;
});

