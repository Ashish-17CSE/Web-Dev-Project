
let editdata = null;

let btn = document.getElementById("submit");
btn.addEventListener('click', RegistrData);
function RegistrData(){
  let transferReadData = readDate()

    if (editdata == null){
        insertdata(transferReadData)
    }
    else{
        // update(transferReadData) // if you will use 'user' object.
        update();
        editdata = null;
    }
    reset()
}

function readDate(){
    let user = {}
    user["name"] = document.getElementById("name").value;
    user["email"] = document.getElementById("email").value;
    user["password"] = document.getElementById("password").value;
    user["number"] = document.getElementById("number").value;
    user["subject"] = document.getElementById("subject").value;
    user["Message"] = document.getElementById("Message").value;
    
    // LOCAL STORAGE 
    // localStorage.setItem(user.number, JSON.stringify(user))
    
    // POST Method with 'axios'
    /*axios.post('https://crudcrud.com/api/2b5bcf8eed7048fdbe1639b17e7fdbf8/appointmentData', user)
        .then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })*/
        
        
        // GET Method with 'axios'
   axios.get('https://crudcrud.com/api/3cbfc79cf14948dc808edbd5847ed195/appointmentData', user)
        .then((response) => {
            console.log(response)
            for (var i=0; i<response.data.length; i++){
                insertdata(response.data[i])
            }
        }).catch((err) => {
            console.log(err)
        })
        
        
        
        
    return user;   
}

function insertdata(value){
    // console.log(value);
    // console.log(value.number)
    let table = document.getElementById("list");
    // let tr = table.insertRow(table.length);
    let rowNumber = table.rows.length;
    let tr = table.insertRow(rowNumber);
    let td1 = tr.insertCell(0);
    let td2 = tr.insertCell(1);
    let td3 = tr.insertCell(2);
    let td4 = tr.insertCell(3);
    let td5 = tr.insertCell(4);
    let td6 = tr.insertCell(5);
    let td7 = tr.insertCell(6);
    let td8 = tr.insertCell(7);
    let td9 = tr.insertCell(8);

    td1.innerHTML = table.rows.length-1;
    td2.innerHTML = value.name;
    td3.innerHTML = value.email;
    td4.innerHTML = value.password;
    td5.innerHTML = value.number;
    td6.innerHTML = value.subject;
    td7.innerHTML = value.Message;
    td8.innerHTML = "<button class='edit btn btn-outline-warning btn-sm' onClick='edit(this)'>Edit</button>";
    td9.innerHTML = "<button class='delete btn btn-outline-danger btn-sm' onClick='dlt(this)'>Delete</button>";
}

function reset() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("number").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("Message").value = "";
}

function edit(button){
    // let selectedtr = document.querySelector(".edit").parentElement.parentElement;
    
    // editdata = y.parentElement.parentElement;
    let row = button.parentElement.parentElement;
    editdata = row;
    document.getElementById("name").value = editdata.cells[1].innerHTML;
    document.getElementById("email").value = editdata.cells[2].innerHTML;
    document.getElementById("password").value = editdata.cells[3].innerHTML;
    document.getElementById("number").value = editdata.cells[4].innerHTML;
    document.getElementById("subject").value = editdata.cells[5].innerHTML;
    document.getElementById("Message").value = editdata.cells[6].innerHTML;
}

function update(){
// function update(user){ // if you use 'user.name' 
    // editdata.cells[1].innerHTML = user.name;
    editdata.cells[1].innerHTML = document.getElementById("name").value;    
    editdata.cells[2].innerHTML = document.getElementById("email").value;
    editdata.cells[3].innerHTML = document.getElementById("password").value;
    editdata.cells[4].innerHTML = document.getElementById("number").value;
    editdata.cells[5].innerHTML = document.getElementById("subject").value;
    editdata.cells[6].innerHTML = document.getElementById("Message").value;
}

function dlt(dl, Uid){
    // console.log(dl)
    let deleteRow = dl.parentElement.parentElement;
    deleteRow.remove();
}
