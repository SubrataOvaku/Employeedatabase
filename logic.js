function displayDetails(){
    var id = document.getElementById("sl").value;
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var pin = document.getElementById("pin").value;

    document.getElementById("ssl").innerHTML = id;
    document.getElementById("sname").innerHTML = name;
    document.getElementById("snumber").innerHTML = number;
    document.getElementById("semail").innerHTML = email;
    document.getElementById("scity").innerHTML = city;
    document.getElementById("sstate").innerHTML = state;
    document.getElementById("scountry").innerHTML = country;
    document.getElementById("spin").innerHTML = pin;






}