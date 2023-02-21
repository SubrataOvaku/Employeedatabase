//global variable
var x;
var m;
var z;


//for delete are row
// function DeleteRecord(id) {
//     console.log(id);
//     // console.log(document.getElementById("tableid"));
//     document.getElementById("tableid").deleteRow(id);
    
//   }

//for display details
function displayDetails(){
    var id = document.getElementById("sl").value;
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var pin = document.getElementById("pin").value;

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
    col1.innerHTML = name;
    col2.innerHTML = number;
    col3.innerHTML = email;
    col4.innerHTML = city;
    col5.innerHTML = state;
    col6.innerHTML = country;
    col7.innerHTML = pin;
    col8.innerHTML = '<button class="btn edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="myf(this); showeditevalue();"><i class="fas fa-edit"></i></button><button class="btn delete" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="myf(this)"><i class="fas fa-trash-alt" style="color: red "></i></button>';   
} 
function myf(i){
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
function myedite(){
 
  var row = x.parentNode.parentNode;
  var id = document.getElementById("eid").value;
  var name = document.getElementById("ename").value;
  var number = document.getElementById("enumber").value;
  var email = document.getElementById("eemail").value;
  var city = document.getElementById("ecity").value;
  var state = document.getElementById("estate").value;
  var country = document.getElementById("ecountry").value;
  var pin = document.getElementById("epin").value;
 
 
  row.childNodes[0].innerHTML = id;
  row.childNodes[1].innerHTML = name;
  row.childNodes[2].innerHTML = number;
  row.childNodes[3].innerHTML = email;
  row.childNodes[4].innerHTML = city;
  row.childNodes[5].innerHTML = state;
  row.childNodes[6].innerHTML = country;
  row.childNodes[7].innerHTML = pin;
  row.childNodes[8].innerHTML = '<button class="btn edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="myf(this) showeditevalue()"><i class="fas fa-edit"></i></button><button class="btn delete" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="myf(this)"><i class="fas fa-trash-alt" style="color: red "></i></button>';
  var toast1 = document.getElementById("etoast");
  console.log(toast1);
  var toastObj = new bootstrap.Toast(toast1);
  toastObj.show();
    
} 
function showeditevalue(){
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

