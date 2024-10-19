let selectedRow = null;

const sbmtBtn = document.getElementById("submit");
sbmtBtn.addEventListener("click", saveData);

const cnclBtn = document.getElementById("cancelEdit");
cnclBtn.addEventListener("click", cancelEdit);


window.onload = function(){
    loadTableFromLocalStorage();
    loadTableTwoFromLocalStorage();
}
function saveData(){
    let formData = getData();
    if(selectedRow === null){
        let inputs = document.querySelectorAll(".inputsActual");
        let allFieldsFilled = true;
        inputs.forEach(input => {
            if(input.value.trim() ===""){
                allFieldsFilled = false;
            }})
            if(allFieldsFilled){
                printData(formData);
                saveToLocalStorage(formData);
                printTableTwo();
            }else{
                alert("Please fill the required fields first!");
                return;
            }
        }
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
    let tr  = document.createElement("tr");
    tr.innerHTML =`<td>${formData.name}</td><td>${formData.surname}</td><td>${formData.contact}</td><td>${formData.email}</td><td><button id="edit" onClick="editRow(this)">Edit</button><button id="delete" onclick="deleteRow(this)">Delete</button></td>`;
    table.appendChild(tr);

}

function saveToLocalStorage(formData){
    let employeeData = JSON.parse(localStorage.getItem("employees")) || [];
    employeeData.push(formData);
    localStorage.setItem("employees", JSON.stringify(employeeData));
}
function loadTableFromLocalStorage(){
    let employeeData = JSON.parse(localStorage.getItem("employees"))||[];
    employeeData.forEach(data=>{
        printData(data);
    });
}

function printTableTwo(formData){
    let tableTwo = document.getElementById("two").getElementsByTagName("tbody")[0];
    let tr = document.createElement("tr");
    tr.innerHTML = `<td><a href="#" onclick="showDetails(${formData.id})">${formData.id}</a></td><td>${formData.name}</td>`;
}
function loadTableTwoFromLocalStorage(){
    let employeeData = JSON.parse(localStorage.getItem("employees")) || [];
    employeeData.forEach(data => {
        printTableTwo(data);
    });
}

function showDetails(id){
    let employeeData = JSON.parse(localStorage.getItem("employees")) || [];
    let selectedEmployee = employeeData.find(emp => emp.id === id);
    if(selectedEmployee){
        clearTableOne();
        printData(selectedEmployee);
    }
}

function clearTableOne(){
    let table = document.getElementById("one").getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    
}

function editRow(td){

    selectedRow = td.parentElement.parentElement;
    document.getElementById("nameFirst").value = selectedRow.cells[0].innerHTML;
        document.getElementById("secondNameFirst").value = selectedRow.cells[1].innerHTML;
        document.getElementById("contactNo").value=selectedRow.cells[2].innerHTML;
        document.getElementById("emailId").value =selectedRow.cells[3].innerHTML;
    document.getElementById("submit").innerText = "update";
    cnclBtn.style.display = "inline";
}

function cancelEdit(){
    clearForm();
    selectedRow = null;
    cnclBtn.style.display = "none";
}
function deleteRow(td){
    if(confirm("Are you sure you want to delete the row?")){
        selectedRow = td.parentElement.parentElement;
        selectedRow.remove();
        let name = selectedRow.cells[0].innerHTML;
        deleteFromLocalStorage(name);
    }
    selectedRow = null;
}

function deleteFromLocalStorage(name){
    let employeeData = JSON.parse(localStorage.getItem("employees"))|| [];
    employeeData = employeeData.filter(employee=> employee.name !== name);
    localStorage.setItem("employees", JSON.stringify(employeeData));
}
function updateData(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.contact;
    selectedRow.cells[3].innerHTML = formData.email;

    updateLocalStorage(formData);

    selectedRow = null;
    cnclBtn.style.display = "none";
    document.getElementById("submit").innerText = "Submit";
}

function updateLocalStorage(updatedData){
    let employeeData = JSON.parse(localStorage.getItem("employees"))||[];
    employeeData = employeeData.map(employee=>{
        if(employee.name === selectedRow.cells[0].innerHTML){
            return updatedData;
        }
        return employee;
    });
    localStorage.setItem("employees", JSON.stringify(employeeData));
}
function clearForm(){
    document.getElementById("nameFirst").value = "";
    document.getElementById("secondNameFirst").value = "";
    document.getElementById("contactNo").value="";
    document.getElementById("emailId").value ="";
    document.getElementById("submit").innerText = "Submit";
    cnclBtn.style.display = "none";
    
}