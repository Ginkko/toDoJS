var tasks = [];
var index = 0;
//jQuery


$( document ).ready(function() {

  $("form#addTask").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    $("input#name").val('');
    var newTask = {name: name, isComplete: false}
    tasks.push(newTask);
    displayTasks();
  });

  $("ul#toDo").on('click', '.glyphicon-ok', function() {
    index = $(this).attr("id");
    tasks[index].isComplete = true;
    displayTasks();
  });

  $("ul#complete").on('click', '.glyphicon-ok', function() {
    index = $(this).attr("id");
    tasks[index].isComplete = false;
    displayTasks();
  });

  var displayTasks = function() {
    $("ul#complete").empty();
    $("ul#toDo").empty();
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      var li = "<li>" + "<span id='" + i + "' class='glyphicon glyphicon-ok' aria-hidden='true'></span>" + " "+ task.name + "</li>"
      if (task.isComplete) {
        $("ul#complete").append(li);
      } else {
        $("ul#toDo").append(li);
      }
    };
  };



});
