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
@isRegxValid
** use for validation
** Name,Mobile Number,Email,Pin
*/
function isRegxValid(element, regx, massage) {
    var parentDiv = element.parentNode;
    var massageElement = parentDiv.querySelector("#valid");
    var elementValue = element.value;
    if (regx.test(elementValue)) {
        massageElement.innerHTML = null
        return true;
    } else {
        massageElement.innerHTML = massage;
        return false;
    }    
}

/* 
@isValuNull
** use for validation
** City,State,Country
*/
function isValueNull(element, massage) {
    var parentDiv = element.parentNode;
    var massageElement = parentDiv.querySelector("#valid");
    var elementValue = element.value;
    if(elementValue == "") {
        massageElement.innerHTML = massage;
        return false;
    } else {
        massageElement.innerHTML = null;
        return true;
    }
}


/*
@valAll
** above all functon ar true then this function allow the submit data in table
 */
function valAll(id, name, number, email, city, state, country, pin) {
    if (valId(id) && isRegxValid(name, /^[a-zA-Z]+([ ][a-zA-Z]+)*$/, "Invalid Name!")
        && isRegxValid(number, /^\d{10}$/, "Invalid Phone Number!")
        && isRegxValid(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid Mail!")
        && isValueNull(city, "Enter Your City!")
        && isValueNull(state, "Enter Your State!")
        && isValueNull(country, "Enter Your Country!")
        && isRegxValid(pin, /^\d{5,6}$/, "Enter Your Proper Pincode!") ) {
            return true;
        } else {
            return false;
        }
}
  
/*
@valAll
** use for validation
** validation : all function are true the work on this vlidation
*/
function valAllEdit(name, number, email, city, state, country, pin) {
    if (isRegxValid(name, /^[a-zA-Z]+([ ][a-zA-Z]+)*$/, "Invalid Name!")
        && isRegxValid(number, /^\d{10}$/, "Invalid Phone Number!")
        && isRegxValid(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid Mail!")
        && isValueNull(city, "Enter Your City!")
        && isValueNull(state, "Enter Your State!")
        && isValueNull(country, "Enter Your Country!")
        && isRegxValid(pin, /^\d{5,6}$/, "Enter Your Proper Pincode!") ) {
            return true;
        } else {
            return false;
        }
}
