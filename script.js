let searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", saveData);

let selectedRow = null;

// window.onload = saveData;

function saveData(){
    let formData = getData();
    if (selectedRow === null) {
        let inputs = document.querySelectorAll(".inputsActual");
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false; // If any field is empty, set allFilled to false
            }
        });

        if (allFilled) {
            printData(formData); // Only print if all fields are filled
        } else {
            alert("You need to fill the empty fields!");
            return; // Stop further execution if any field is empty
        }

    } else {
        updateData(formData); // If editing an existing row, update the data
    }

    clearForm(); // Clear the form whether adding or updating data
}


function getData(){
    return{
        name: document.getElementById("nameFirst").value,
        surname: document.getElementById("secondNameFirst").value,
        contact: document.getElementById("contactNo").value,
        email: document.getElementById("emailId").value
    }
}


function printData(formData){
    let table = document.getElementById("one").getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    let tr  = document.createElement("tr");
    tr.innerHTML =`<td>${formData.name}</td><td>${formData.surname}</td><td>${formData.contact}</td><td>${formData.email}</td><td><button id="edit" onClick="editRow(this)">Edit</button><button id="delete" onclick="deleteRow(this)">Delete</button></td>`;
    table.appendChild(tr);

    let savedData = localStorage.getItem("employeeData") || (localStorage.setItem("employeeData", defaultData), defaultData);
}