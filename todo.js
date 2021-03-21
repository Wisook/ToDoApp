// Ville //
// Muuttujat
var btnReset = document.querySelector("#reset");
var btnLast = document.querySelector("#removeLast");
var ulArea = document.querySelector("ol");

// Kuuntelijat
btnReset.addEventListener('click', reset);
btnLast.addEventListener('click', lastItem);

// Poisto nappuloiden toiminnot
function reset() {
  ulArea.innerHTML = "";
}
function lastItem() {
  ulArea.removeChild(ulArea.lastElementChild);
}

// Lisää nappulan toiminnot
function Funktio() {
  var item = document.getElementById("todoInput").value;
  if (item == ""  || item.length < 3) {
    alert("Kirjoita jotakin tai liian lyhyt teksti.");
    document.getElementById('todoInput').style.borderColor = "red";
  } else {
    localStorage.setItem('todoInput', ulArea.innerHTML); // Lisätään item localstorageen
    document.getElementById('todoInput').style.borderColor = "green";
    console.log("Toimii.");
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    var crap = document.getElementById("todoList");
    crap.appendChild(newItem);
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = updateItem.bind(checkBox);
    newItem.appendChild(text);
    newItem.appendChild(checkBox);
    document.getElementById("todoInput").value = "";
  }

  // Checkboxin toiminnot
  function updateItem() {
    if (this.checked) {
      this.parentNode.style.textDecoration = "line-through";
      this.parentNode.style.opacity = "0.5";
    } else {
      this.parentNode.style.textDecoration = "none";
      this.parentNode.style.opacity = "1";
    }
  }
}

// Local storage määritykset
var saved = localStorage.getItem('todoInput');
if (saved) {
	ulArea.innerHTML = saved;
}