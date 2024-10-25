const btn = document.getElementById("submit");

btn.addEventListener("click", saveData);


function saveData(){
const output = document.getElementsByTagName("table");
const tr = document.createElement("tr");
tr.innerHTML = `<td>chakk k rakh</td>`;
output.appendChild(tr);

}