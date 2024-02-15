import './style.css';

const locationForm = document.querySelector('.location-form');

const mailField = locationForm.querySelector('#mail');
const checkEmailValidity = function validate() {
  const constraint = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (constraint.test(mailField.value)) {
    mailField.setCustomValidity('');
  } else {
    mailField.setCustomValidity('Invalid field');
  }
};
mailField.addEventListener('input', checkEmailValidity);

const countryField = locationForm.querySelector('#country');
const checkCountryValidity = function validate() {
  const countrySpan = locationForm.querySelector('#country-span');
  if (countryField.value.length > 2) {
    countryField.setCustomValidity('');
  } else {
    countryField.setCustomValidity('Invalid field');
    countrySpan.textContent = 'No abbreviations allowed';
  }
};

countryField.addEventListener('input', checkCountryValidity);

const zipCodeField = locationForm.querySelector('#zip-code');
const checkZipCodeValidity = function validate() {
  const zipCodeRegex = /^\d{5}(-\d{4})?$/;
  const zipCodeSpan = locationForm.querySelector('#zip-code-span');
  if (zipCodeRegex.test(zipCodeField.value)) {
    zipCodeField.setCustomValidity('');
  } else if (zipCodeField.value.length < 5) {
    zipCodeField.setCustomValidity('Invalid field');
    zipCodeSpan.textContent = 'The zip code must be between 5 and 10 characters long';
  } else {
    zipCodeField.setCustomValidity('Invalid field');
    zipCodeSpan.textContent = 'The zip code must match the format "XXXXX" or "XXXXX-XXXX"';
  }
};
zipCodeField.addEventListener('input', checkZipCodeValidity);

const passwordField = locationForm.querySelector('#password');
const checkPasswordValidity = function validate() {
  const passwordSpan = locationForm.querySelector('#password-span');
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  if (passwordRegex.test(passwordField.value)) {
    passwordField.setCustomValidity('');
  } else {
    passwordField.setCustomValidity('Invalid field');
    if (passwordField.value.length < 8) {
      passwordSpan.textContent = 'Password must be at least 8 characters long';
    } else if (!/[A-Z]/.test(passwordField.value)) {
      passwordSpan.textContent = 'Password must have an uppercase letter';
    } else if (!/[a-z]/.test(passwordField.value)) {
      passwordSpan.textContent = 'Password must have a lowercase letter';
    } else if (!/\d/.test(passwordField.value)) {
      passwordSpan.textContent = 'Password must have a number';
    } else if (!hasSpecialChar.test(passwordField.value)) {
      passwordSpan.textContent = 'Special character required (@$!%*?&).';
    }
  }
};
passwordField.addEventListener('input', checkPasswordValidity);

const confirmPasswordField = locationForm.querySelector('#password-confirmation');
const checkEqualPassword = function passwordConfirmation() {
  const passwordConfirmationSpan = locationForm.querySelector('#password-confirmation-span');
  if (confirmPasswordField.value === passwordField.value) {
    confirmPasswordField.setCustomValidity('');
  } else {
    confirmPasswordField.setCustomValidity('Invalid field');
    passwordConfirmationSpan.textContent = "Passwords don't match";
  }
};
confirmPasswordField.addEventListener('input', checkEqualPassword);
passwordField.addEventListener('input', checkEqualPassword);
