function addTask() {
  var taskText = document.getElementById("input-box").value;

  if (taskText.trim() !== "") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.appendChild(document.createTextNode("x"));
    deleteButton.onclick = function () {
      li.remove();
    };
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("input-box").value = "";
  }
}
