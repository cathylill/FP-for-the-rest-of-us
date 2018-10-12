// Mix n match filters
function byUser (user, todoList) {
  return todoList.filter(function (todo) {
    return todo.user === user;
  })  
}

function byDueToday (todoList) {
  let today = new Date(dateToday);
  
  return todoList.filter(function (todo) {
    let due = new Date(todo.due);
    return due.toDateString() === 
      today.toDateString();
  })
}

function byDone (todoList) {
  return todoList.filter(function (todo) {
    return todo.done === false;
  })
}
