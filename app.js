const signupForm = document.querySelector(".signup-form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

signupForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    checkInputs();
});

// Function for Checking Inputs
function checkInputs() {
    // Values from the inputs
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    // First Name
    if (!firstNameValue) {
        setErrorFor(firstName, "First Name cannot be empty");
    } else {
        setSuccessFor(firstName);
    }

    // Last Name
    if (!lastNameValue) {
        setErrorFor(lastName, "Last Name cannot be empty");
    } else {
        setSuccessFor(lastName);
    }

    // Email
    if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email");
    } else {
        setSuccessFor(email);
    }

    // Password
    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
    } else if (passwordValue.length < 8 || passwordValue.length > 15) {
        setErrorFor(password, "Password has to be between 8 to 15 characters");
    } else if (!isValidPassword(passwordValue)) {
        setErrorFor(password, "Mixture of a-z, A-Z, 0-9, special characters");
    } else {
        setSuccessFor(password);
    }

    // If all requirements are met, reset the form.
    const allInputs = document.querySelectorAll(".signup-form__input-control");
    const allInputsArr = [...allInputs];

    if (
        allInputsArr.every((el) => el.className.includes("show-input-success"))
    ) {
        allInputsArr.forEach((el) => (el.value = ""));
    }
}
