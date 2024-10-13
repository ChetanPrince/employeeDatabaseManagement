let searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", saveData);

let selectedRow = null;

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

    // let savedData = localStorage.getItem("employeeData") || (localStorage.setItem("employeeData", defaultData), defaultData);
}

function editRow(td){

    selectedRow = td.parentElement.parentElement;
    document.getElementById("nameFirst").value = selectedRow.cells[0].innerHTML;
        document.getElementById("secondNameFirst").value = selectedRow.cells[1].innerHTML;
        document.getElementById("contactNo").value=selectedRow.cells[2].innerHTML;
        document.getElementById("emailId").value =selectedRow.cells[3].innerHTML;

    console.log(selectedRow);

}
function clearForm(){
document.getElementById("nameFirst").value = "";
    document.getElementById("secondNameFirst").value = "";
    document.getElementById("contactNo").value="";
    document.getElementById("emailId").value ="";
}
function deleteRow(td){
    selectedRow = td.parentElement.parentElement;
    if(confirm("Are you sure you want to delete the row?")){
        selectedRow.remove();
    }
    selectedRow = null;
}
function updateData(formData){
    console.log(formData.name)
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.contact;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow = null;
}