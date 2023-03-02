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
function valAll(name, number, email, city, state, country, pin) {
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
  