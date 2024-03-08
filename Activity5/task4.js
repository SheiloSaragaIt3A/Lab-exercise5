
let passwordInput = prompt("Enter a password:");
let minLength = 8;
let isLengthValid = passwordInput.length >= minLength;
let hasUppercase = /[A-Z]/.test(passwordInput);
let hasLowercase = /[a-z]/.test(passwordInput);
let hasNumber = /\d/.test(passwordInput);
let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput);

let strengthRating;
if (isLengthValid && hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
    strengthRating = "Strong";
} else {
    strengthRating = "Weak";
}
console.log("Password Strength:", strengthRating);
if (strengthRating === "Weak") {
    console.log("Please follow the recommended criteria for a stronger password.");
}