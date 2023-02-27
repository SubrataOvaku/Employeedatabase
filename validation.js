/*
*@validation 
**Add new function for validation all fild and submit button
*/
//validation for id
function valId(){   
    // var e = document.getElementById("tableid");
    // var k = e.getElementsByTagName("tr")[0].getElementsByTagName("td");
    // console.log(k);
    // for (let i = 0; i <= k; i++) {
    //     console.log("this is loop");        
        
    // }
    var  id = document.getElementById("id").value;
    //console.log(id);
    if (/^\d{1,2}$/.test(id)) {
        return true;
    } else {
        alert("WRONG");
        id = null;
        return false;
    } 
   
}


/*
@valName
** use for name validation
** 
*/
function valName(validName) {
    var div = validName.parentNode;
    var p = div.querySelector("#valName");
    validName = validName.value;
    if (/^[a-zA-Z]+([ ][a-zA-Z]+)*$/.test(validName)) {
        p.innerHTML = null;
        return true;
    }
    else {
        p.innerHTML = "invalid name";
        return false;
    }
}
/*
@valNumber
** use for number validation 
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
        p.innerHTML = "Invalid phone number";
        return false;
    }
}
/* 
@vakEmail
** use for email validation
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
        p.innerHTML = "Invalid EmailId";
        return false;
    }
   
}
/*
@valcity
** use for city validation
*/
function valCity(validCity){
    var div = validCity.parentNode;
    var p = div.querySelector("#valcity");
    validCity = validCity.value;
    if (validCity=="") {        
        p.innerHTML = "Enter your city";
        return false;
    }
    else {
        p.innerHTML = null;
        return true;
    }
   
}
/*
@valstate
**  use for state validation
*/
function valState(validState){
    var div = validState.parentNode;
    var p = div.querySelector("#valState");
    validState = validState.value;
    if ( validState=="") {
        
        p.innerHTML = "Enter your state";
        return false;
    }
    else {
        p.innerHTML = null;
        return true;
    }
   
}
/*
@valcountyr 
** use for country validation
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
        p.innerHTML = "Enter your country";
        return false;
    }
   
}
/*
@valpin
** use for pin validation
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
        p.innerHTML = "Enter your Pincode";
        return false;
    }
   
}
/*
@valAll
** above all functon ar true then this function allow the submit data in table
 */
function valAll(name,number,email,city,state,country,pin) {
     if (valName(name) && valNumber(number) && valEmail(email) && valCity(city) && valState(state) && valCountry(country) && valPin(pin)) {
     return true;    
     }else {  
         return false; 
     }
}