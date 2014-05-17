'use strict';

angular.module('subconnectApp')
  .controller('MainCtrl', function ($scope, $firebase) {
///////////////////////////
// MAKE SCOPE VARIABLES
///////////////////////////
    var test = 'My Angular Is Working';
    $scope.test = test;
    $scope.testFunction = function(param){
      console.log(param);
    }
///////////////////////////
// Firebase
///////////////////////////
    var sovRef = new Firebase('https://subconnect.firebaseio.com/');
    // Automatically syncs everywhere in realtime
    $scope.sov = $firebase(sovRef);
    // function for pushing new object
    $scope.subCreate = function (categoryFromView, subcategoryFromView, amountFromView, acceptedValue, commentFromView){
      console.log(categoryFromView);
      sovRef.push({
             "category" : categoryFromView || '',
             "subcategory":subcategoryFromView || '',
             "amount": amountFromView || '',
             "accepted": 0 || '',
             "comments" : ['first comment','second comment','third comment']
      });
    }


  });

