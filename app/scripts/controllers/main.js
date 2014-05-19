'use strict';

angular.module('subconnectApp')
  .controller('MainCtrl', function ($q, $scope, $firebase, Sov, $filter) {

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

      sovRef.push({
         "category" : categoryFromView || '',
         "subcategory":subcategoryFromView || '',
         "amount": amountFromView || '',
         "accepted": '-',
         "comments" : ['first comment','second comment','third comment']
      })
      // DISABLED BECAUSE RAN OUT OF TIME TRYING TO FIGURE OUT FIREBASE PROMISES
      // sovRef.once("value", function(snap){
      //   $( "input[name='amount']:last" ).css({ backgroundColor: "yellow", fontWeight: "bolder" });
      // })
      // Dirty Hack // ran out of time so had to implement to meet deadline 
      var selectLastInput = function(){
        $( "input[name='amount']:last" ).focus();
      };
      setTimeout(function(){selectLastInput()}, 50);  
    }

     // function for deleting object
    $scope.subDelete = function (sub){
      var deleteRef = new Firebase('https://subconnect.firebaseio.com/'+sub.$id);
      deleteRef.remove();
    }

// Watch Inputs of Last table row
///////////////////////////

   $("#amountInput").on("focus", function(){
    console.log('you changed input value');
    if( document.getElementById('categoryInput').value || document.getElementById('subCategoryInput').value ) {
            $scope.subCreate($scope.categoryFromView, $scope.subCategoryFromView, $scope.amountFromView);
      }
    $scope.categoryFromView = '';
    $scope.subCategoryFromView ='';
    $scope.amountFromView = '';  
  
    });

  });

