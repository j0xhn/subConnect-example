'use strict';

angular.module('subconnectApp')
  .controller('MainCtrl', function ($scope, $firebase, Sov) {
///////////////////////////
// MAKE SCOPE VARIABLES
///////////////////////////
    var test = 'My Angular Is Working';
    $scope.test = test;
    $scope.testFunction = function(param){
      console.log(param);
    }
    var subs = Sov.getSoV();
    subs.$bind($scope, 'subs');
///////////////////////////
// Firebase
///////////////////////////
    var sovRef = new Firebase('https://subconnect.firebaseio.com/');
    // Automatically syncs everywhere in realtime
    $scope.sov = $firebase(sovRef);
///////////////////////////
// Creating Subs
///////////////////////////
    // function for pushing new object
    $scope.subCreate = function (categoryFromView, subcategoryFromView, amountFromView){
      console.log(categoryFromView);
      sovRef.push({
             "category" : categoryFromView || '',
             "subcategory":subcategoryFromView || '',
             "amount": amountFromView || '',
             "accepted": '-',
             "comments" : ['first comment','second comment','third comment']
      });
    }


  });

