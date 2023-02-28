var buttonElt = document.querySelector("#button");
var inputElt = document.querySelector("#inp");
var bottomElt = document.querySelector("#bottom");

var toDos = [];


if (localStorage.getItem('toDos')) {
  toDos = JSON.parse(localStorage.getItem('toDos'));
}
toDos.forEach(x => createTodo(x.txt, x.isCrossed));


buttonElt.addEventListener("click", function(e) {
  e.preventDefault();
  var inputVal = inputElt.value;
  if (inputVal.length > 0) {
    createTodo(inputVal);
    toDos.push({txt: inputVal, isCrossed: false});
    localStorage.setItem('toDos', JSON.stringify(toDos));
    inputElt.value = "";
  }
});

function createTodo(txt, isCrossed) {
  var todoElt = document.createElement("div");
  todoElt.classList.add("elt");
  if (isCrossed) todoElt.classList.add("crossed");
  bottomElt.appendChild(todoElt);
  todoElt.addEventListener("click", crossTodo);
  
  var textElt = document.createElement("p");
  textElt.classList.add("text");
  textElt.innerText = txt;
  textElt.title = txt;
  todoElt.appendChild(textElt);
  
  var delElt = document.createElement("span");
  delElt.classList.add("del");
  delElt.innerText = "x";
  delElt.title = "Delete element";
  delElt.addEventListener("click", deleteTodo);
  todoElt.appendChild(delElt);
}

function crossTodo(e) {
  e.currentTarget.classList.toggle("crossed");
  var currentIndex = Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget);
  toDos[currentIndex].isCrossed = toDos[currentIndex].isCrossed ? false : true;
  localStorage.setItem('toDos', JSON.stringify(toDos));  
}

function deleteTodo(e) {
  e.stopPropagation();
  var currentElt = e.currentTarget.parentNode;
  var currentIndex = Array.from(currentElt.parentNode.children).indexOf(currentElt);
  toDos = toDos.filter((x, i) => i !== currentIndex);
  localStorage.setItem('toDos', JSON.stringify(toDos));
  currentElt.parentNode.removeEventListener("click", crossTodo);
  currentElt.parentNode.removeChild(currentElt);
}


// Thank You