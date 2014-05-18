'use strict';

angular.module('subconnectApp')
  .controller('MainCtrl', function ($scope, $firebase, Sov, $filter) {

// Make scope variables
///////////////////////////

    //For handling math in view
    $scope.Math = window.Math;

    //Get's subs from Service
    var subs = Sov.getSoV();
    subs.$bind($scope, 'subs');

// Firebase
///////////////////////////

    var sovRef = new Firebase('https://subconnect.firebaseio.com/');
    // Automatically syncs everywhere in realtime
    $scope.sov = $firebase(sovRef);
    

// Creating Subs
///////////////////////////

    // function for creating new object
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

     // function for deleting object
    $scope.subDelete = function (sub){
      var deleteRef = new Firebase('https://subconnect.firebaseio.com/'+sub.$id);
      deleteRef.remove();
      // console.log(sub.$id);
      // sub.set(null);
      // var deleteSub = sovRef+'/'+sub.$id;
      // console.log(deleteSub);
      // deleteSub.remove(onComplete);
    }

// Watch Inputs
///////////////////////////

   $scope.$watch('[myproperty1,myproperty2,myproperty3]',function(nv,ov){
    consol.log('you filled the 3 inputs')
    });

  });

