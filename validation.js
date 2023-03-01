/*
*@validation 
**Add new function for validation all fild and submit button
*/
//validation for id
// function valId(validid){ 
//     var div = validid.parentNode;
//     var p = div.querySelector("#valid");
//     validid = validid.value;
//     var len = document.getElementById("tableid").rows.length;
//     var n=0;
//     var i;
//         for( i = 1; i < len; i++){
//             if( validid == document.getElementById("tableid").rows[i].cells[0].innerHTML){
//              n++;
//              break;    
//             }
//         }
//         if (n > 0) {
//             p.innerHTML = "Duplicate data!";
//             id = null;
//             return false;
//         }
//         else if (/^[0-9]{1,9}$/.test(validid)) {
//             p.innerHTML = null;
//             return true;
//         }
//         else {
//             p.innerHTML = "Invalid id";
//             id = null;
//             return false;
//         }
   
// }
/*
@valName
** use for name validation
** 
*/
function valName(validName) {
    var div = validName.parentNode;
    var p = div.querySelector("#valid");
    validName = validName.value;
    if (/^[a-zA-Z]+([ ][a-zA-Z]+)*$/.test(validName)) {
        p.innerHTML = null;
        return true;
    }
    else {
        p.innerHTML = "Invalid Name!";
        return false;
    }
}
/*
@valNumber
** use for number validation 
*/
function valNumber(validNumber) {
    var div = validNumber.parentNode;
    var p = div.querySelector("#valid");
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
@vakEmail
** use for email validation
*/
function valEmail(validEmail){
    var div = validEmail.parentNode;
    var p = div.querySelector("#valid");
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
@valcity
** use for city validation
*/
function valCity(validCity){
    var div = validCity.parentNode;
    var p = div.querySelector("#valid");
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
@valstate
**  use for state validation
*/
function valState(validState){
    var div = validState.parentNode;
    var p = div.querySelector("#valid");
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
@valcountyr 
** use for country validation
 */
function valCountry(validCountry){
    var div = validCountry.parentNode;
    var p = div.querySelector("#valid");
    validCountry = validCountry.value;
    if (validCountry =="") {
        p.innerHTML = "Enter Your Country!";
        return false;
      
    }
    else {
        p.innerHTML = null;
        return true;
    }
   
}
/*
@valpin
** use for pin validation
 */
function valPin(validPin){
    var div = validPin.parentNode;
    var p = div.querySelector("#valid");
    validPin = validPin.value;
    if (/^\d{5,6}$/.test(validPin)) {
       p.innerHTML = null;
        return true;
    }
    else {
        p.innerHTML = "Enter Your Proper Pincode!";
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
// function manage(txt) {
//     var bt = document.getElementById('button');
//     if (txt.value != '') {
//         bt.disabled = false;
//     }
//     else {
//         bt.disabled = true;
//     }
// }    