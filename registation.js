/*
@function: displayDetails()
**it is use for show detalis on table
**chack all validation
*/
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
        var tableBody = document.getElementById("tableid");
        var row = document.createElement("tr");
        tableBody.appendChild(row);
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
/*
@global variable
**variable: x;
**it use on bellow function(rowDetalis(),deleteRow(),function editeRow(),showEditeValue())
*/
var rowElement;
/*
@function: rowDetalis()
**it is use to rowdetalis
*/
function rowDetalis(element){
  rowElement=element;
}

/*
@fuction:deleteRow()
**this function is use to delete row on table
*/
function deleteRow() {
  var row = rowElement.parentNode.parentNode;
  row.parentNode.removeChild(row);
  var toast = document.getElementById('dtoast');
  var toastObj = new bootstrap.Toast(toast);
  toastObj.show();
}
/*
 @function:editeRow
 **edite row details on table
 */

function editeRow(){
    var row = rowElement.parentNode.parentNode;
    name1 = document.getElementById("ename");
    number = document.getElementById("enumber");
    email =document.getElementById("eemail");
    city = document.getElementById("ecity");
    state = document.getElementById("estate");
    country = document.getElementById("ecountry");
    pin = document.getElementById("epin");
    if(valAllEdit(name1,number,email,city,state,country,pin)){
        row.childNodes[1].innerHTML = name1.value;
        row.childNodes[2].innerHTML = number.value;
        row.childNodes[3].innerHTML = email.value;
        row.childNodes[4].innerHTML = city.value;
        row.childNodes[5].innerHTML = state.value;
        row.childNodes[6].innerHTML = country.value;
        row.childNodes[7].innerHTML = pin.value;
        row.childNodes[8].innerHTML = '<button class="btn edit" data-bs-toggle="modal" data-bs-target="#editModal" onclick="rowDetalis(this); showEditeValue();"><i class="fas fa-edit"></i></button><button class="btn delete" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="rowDetalis(this)"><i class="fas fa-trash-alt" style="color: red "></i></button>';
        var toast1 = document.getElementById("etoast");
        var toastObj = new bootstrap.Toast(toast1);
        toastObj.show();
    }
}
/*
@function: showEditeValue
**it is use for show value on edite from
*/
function showEditeValue(){
    var row = rowElement.parentNode.parentNode;
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

