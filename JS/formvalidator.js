//Form Validation

const nameError = document.querySelector("#error_message");

function validateName() {
    var name = document.querySelector("#txtname").value;
    if (!name.match(/^[A-Za-z]+$/)) {
        nameError.innerHTML = 'Name can only contain letters!';
        setTimeout(function() { nameError.style.display = "none"; }, 3000);
        return false;
    }
}