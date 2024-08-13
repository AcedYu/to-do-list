// Grab our elements: input tag, button, and list
const input = document.getElementById("todoinput");
const button = document.getElementById("button");
const todolist = document.getElementById("todos");

//Define addItem function
function addItem(e){
  // redundant prevent default not needed but for good measure I put it in there
  e.preventDefault();
  
  // Defining Edge case, if its an empty input it should not add anything
  if (input.value === "") {
    return "Blank Value"
  }
  
  // save input value into a variable (and then clear the input value)
  let todo = input.value;
  input.value = "";
  // create my li tag
  let li = document.createElement("li");
  li.innerHTML = todo;

  // Create delete button for each of our li elements
  let deletebutton = document.createElement("button");
  deletebutton.id = "delete-button";
  deletebutton.innerHTML = "X";
  deletebutton.classList.add("btn-danger");
  deletebutton.classList.add("btn");

  // add functionality to our delete button
  deletebutton.addEventListener("click", function(){
    li.remove();
  })
  
  // append delete button to the li element
  li.append(deletebutton);
  
  // append our new list item to our list
  todolist.append(li);
  return "success";
}

//Define event listener for button press
button.addEventListener("click", addItem)

// This is the other way to write out the classic addEventListener
// button.addEventListener("click", function() {
//   INSERT FUNCTION STUFFS HERE
// })