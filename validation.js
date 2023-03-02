/*
*@validation 
**Add new function for validation all fild and submit button
*/
/*
@valId
** use for  validation
** validation : Id
*/
function valId(validid){ 
    var div = validid.parentNode;
    var p = div.querySelector("#valid");
    validid = validid.value;
    var len = document.getElementById("tableid").rows.length;
    var n=0;
    var i;
    for( i = 1; i < len; i++){
        if( validid == document.getElementById("tableid").rows[i].cells[0].innerHTML){
            n++;
            break;    
        }
    }
    if (n > 0) {
        p.innerHTML = "Duplicate data!";
        id = null;
        return false;
    }
    else if (/^[0-9]{1,9}$/.test(validid)) {
        p.innerHTML = null;
        return true;
    }
    else {
        p.innerHTML = "Invalid id!";
        id = null;
        return false;
    }
}

/*
@valName
** use for  validation
** validation : name
*/
function valName(validName) {
    var div = validName.parentNode;
    var p = div.querySelector("#valName");
    validName = validName.value;
    if (/^[a-zA-Z]+([ ][a-zA-Z]+)*$/.test(validName)) {
        p.innerHTML = null;
        bt.disable = true;
        return true;
    }
    else {
        p.innerHTML = "Invalid Name!";
        bt.disable = false;
        return false;
    }
}

/*
@valNumber
** use for  validation
** validation : phone number
*/
function valNumber(validNumber) {
    var div = validNumber.parentNode;
    var p = div.querySelector("#valNumber");
    validNumber = validNumber.value;
    if (/^\d{10}$/.test(validNumber)) {
        p.innerHTML = null;
        return true;
    }
    else {
        p.innerHTML = "Invalid Phone Number!";
        return false;
    }
}
/*
@valEmail
** use for  validation
** validation : email id
*/
function valEmail(validEmail){
    var div = validEmail.parentNode;
    var p = div.querySelector("#valEmail");
    validEmail = validEmail.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validEmail)) {
        p.innerHTML = null;
        return true;
    }
    else {
        p.innerHTML = "Invalid Mail!";
        return false;
    }
   
}
/*
@valCity
** use for  validation
** validation : City
*/
function valCity(validCity){
    var div = validCity.parentNode;
    var p = div.querySelector("#valcity");
    validCity = validCity.value;
    if (validCity=="") {        
        p.innerHTML = "Enter Your City!";
        return false;
    }
    else {
        p.innerHTML = null;
        return true;
    }
   
}
/*
@valState
** use for validation
** validation : State
*/
function valState(validState){
    var div = validState.parentNode;
    var p = div.querySelector("#valState");
    validState = validState.value;
    if ( validState=="") {
        
        p.innerHTML = "Enter Your State!";
        return false;
    }
    else {
        p.innerHTML = null;
        return true;
    }
   
}
/*
@valcountry
** use for  validation
** validation : Country
*/
function valCountry(validCountry){
    var div = validCountry.parentNode;
    var p = div.querySelector("#valCountry");
    validCountry = validCountry.value;
    if (/^[a-zA-Z]+([ ][a-zA-Z]+)*$/.test(validCountry)) {
       p.innerHTML = null;
        return true;
    }
    else {
        p.innerHTML = "Enter Your Country!";
        return false;
    }
   
}
/*
@valpin
** use for  validation
** validation : Pin Code
*/
function valPin(validPin){
    var div = validPin.parentNode;
    var p = div.querySelector("#valPin");
    validPin = validPin.value;
    if (/^\d{5,6}$/.test(validPin)) {
        p.innerHTML = null;
        
        return true;
    }
    else {
        p.innerHTML = "Enter your Proper Pincode!";
        return false;
    }
   
}
/*
@valAll
** use for validation
** validation : all function are true the work on this vlidation
*/
function valAll(id,name,number,email,city,state,country,pin) {
     if (valId(id) && valName(name) && valNumber(number) && valEmail(email) && valCity(city) && valState(state) && valCountry(country) && valPin(pin)) {
     return true;    
     }else {  
         return false; 
     }
}
function valAllEdit(name,number,email,city,state,country,pin) {
    if (valName(name) && valNumber(number) && valEmail(email) && valCity(city) && valState(state) && valCountry(country) && valPin(pin)) {        
    return true;    
    }else {  
        return false; 
    }
}