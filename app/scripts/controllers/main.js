'use strict';

angular.module('subconnectApp')
  .controller('MainCtrl', function ($scope, $firebase, Sov, $filter) {

// Make scope variables
///////////////////////////
    $scope.Math = window.Math;
    var test = 'My Angular Is Working';
    $scope.test = test;
    $scope.testFunction = function(param){
      console.log(param);
    }
    var subs = Sov.getSoV();
    subs.$bind($scope, 'subs');

// Firebase
///////////////////////////
    var sovRef = new Firebase('https://subconnect.firebaseio.com/');
    // Automatically syncs everywhere in realtime
    $scope.sov = $firebase(sovRef);

// Creating Subs
///////////////////////////
    // function for pushing new object
    $scope.subCreate = function (categoryFromView, subcategoryFromView, amountFromView){
      console.log(categoryFromView);
      sovRef.push({
             "category" : categoryFromView || '',
             "subcategory":subcategoryFromView || '',
             "amount": amountFromView || 0,
             "accepted": '-',
             "comments" : ['first comment','second comment','third comment']
      });
    }

    $scope.subDelete = function (sub){
      var deleteRef = new Firebase('https://subconnect.firebaseio.com/'+sub.$id);
      deleteRef.remove();
      // console.log(sub.$id);
      // sub.set(null);
      // var deleteSub = sovRef+'/'+sub.$id;
      // console.log(deleteSub);
      // deleteSub.remove(onComplete);
    }

// Math for Subtotal
///////////////////////////


  });

