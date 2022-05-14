//Form Validation

const form = document.querySelector("form");
const txtname = document.querySelector("txt");
const email = document.querySelector("email");
const errormessage = document.querySelector("error");

function validate() {
    const regEx = /^[A-Za-z]+$/;
    if (txtname.value.match(regEx)) {
        return true;
    }
    else {
        alert("Please enter letters only.");
        return false;
    }
}

form.addEventListener("submit",validate);



