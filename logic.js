function displayDetails(){

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
    col8.innerHTML = '<button class="btn  edit"><i class="fas fa-edit"></i></button>&nbsp;<button class="btn  delete"><i class="fas fa-trash-alt" style="color: red "></i></button>';
   




}