let myTodos = [];

// Display todays outstanding todos for a particular user
function todaysTodos (user) {
  let today = new Date(dateToday);
  myTodos = [];
  
  for (let i = 0; i < todos.length; i = i + 1) {
    let dueDate = new Date(todos[i].due);
    
    if (
      todos[i].user === user &&
      todos[i].done === false &&
      dueDate.toDateString() === today.toDateString()
    ) {
      myTodos.push(todos[i]);
    }
  }
  
  displayList(myTodos, user);
}

// Pass in the list to work from - more modular
// Decouple from global display list
// Use filter instead of for loop
// Separate list creation from user input and display

function todaysTodosBetter (user, todoList) {
  let today = new Date(dateToday);

  return todoList.filter(function (todo) {
    let dueDate = new Date(todo.due);
    
    return todo.user === user &&
      todo.done === false &&
      dueDate.toDateString() === today.toDateString();
  });
}

function displayTodaysTodos (user, todoList) {
  let myTodos = todaysTodosBetter(user, todoList);
  displayList(myTodos);
};

// todaysTodos is now easily testable because it is self contained and returns a varifiable result.
// Not purely functional but we have applied some basic functional ideas to make our code cleaner and more modular.
