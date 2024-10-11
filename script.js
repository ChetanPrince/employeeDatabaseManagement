let searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", saveData);

let selectedRow = null;

function saveData(e){
    e.preventDefault();
    let formData = getData();
    if(selectedRow === null){
        printData(formData);

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
// console.log(getData);

function printData(formData){
    let table = document.getElementById("one").getElementsByTagName("tbody")[0];
    let tr  = document.createElement("tr");
    console.log(table);
    tr.innerHTML =`<td>${formData}[0]</td>`;
    console.log(tr.innerHTML);
    

}