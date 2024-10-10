let table = document.getElementById("one").getElementsByTagName("tbody")[0];
let tr  = table.rows;


function getData(){
    return{
        name: document.getElementById("nameFirst").value,
        surname: document.getElementById("secondNameFirst").value,
        contact: document.getElementById("contactNo").value,
        email: document.getElementById("emailId").value
    }
}
console.log(getData);
let searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", saveData());

let selectedRow = null;

function saveData(){
    
}