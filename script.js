const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

let savedUsername = "";
let savedEmail = "";
let savedPassword = "";

function showLogin() {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  clearMessages();
}

function showSignup() {
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
  clearMessages();
}

function clearMessages() {
  document.querySelectorAll(".error").forEach((error) => {
    error.innerText = "";
  });

  document.querySelectorAll(".success").forEach((success) => {
    success.innerText = "";
  });
}

function clearFields() {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}

function validateSignup() {
  clearMessages();

  let username = document.getElementById("signupUsername").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let password = document.getElementById("signupPassword").value.trim();

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  let valid = true;

  if (username === "") {
    document.getElementById("signupUsernameError").innerText =
      "Please enter username";
    valid = false;
  }

  if (email === "") {
    document.getElementById("signupEmailError").innerText =
      "Please enter email";
    valid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("signupEmailError").innerText =
      "Please enter valid email";
    valid = false;
  }

  if (password === "") {
    document.getElementById("signupPasswordError").innerText =
      "Please enter password";
    valid = false;
  } else if (password.length < 6) {
    document.getElementById("signupPasswordError").innerText =
      "Password must contain at least 6 characters";
    valid = false;
  }

  if (valid) {
    savedUsername = username;
    savedEmail = email;
    savedPassword = password;

    document.getElementById("signupSuccess").innerText = "Signup Successful!";

    clearFields();
  }
}

function validateLogin() {
  clearMessages();

  let loginInput = document.getElementById("loginEmail").value.trim();
  let loginPassword = document.getElementById("loginPassword").value.trim();

  let valid = true;

  if (loginInput === "") {
    document.getElementById("loginEmailError").innerText =
      "Please enter username or email";
    valid = false;
  }

  if (loginPassword === "") {
    document.getElementById("loginPasswordError").innerText =
      "Please enter password";
    valid = false;
  }

  if (!valid) {
    return;
  }

  if (savedUsername === "" && savedEmail === "") {
    document.getElementById("loginEmailError").innerText =
      "No account found. Please signup first.";
    return;
  }

  if (loginInput !== savedUsername && loginInput !== savedEmail) {
    document.getElementById("loginEmailError").innerText =
      "Username or email not found";
    return;
  }

  if (loginPassword !== savedPassword) {
    document.getElementById("loginPasswordError").innerText =
      "Incorrect password";
    return;
  }

  document.getElementById("loginSuccess").innerText = "Logged in Successfully!";

  clearFields();
}