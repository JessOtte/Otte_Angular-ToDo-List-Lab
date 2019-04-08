"use strict";

function TodoController ($scope) {
  $scope.todos = [
    {
      text:'Walk the Dog',
      completed: false
    },
    {
      text:'Go to the store',
      completed: true
    },
    {
      text:'Get gas',
      completed: false
    },
    {
      text:'Wash the car',
      completed: false
    }
  ];
  
  $scope.save = function () {
    let taskName = $scope.taskName;
    let completed = $scope.completed;
    let index = $scope.index;
    
    if (!taskName == undefined || !taskName == '') {
      if (!index == '') {
        $scope.todos.splice(index, 1, {
          text: taskName,
          completed: completed
        });
      } else {
        $scope.todos.push({
          text: taskName,
          completed: false
        });
      };
      
      $scope.taskName = $scope.completed = $scope.index = '';
    };
  };
  
  
  $scope.remaining = function() {
    let count = 0;
    
    angular.forEach($scope.todos, function(task) {
      count += task.completed ? 0 : 1;
    });
    
    return count;
  };
  
  $scope.clear = function () {
    let todos = $scope.todos;
    
    $scope.todos = [];
    
    angular.forEach(todos, function(task) {
      if (!task.completed) $scope.todos.push(task);
    });
  };
}

angular
.module("todoApp")
.controller("TodoController", TodoController);