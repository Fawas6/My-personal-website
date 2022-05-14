//main

import formvalidator from "./formvalidator.js";

const fv = new formvalidator(".row");

function validatelength(value, inputField) {
    if (value.match(/^[A-Za-z]+$/)) {
        return {
            pass: false,
            error: "Name can only contain letters."
        };
    }

    return {
        pass: true
    };
}

fv.register("#txtname", validatelength);

window.fv = fv;