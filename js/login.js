const form = document.getElementById('form');
const username = document.getElementById('fullName');
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

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!checkRequired([email, password])) {
    if (!checkLength(password, 6, 25) && !checkEmail(email)) {
      let registerUsers = JSON.parse(localStorage.getItem("registerUsers")) !== null ? JSON.parse(localStorage.getItem("registerUsers")) : [];
      const registerData = registerUsers.filter(registerUser => (registerUser.email === email.value));
      
      if (registerData.length === 0) {
        swal({
          title: "Error!!",
          text: "You are not registerd with us. Please create an Account.",
          icon: "error",
        }).then((result) => {
          if (result) {
            window.location.replace("signup.html");
          }
        });
      } else if (registerData[0].password !== password.value) {
        swal({
          title: "Error!!",
          text: "Your Password is incorrect.",
          icon: "error",
        });
      } else {
        swal({
          title: `Welcome, ${registerData[0].name}`,
          text: "You are successfully Logged In.",
          icon: "success",
        }).then((result) => {
          if (result) {
            sessionStorage.setItem('user',registerData[0].name)
            sessionStorage.setItem('login', true);
            window.location.replace("home.html");
          }
        });
      }
    }
  }
});
