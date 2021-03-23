// TO00BL10-3011 Web sovellusten kehittäminen javascriptillä //
// Javascript tiedosto //

// Haetaan elementit
var btnReset = document.querySelector("#reset");
var btnLast = document.querySelector("#removeLast");
var ulArea = document.querySelector("ol");

// Kuuntelijat
btnReset.addEventListener('click', reset);
btnLast.addEventListener('click', lastItem);

// Lisää nappulan toiminnot, listan luonti ja tallennus local storageen. 
function Funktio() { //
  var item = document.getElementById("todoInput").value;
  if (item == ""  || item.length < 3) { 
    alert("Kirjoitit liian vähän."); 
    console.log("Liian lyhyt teksti.") 
    document.getElementById('todoInput').style.borderColor = "red"; 
  } else { 
    document.getElementById('todoInput').style.borderColor = "green"; 
    console.log("Ok. Lisätty listaan.");
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    var crap = document.getElementById("todoList");
    crap.appendChild(newItem);
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = updateItem.bind(checkBox);
    newItem.appendChild(text);
    newItem.appendChild(checkBox);
    localStorage.setItem('todoInput', ulArea.innerHTML);
    document.getElementById("todoInput").value = "";
    
  }
}
    // Checkboxin toiminnot + tyylimäärittelyjä
    function updateItem() {
      if (this.checked) {
        this.parentNode.style.textDecoration = "line-through";
        this.parentNode.style.opacity = "0.5";
        this.setAttribute("checked", this.checked);
      } else {
        this.parentNode.style.textDecoration = "none";
        this.parentNode.style.opacity = "1";
        this.removeAttribute("checked");
      }
      localStorage.setItem('todoInput', ulArea.innerHTML);
    }
// Ladataan localStoragesta 
function loadTodos() {
  var Todos = localStorage.getItem("todoInput");
  if (Todos != null) {
    var list = document.getElementById('todoList');
    list.innerHTML = Todos;
    var inputs = list.querySelectorAll("input[type=checkbox]");
    for(var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = updateItem.bind(inputs[i]);
    }
  }
}
// Poista nappien toiminnot
function reset() {
  ulArea.innerHTML = "";
}
function lastItem() {
  ulArea.removeChild(ulArea.lastElementChild);
  localStorage.setItem('todoInput', ulArea.innerHTML);
}
