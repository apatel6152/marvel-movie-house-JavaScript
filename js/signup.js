const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  let isMail = false;
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    isMail = true;
    showError(input, 'Email is not valid');
  }
  return isMail;
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  let isCheckLength = false;
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
    isCheckLength = true;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
    isCheckLength = true;
  } else {
    showSuccess(input);
  }
  return isCheckLength;
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  let isPasswordMatch = false;
  if (input1.value !== input2.value) {
    isPasswordMatch = true;
    showError(input2, 'Passwords do not match');
  }
  return isPasswordMatch;
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!checkRequired([username, email, password, password2])) {
    if (!checkLength(username, 3, 15) && !checkLength(password, 6, 25) && !checkEmail(email) && !checkPasswordsMatch(password, password2)) {
      let registerUsers = JSON.parse(localStorage.getItem("registerUsers")) !== null ? JSON.parse(localStorage.getItem("registerUsers")) : [];
      const result = registerUsers.filter(registerUser => registerUser.email === email.value);
      if (result.length === 0) {
        registerUsers.push({
          'name': username.value,
          'email': email.value,
          'password': password.value
        })
        localStorage.setItem('registerUsers', JSON.stringify(registerUsers));
        swal({
          title: "Congratulation",
          text: "You are successfully register with us.. Please SignIn",
          icon: "success",
        }).then((result) => {
          if (result) {
              window.location.replace('index.html');
          }
      });
      } else {
        swal({
          title: "Error!!",
          text: "Your email is alredy registerd. Please SignIn.",
          icon: "error",
        });
      }
    }
  }
});