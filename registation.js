
//for display details
function displayDetails(){ 
  id = document.getElementById("id");  
  name1=document.getElementById("name");
  number = document.getElementById("number");
  email =document.getElementById("email");
  city = document.getElementById("city");
  state = document.getElementById("state");
  country = document.getElementById("country");
  pin = document.getElementById("pin");
   if(valAll(id,name1,number,email,city,state,country,pin)){
    var takeid = document.getElementById("tableid"); 
    var row = document.createElement("tr");
    takeid.appendChild(row); 
    var col0 = row.appendChild(document.createElement("td"));
    var col1 = row.appendChild(document.createElement("td"));
    var col2 = row.appendChild(document.createElement("td"));
    var col3 = row.appendChild(document.createElement("td"));
    var col4 = row.appendChild(document.createElement("td"));
    var col5 = row.appendChild(document.createElement("td"));
    var col6 = row.appendChild(document.createElement("td"));
    var col7 = row.appendChild(document.createElement("td"));
    var col8 = row.appendChild(document.createElement("td"));
    col0.innerHTML = id.value;
    col1.innerHTML = name1.value;
    col2.innerHTML = number.value;
    col3.innerHTML = email.value;
    col4.innerHTML = city.value;
    col5.innerHTML = state.value;
    col6.innerHTML = country.value;
    col7.innerHTML = pin.value;
    col8.innerHTML = '<button class="btn edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="rowDetalis(this); showEditeValue();"><i class="fas fa-edit"></i></button><button class="btn delete" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="rowDetalis(this)"><i class="fas fa-trash-alt" style="color: red "></i></button>';   
  } 
  
 }
//global variable
var x;
var m;
var z;
// this function is use to row detalis
function rowDetalis(i){
  x=i;
}
// this function is use to delete row on table
function deleteRow() { 
  var row = x.parentNode.parentNode;
  row.parentNode.removeChild(row); 
  var toast = document.getElementById('dtoast');
  var toastObj = new bootstrap.Toast(toast);
  toastObj.show();
}
//add table edite details
function editeRow(){ 
  var row = x.parentNode.parentNode;
  var id = document.getElementById("eid").value;
  name1 = document.getElementById("ename");
  number = document.getElementById("enumber");
  email =document.getElementById("eemail");
  city = document.getElementById("ecity");
  state = document.getElementById("estate");
  country = document.getElementById("ecountry");
  pin = document.getElementById("epin"); 
  if(valAll(name1,number,email,city,state,country,pin)){
  row.childNodes[0].innerHTML = id;
  row.childNodes[1].innerHTML = name1.value;
  row.childNodes[2].innerHTML = number.value;
  row.childNodes[3].innerHTML = email.value;
  row.childNodes[4].innerHTML = city.value;
  row.childNodes[5].innerHTML = state.value;
  row.childNodes[6].innerHTML = country.value;
  row.childNodes[7].innerHTML = pin.value;
  row.childNodes[8].innerHTML = '<button class="btn edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="rowDetalis(this); showEditeValue();"><i class="fas fa-edit"></i></button><button class="btn delete" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="rowDetalis(this)"><i class="fas fa-trash-alt" style="color: red "></i></button>';
  var toast1 = document.getElementById("etoast");
  // console.log(toast1);
  var toastObj = new bootstrap.Toast(toast1);
  toastObj.show();
  }
    
} 
function showEditeValue(){
    var row = x.parentNode.parentNode;
    
    var id = (document.getElementById("eid").value = row.childNodes[0].innerHTML);
    var name = (document.getElementById("ename").value = row.childNodes[1].innerHTML);
    var mobileNumber = (document.getElementById("enumber").value = row.childNodes[2].innerHTML);
    var email = (document.getElementById("eemail").value = row.childNodes[3].innerHTML);
    var city = (document.getElementById("ecity").value = row.childNodes[4].innerHTML);
    var state = (document.getElementById("estate").value = row.childNodes[5].innerHTML);
    var country = (document.getElementById("ecountry").value = row.childNodes[6].innerHTML);
    var pinCode = (document.getElementById("epin").value = row.childNodes[7].innerHTML);
    
}

