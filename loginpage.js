let userEmail = document.getElementById("email");
let userPass = document.getElementById("password");
let login_btn = document.getElementById("login-button");
const emailPattern = /\w{1,}@(gmail.com|sicsr.ac.in)/i;
const passPattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$%&]).{8,}$/i;

userEmail.addEventListener("input", () => {
  const emailTest = emailPattern.test(userEmail.value);

  if (!emailTest) {
    userEmail.style.background = "rgb(252, 158, 158)";
  } else {
    userEmail.style.background = "rgb(194, 255, 196)";
  }
});
userPass.addEventListener("input", () => {
  const passTest = passPattern.test(userPass.value);
  if (passTest) {
    userPass.style.background = "rgb(194, 255, 196)";
  } else {
    userPass.style.background = "rgb(252, 158, 158)";
  }
});

login_btn.addEventListener("click", () => {
  userPass.classList = "";
  userEmail.classList = "";
  document.querySelector(".login-text").style.display = "none";
  document.querySelector(".loading-image").style.display = "inline";
  setTimeout(() => {
    let emailMatch = 0;
    let passMatch = 0;
    let firstName = "";
    let lastName = "";

    for (let i = 0; i < users.length; i++) {
      if (!emailPattern.test(userEmail.value) || userEmail.value == "") {
        userEmail.classList += " login-shake";
        userEmail.style.background = "rgb(252, 158, 158)";
      }

      if (!passPattern.test(userPass.value || userPass.value == "")) {
        userPass.classList += " login-shake";
        userPass.style.background = "rgb(252, 158, 158)";
      }

      /*    if (userEmail.value=='' || userPass.value==''){
                document.getElementById("wrong-info").innerText=""
                document.getElementById("blank-info").innerText="Fill all the boxes"
                document.querySelector(".loading-image").style.display="none"
                document.querySelector(".login-text").style.display="inline"
                
                filled=1
                break
            }  */

      if (users[i].Email.toLowerCase() === userEmail.value.toLowerCase()) {
        emailMatch = 1;
      }
      if (users[i].Pass == userPass.value) {
        passMatch = 1;
      }
      if (
        users[i].Email.toLowerCase === userEmail.value.toLowerCase &&
        users[i].Pass == userPass.value
      ) {
        firstName = users[i].firstName;
        lastName = users[i].lastName;
      }
    }

    if (emailMatch == 1 && passMatch == 1) {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("login", true);
      location.href = "htmlanguage.html";
    } else if (emailMatch == 1 && passMatch == 0) {
      userPass.classList += " login-shake";
      userPass.style.background = "rgb(252, 158, 158)";
    } else if (emailMatch == 0 && (passMatch == 0 || passMatch == 1)) {
      userEmail.classList += " login-shake";
      userEmail.style.background = "rgb(252, 158, 158)";
    }
    document.querySelector(".loading-image").style.display = "none";
    document.querySelector(".login-text").style.display = "inline";
  }, 2500);
});

//create account
const createAccount = document.getElementById("create-account");
createAccount.addEventListener("click", () => {
  document.getElementById("blank-info").innerText = "";
  document.getElementById("wrong-info").innerText = "";
  userEmail.value = "";
  userPass.value = "";

  document.querySelector(".login-image").classList += " login-image-transition";
});

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const createEmail = document.getElementById("create-email");
const createPass = document.getElementById("create-password");

document.querySelector(".createAccount").addEventListener("click", () => {
  const createFName = document.getElementById("firstname").value;
  const createLName = document.getElementById("lastname").value;
  const email = document.getElementById("create-email").value;
  const password = document.getElementById("create-password").value;
  if (
    firstName.value.length > 3 &&
    lastName.value.length > 3 &&
    emailPattern.test(createEmail.value) &&
    passPattern.test(createPass.value)
  ) {
    const element = {
      firstName: createFName,
      lastName: createLName,
      Email: email,
      Pass: password,
    };

    users.push(element);
    document.querySelector(".login-image").classList = "login-image";
  }
});

document.querySelector(".already-member").addEventListener("click", () => {
  document.querySelector(".login-image").classList = "login-image";
});

let eyeclicked = 0;
let eyebtn = document.querySelector("#eye-button");

eyebtn.addEventListener("click", () => {
  if (eyeclicked == 0) {
    document.querySelector("#eye-image").classList += " open-eye";
    eyeclicked = 1;
    document.getElementById("password").type = "text";
  } else {
    document.querySelector("#eye-image").classList = "eye-image";
    eyeclicked = 0;
    document.getElementById("password").type = "password";
  }
});

let createeyeclicked = 0;
let createeyebtn = document.querySelector("#eye-button-create");

createeyebtn.addEventListener("click", () => {
  if (eyeclicked == 0) {
    document.querySelector("#eye-image-create").classList += " open-eye-create";
    eyeclicked = 1;
    document.getElementById("create-password").type = "text";
  } else {
    document.querySelector("#eye-image-create").classList = "eye-image-create";
    eyeclicked = 0;
    document.getElementById("create-password").type = "password";
  }
});

firstName.addEventListener("input", () => {
  if (firstName.value.length > 3) {
    firstName.style.backgroundColor = "rgb(194, 255, 196)";
  } else {
    firstName.style.backgroundColor = "rgb(252, 158, 158)";
  }
});
lastName.addEventListener("input", () => {
  if (lastName.value.length > 3) {
    lastName.style.backgroundColor = "rgb(194, 255, 196)";
  } else {
    lastName.style.backgroundColor = "rgb(252, 158, 158)";
  }
});
createEmail.addEventListener("input", () => {
  if (emailPattern.test(createEmail.value)) {
    createEmail.style.backgroundColor = "rgb(194, 255, 196)";
  } else {
    createEmail.style.backgroundColor = "rgb(252, 158, 158)";
  }
});

createPass.addEventListener("input", () => {
  if (passPattern.test(createPass.value)) {
    createPass.style.backgroundColor = "rgb(194, 255, 196)";
  } else {
    createPass.style.backgroundColor = "rgb(252, 158, 158)";
  }
});
