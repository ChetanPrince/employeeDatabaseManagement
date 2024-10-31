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
    
}