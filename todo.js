// Ville //
// Muuttujat
var btnReset = document.querySelector("#reset");
var btnLast = document.querySelector("#removeLast");
var ulArea = document.querySelector("ol");

// Kuuntelijat
btnReset.addEventListener('click', reset);
btnLast.addEventListener('click', lastItem);

// Funktiot
function reset() {
  ulArea.innerHTML = "";
}
function lastItem() {
  ulArea.removeChild(ulArea.lastElementChild);
}
function Funktio() {
  var item = document.getElementById("todoInput").value;
  if (item == "" || item.length < 3) {
    alert("Kirjoita jotakin tai liian lyhyt teksti.");
    document.getElementById('todoInput').style.borderColor = "red";
  } else {
    document.getElementById('todoInput').style.borderColor = "green";
    console.log("Toimii.");
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    var crap = document.getElementById("todoList");
    crap.appendChild(newItem);
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = updateItem.bind(checkBox);
    newItem.appendChild(checkBox);
    newItem.appendChild(text);
    document.getElementById("todoInput").value = "";
    checkBox.className = "addedClass";
  }

  function updateItem() {
    if (this.checked) {
      this.parentNode.style.textDecoration = "line-through";
    } else {
      this.parentNode.style.textDecoration = "none";
    }
  }
}
