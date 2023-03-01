
/* 
@this function is to display all Employee Details
@ Ade variable:
*/
function displayDetails(){
  name1=document.getElementById("name"); 
  number = document.getElementById("number");
  email =document.getElementById("email");
  city = document.getElementById("city");
  state = document.getElementById("state");
  country = document.getElementById("country");
  pin = document.getElementById("pin");
    if(valAll(name1,number,email,city,state,country,pin)){   
        datas = {
          "name": document.getElementById("name").value,
          "phoneNo": document.getElementById("number").value,
          "email": document.getElementById("email").value,
          "city": document.getElementById("city").value,
          "state": document.getElementById("state").value,
          "country": document.getElementById("country").value,
          "pin": document.getElementById("pin").value,
        }
        var url = "http://192.168.0.107:8080/students";
        var pa = {
          method:"POST",
          headers:{
            "content-Type":"application/json"
          },
          body:JSON.stringify(datas),
          }
          fetch(url,pa).then(response =>{
            return response.json();
          }).then(data => {
            var takeid = document.getElementById("api"); 
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
            col0.innerHTML = data.id;
            col1.innerHTML = data.name;
            col2.innerHTML = data.phoneNo;
            col3.innerHTML = data.email;
            col4.innerHTML = data.city;
            col5.innerHTML = data.state;
            col6.innerHTML = data.country;
            col7.innerHTML = data.pin;
            col8.innerHTML = '<button class="btn edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="rowDetalis(this); showEditeValue();"><i class="fas fa-edit"></i></button><button class="btn delete" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="rowDetalis(this)"><i class="fas fa-trash-alt" style="color: red "></i></button>';   
            
          })
    }
  }
//global variable
var x;
var m;
var z;
/*
@ this function for detealis of row

*/
function rowDetalis(i){
  x=i;

}
/*
@deleterow
** this fuction is use to delete a row 
 */
function deleteRow() {
 
  var row = x.parentNode.parentNode;
  var id = row.childNodes[0].innerHTML;
  console.log(id);
  var url = "http://192.168.0.107:8080/students/" + id;
  var p = {
  method:"DELETE",
  headers:{
    "Content-Type":"application/json"
  }
  }
  fetch(url,p).then(response =>{  
  var toast = document.getElementById('dtoast');
  var toastObj = new bootstrap.Toast(toast);
  toastObj.show();
  row.parentNode.removeChild(row);
  })
 
}
/*
@editeRow
**this function is for edite row
*/
function editeRow(){
 
  
  var id = document.getElementById("eid").value;
  name1 = document.getElementById("ename");
  number = document.getElementById("enumber");
  email =document.getElementById("eemail");
  city = document.getElementById("ecity");
  state = document.getElementById("estate");
  country = document.getElementById("ecountry");
  pin = document.getElementById("epin");
    if(valAll(name1,number,email,city,state,country,pin)){
   
      datas = {
        "name": document.getElementById("ename").value,
        "phoneNo": document.getElementById("enumber").value,
        "email": document.getElementById("eemail").value,
        "city": document.getElementById("ecity").value,
        "state": document.getElementById("estate").value,
        "country": document.getElementById("ecountry").value,
        "pin": document.getElementById("epin").value,
  
      }
        var url = "http://192.168.0.107:8080/students/" +id ;
        var pa = {
          method:"put",
          headers:{
            "content-Type":"application/json"
          },
          body:JSON.stringify(datas),
          }
          fetch(url,pa).then(response =>{
            return response.json();
          }).then(data => {       
            console.log(data);
         
            var row = x.parentNode.parentNode;
            row.childNodes[0].innerHTML = id;
            row.childNodes[1].innerHTML = data.name;
            row.childNodes[2].innerHTML = data.phoneNo;
            row.childNodes[3].innerHTML = data.email;
            row.childNodes[4].innerHTML = data.city;
            row.childNodes[5].innerHTML = data.state;
            row.childNodes[6].innerHTML = data.country;
            row.childNodes[7].innerHTML = data.pin;
            row.childNodes[8].innerHTML = '<button class="btn edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="rowDetalis(this); showEditeValue();"><i class="fas fa-edit"></i></button><button class="btn delete" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="rowDetalis(this)"><i class="fas fa-trash-alt" style="color: red "></i></button>';
           })
            var toast1 = document.getElementById("etoast");
            // console.log(toast1);
            var toastObj = new bootstrap.Toast(toast1);
            toastObj.show();
      } 
  } 
/*
@showEditeValue
** this function is use to show value in adite page
 */
function showEditeValue(){
    var row = x.parentNode.parentNode;
    document.querySelectorAll("#valid").forEach(clear=>{
      clear.innerHTML= null ;
    });
    var id = (document.getElementById("eid").value = row.childNodes[0].innerHTML);
    var name = (document.getElementById("ename").value = row.childNodes[1].innerHTML);
    var mobileNumber = (document.getElementById("enumber").value = row.childNodes[2].innerHTML);
    var email = (document.getElementById("eemail").value = row.childNodes[3].innerHTML);
    var city = (document.getElementById("ecity").value = row.childNodes[4].innerHTML);
    var state = (document.getElementById("estate").value = row.childNodes[5].innerHTML);
    var country = (document.getElementById("ecountry").value = row.childNodes[6].innerHTML);
    var pinCode = (document.getElementById("epin").value = row.childNodes[7].innerHTML);
    
}
/*
** this porson is use to api call
 */
var url = "http://192.168.0.107:8080/students";
var p = {
  method:"GET",
  headers:{
    "Content-Type":"application/json"
  }
}

fetch(url,p).then(response =>{
  return response.json();
}).then(data => {
  if (data.length > 0) {
    var temp = "";
    data.forEach((itemData) => {
      temp += "<tr>";
      temp += "<td>" + itemData.id + "</td>";
      temp += "<td>" + itemData.name + "</td>";
      temp += "<td>" + itemData.phoneNo + "</td>";
      temp += "<td>" + itemData.email + "</td>";
      temp += "<td>" + itemData.city + "</td>";
      temp += "<td>" + itemData.state + "</td>";
      temp += "<td>" + itemData.country + "</td>";
      temp += "<td>" + itemData.pin + "</td>";
      temp += "<td>" + '<button class="btn edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="rowDetalis(this); showEditeValue();"><i class="fas fa-edit"></i></button><button class="btn delete" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="rowDetalis(this)"><i class="fas fa-trash-alt" style="color: red "></i></button>' + "</td></tr>";
    });
   document.getElementById('api').innerHTML = temp;
  }
})

