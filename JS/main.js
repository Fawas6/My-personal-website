//main

import formvalidator from "./formvalidator.js";

const fv = new formvalidator(".row");

function validatelength(value, inputField) {
    if (value.length === 0 || value.length > 5) {
        return {
            pass: false,
            error: "Username must be between 1 - 5 characters."
        };
    }

    return {
        pass: true
    };
}

fv.register("#txt", validatelength);

window.fv = fv;