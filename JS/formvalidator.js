//Form Validation

export default class formvalidator {
    constructor(selector) {
        this.form = document.querySelector(selector);
        this.inputsWithErrors = new Set();

        this.form.addEventListener("submit", e => {
            e.preventDefault();

            if (!this.hasErrors) {
                this.form.submit();
            }
        });
    }

    get hasErrors() {
        return this.inputsWithErrors.size > 0;
    }

    register(selector, check) {
        const inputField = this.form.querySelector(selector);
        const errorElement = inputField.closest(".form-floating").querySelector(".error_message");

        const execute = (hideErrors) => {
            const { pass, error } = check(inputField.value, inputField);

            if (!hideErrors) {
                errorElement.textContent = error || "";
            }

            if (!pass) {
                this.inputsWithErrors.add(inputField);
            } else {
                this.inputsWithErrors.delete(inputField);
            }
        };

        inputField.addEventListener("change", () => execute());
        execute(true);
    }
}