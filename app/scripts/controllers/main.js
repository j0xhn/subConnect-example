'use strict';

angular.module('subconnectApp')
  .controller('MainCtrl', function ($scope, $firebase) {
///////////////////////////
// MAKE SCOPE VARIABLES
///////////////////////////
    var test = 'My Angular Is Working';
    $scope.test = test;
///////////////////////////
// Firebase
///////////////////////////
    var sovRef = new Firebase('https://subconnect.firebaseio.com/');
    // Automatically syncs everywhere in realtime
    $scope.sov = $firebase(sovRef);
    // function for pushing new object
    $scope.subCreate = function (categoryFromView, subcategoryFromView, amountFromView, acceptedValue, commentFromView){
      sovRef.push({
             "category" : '',
             "subcategory":'',
             "amount": 100,
             "accepted": 0,
             "comments" : ['first comment','second comment','third comment']
      });
}


  });

