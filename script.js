let selectedRow = null;
const cnclBtn = document.getElementById("cancelEdit");
cnclBtn.addEventListener("click", cancelEdit);

const sbmtBtn = document.getElementById("submit");

sbmtBtn.addEventListener("click", saveData);


function saveData(){
    let formData = getData();
    if(selectedRow === null){
        let inputs = document.querySelectorAll(".inputsActual");
        let allFieldsFilled = true;
        inputs.forEach(input => {
            if(input.ariaValueMax.trim() ===""){
                allFieldsFilled = false;
            }})
            if(allFieldsFilled){
                saveToLocalStorage(formData);
                printTableTwo(formData);
                }else{
                    alert("Please fill the required fields first!");
                    return;
                }    }

                else{
                    updateData(formData);
                }
                clearForm();
}


function getData(){
    return{
        id: Date.now(),
        name: document.getElementById("nameFirst").value,
        surname: document.getElementById("secondNameFirst").value,
        contact: document.getElementById("contactNo").value,
        email: document.getElementById("emailId").value
    }
}

function printData(formData){
    let table = document.getElementById("one").getElementsByTagName("tbody")[0];
    let tr =document.createElement("tr");
    tr.innerHTML =`<td>${formData.name}</td><td>${formData.surname}</td><td>${formData.contact}</td><td>${formData.email}</td><td><button id="edit" onClick="editRow(this)">Edit</button><button id="delete" onclick="deleteRow(this)">Delete</button></td>`;
    table.appendChild(tr);
}

function printTableTwo(formData){
    let table = document.getElementById("one").getElementsByTagName("tbody")[0];
    let tr= document.getElementById("tr");
    tr.innerHTML = `<td><a href="#" onclick="showDetails(${formData.id})">${formData.id}</a></td><td>${formData.name}</td>`;
    printTableTwo.appendChild(tr);
}