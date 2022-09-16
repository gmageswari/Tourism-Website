let signedUpUsers;
let userArr = localStorage.getItem("users");
console.log(userArr);
if (userArr !== null) {
  signedUpUsers = JSON.parse(userArr);
} else {
  signedUpUsers = [];
}
function showSignupPage() {
  let signUpcontainer = document.getElementById("signup-container");
  signUpcontainer.style.display = "flex";
  let uiEle = document.getElementById("total");
  uiEle.style.display = "none";
}

function signUpClicked(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  signedUpUsers.push({
    username,
    password,
  });
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  localStorage.setItem("users", JSON.stringify(signedUpUsers));
  let signUpcontainer = document.getElementById("signup-container");
  signUpcontainer.style.display = "none";
  let uiEle = document.getElementById("total");
  uiEle.style.display = "flex";
  console.log("Stored successfully");
}

let loginButton = document.querySelector("#loginButton");
let userName = document.querySelector("#loginUsername");
let LoginPassword = document.querySelector("#loginPassword");
let loginSuccessOrFailure = document.querySelector("#p1");

let passwordError = document.querySelector("#p2");

loginButton.onclick = function (event) {
  event.preventDefault();

  loginSuccessOrFailure.textContent = "";
  passwordError.textContent = "";

  if (userName.value === "" && LoginPassword.value === "") {
    loginSuccessOrFailure.textContent = "Enter Username";
    passwordError.textContent = "Enter Password";
    return;
  } else if (userName.value === "") {
    loginSuccessOrFailure.textContent = "Enter Username";
    return;
  } else if (LoginPassword.value === "") {
    passwordError.textContent = "Enter Password";
    return;
  }

  let userThere = false;
  let passwordIsCorrect = false;
  let userArrayJson = localStorage.getItem("users");
  let userArray = JSON.parse(userArrayJson);

  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].username === userName.value) {
      userThere = true;
      if (userArray[i].password === LoginPassword.value) {
        passwordIsCorrect = true;
        loginSuccessOrFailure.textContent = "Login Successfull";

        loginsuccesfull(userArray[i].username);

        document.getElementById("nav").className =
          "navigation-bar container-yes";
        document.getElementById("home").className = "container-yes";

        break;
      }
      break;
    }
  }

  if (userThere === false) {
    loginSuccessOrFailure.textContent = "Username is wrong";
  } else if (passwordIsCorrect === false) {
    loginSuccessOrFailure.textContent = "Password is wrong";
  }
};

function loginsuccesfull(name) {
  let x = document.getElementById("after-login");
  x.style.display = "flex";
  let total = document.getElementById("total");
  total.style.display = "none";
  document.getElementById("name").innerHTML = `${name}`;
}

function homeClicked() {
  document.getElementById("contact").className = "container-no";
  document.getElementById("home").className = "container-yes";
  document.getElementById("trending").className = "container-no";
}

function trendingClicked() {
  document.getElementById("contact").className = "container-no";
  document.getElementById("home").className = "container-no";
  document.getElementById("trending").className = "container-yes";
}

function contactClicked() {
  document.getElementById("contact").className = "container-yes";
  document.getElementById("home").className = "container-no";
  document.getElementById("trending").className = "container-no";
}

function logout() {
  document.getElementById("nav").className = "navigation-bar container-no";
  document.getElementById("contact").className = "container-no";
  document.getElementById("home").className = "container-no";
  document.getElementById("trending").className = "container-no";
  document.getElementById("total").style.display = "flex";
}
