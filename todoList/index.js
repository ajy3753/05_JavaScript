function addList() {
   const todo = document.getElementById("todo-add");
   if(todo.value !== "") {
      document.querySelector("#todoList").innerHTML += "<div><span>" + todo.value + "</span><button>X</button></div>";
      todo.value = "";
   }
}