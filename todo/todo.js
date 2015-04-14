var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoListController', function() {
  var todoList = this;

  todoList.todos = [
    {text:'learn angular',        done:true},
    {text:'stuff',                done:true},
    {text:'build an angular app', done:false}
  ];

  // console.log(todoList.todos);

  todoList.todos_archive = [];

  todoList.addTodo = function() {
    todoList.todos.push({text:todoList.todoText, done:false});
    todoList.todoText = '';
  };

  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = function() {
    // Archive old
    angular.forEach(todoList.todos, function(todo){
      if(todo.done) todoList.todos_archive.push(todo);
    });
    
    // Create temp and push remaining to new array
    var oldTodos    = todoList.todos;
    todoList.todos  = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) todoList.todos.push(todo);
    });
    // console.log(todoList.todos);
    // console.log(todoList.todos_archive);
  };

  todoList.unarchive = function() {
    if(todoList.todos_archive.length > 0) {
      angular.forEach(todoList.todos_archive, function(todo) {
        todoList.todos.push(todo);
        var index = todoList.todos_archive.indexOf(todo);
        if (index > -1) {
            todoList.todos_archive.splice(index, 1);
        }
      });
      // console.log(todoList.todos);
      // console.log(todoList.todos);
      // console.log(todoList.todos_archive);
    }
  };



});
