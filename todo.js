var inputArea = document.querySelector("#inputValue");
var btn = document.querySelector("button");
var btnReset = document.querySelector("#reset");
var btnLast = document.querySelector("#removeLast");
var ulArea = document.querySelector("ol");

btn.addEventListener('click', addItem);
btnReset.addEventListener('click', reset);
btnLast.addEventListener('click', lastItem);


function addItem() {
  var getValue = inputArea.value;
  var createElement = document.createElement("li");
  createElement.textContent = getValue;
  if(inputArea.value == "" || inputArea.value.length < 3) {
    alert("Liian lyhyt tai tyhjä kenttä.");
}
else {
    console.log("Toimii.")
    ulArea.appendChild(createElement);
}
}

function reset() {
  ulArea.innerHTML = "";
}
function lastItem() {
  ulArea.removeChild(ulArea.lastElementChild);
}

