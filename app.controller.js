"use strict";

function TodoController ($scope) {
  $scope.todos = [
    {
      text:'Walk the Dog',
      done: false
    },
    {
      text:'Go to the store',
      done: true
    },
    {
      text:'Get gas',
      done: false
    },
    {
      text:'Wash the car',
      done: false
    }
  ];
  
  $scope.save = function () {
    let taskName = $scope.taskName;
    let done = $scope.done;
    let index = $scope.index;
    
    if (!taskName == undefined || !taskName == '') {
      if (!index == '') {
        $scope.todos.splice(index, 1, {
          text: taskName,
          done: done
        });
      } else {
        $scope.todos.push({
          text: taskName,
          done: false
        });
      };
      
      $scope.taskName = $scope.done = $scope.index = '';
    };
  };
  
  
  $scope.remaining = function() {
    let count = 0;
    
    angular.forEach($scope.todos, function(task) {
      count += task.done ? 0 : 1;
    });
    
    return count;
  };
  
  $scope.clear = function () {
    let todos = $scope.todos;
    
    $scope.todos = [];
    
    angular.forEach(todos, function(task) {
      if (!task.done) $scope.todos.push(task);
    });
  };
}

angular
.module("todoApp")
.controller("TodoController", TodoController);