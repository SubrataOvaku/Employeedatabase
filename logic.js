var x;
var m;

//for delete ar row
// function DeleteRecord(id) {
//     console.log(id);
//     // console.log(document.getElementById("tableid"));
//     document.getElementById("tableid").deleteRow(id);
    
//   }

//for display details
function displayDetails(){

  // document.getElementById("model").innerText="hello";
  // return;

    var id = document.getElementById("sl").value;
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var pin = document.getElementById("pin").value;

    
    /*document.getElementById("ssl").innerHTML = id;
    document.getElementById("sname").innerHTML = name;
    document.getElementById("snumber").innerHTML = number;
    document.getElementById("semail").innerHTML = email;
    document.getElementById("scity").innerHTML = city;
    document.getElementById("sstate").innerHTML = state;
    document.getElementById("scountry").innerHTML = country;
    document.getElementById("spin").innerHTML = pin;
    */


    var takeid = document.getElementById("tableid");
    // var del = document.getElementById("row");
    // console.log(del);
    var row = document.createElement("tr");
    //console.log(row);
    takeid.appendChild(row);

    // console.log(takeid);

    var col0 = row.appendChild(document.createElement("td"));
    // console.log(col0);
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
    col8.innerHTML = '<button class="btn edit"><i class="fas fa-edit"></i></button><button class="btn delete" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="myf(this)"><i class="fas fa-trash-alt" style="color: red "></i></button>';
   
} 
function myf(i){
  x=i;
}
function deleteRow() {
 
  var row = x.parentNode.parentNode;
  row.parentNode.removeChild(row);
  var toast = document.getElementById('toast');
  var toastObj = new bootstrap.Toast(toast);
  toastObj.show();
}


