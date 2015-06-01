var tasks = [];

//jQuery


$( document ).ready(function() {

  $("form#addTask").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var newTask = {name: name, isComplete: false}
    tasks.push(newTask);
    displayTasks();
  });


  var displayTasks = function() {
    $("ul#complete").empty();
    $("ul#toDo").empty();
    tasks.forEach(function(task) {

      var li = "<li>" + task.name + "</li>"
      if (task.isComplete) {
        $("ul#complete").append(li);
      } else {
        $("ul#toDo").append(li);
      }
    });
  };



});
