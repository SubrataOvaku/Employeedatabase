
//for display details
function displayDetails(){
 
  if(valId()){
    var id = document.getElementById("id").value;
  }
  name1=document.getElementById("name");
  // if(valName(name)){
  //   var name = name.value;
  // }  
  number = document.getElementById("number");
  // if(valNumber(number)){
  //   var number = number.value;
  // }
  email =document.getElementById("email");
  // if( valEmail(email)){
  //   var email = email.value;
  // }
  city = document.getElementById("city")
  // if(valCity(city)){
  //   var city = city.value;
  // } 
  state = document.getElementById("state");
  // if(valState(state)){
  //   var state = state.value;
  // }
  country = document.getElementById("country");
  // if(valCountry(country)){
  // var country = country.value;
  // }
  pin = document.getElementById("pin");
  // if(valPin(pin)){
  // var pin = pin.value;
  // }
   if(valAll(name1,number,email,city,state,country,pin)){
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
  

    col0.innerHTML = id;
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

function rowDetalis(i){
  x=i;

}
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
  // if(valName(name)){
  //   var name = name.value;
  // }
  number = document.getElementById("enumber");
  // if(valNumber(number)){
  //   var number = number.value;
  // }
  email =document.getElementById("eemail");
  // if( valEmail(email)){
  //   var email = email.value;
  // }
  city = document.getElementById("ecity");
  // if(valCity(city)){
  //   var city = city.value;
  // } 
  state = document.getElementById("estate");
  // if(valState(state)){
  //   var state = state.value;
  // }
  country = document.getElementById("ecountry");
  // if(valCountry(country)){
  // var country = country.value;
  // }
  pin = document.getElementById("epin");
  // if(valPin(pin)){
  // var pin = pin.value;
  // }
 
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

