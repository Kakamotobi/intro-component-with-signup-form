const signupForm = document.querySelector(".signup-form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

signupForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    checkInputs();
});
