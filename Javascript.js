
//contact from differrent page

if (localStorage.getItem("shift")>0){
  setTimeout(()=>{
    scrollTo(0,5000)
  },1000)
  localStorage.removeItem("shift")
}





////for navbar-change color on scroll

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").style.backgroundColor = "black";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "transparent";
  }
});



///adding name to next to let's cook

let login_logout_btn = document.querySelector(".out-in-btn");

if (localStorage.login == "true") {
  login_logout_btn.innerText = "Logout";

  document.querySelector(".text-on-firstpage").innerHTML +=
    "<span>,</span><span> </span>";
  for (let i = 0; i < localStorage.firstName.length; i++) {
    document.querySelector(
      ".text-on-firstpage"
    ).innerHTML += `<span>${localStorage.firstName[i]}</span>`;
  }
} else {
  login_logout_btn.innerText = "Login";
}



/////for typing let's cook with/without name 

const span_item = document.querySelectorAll(".text-on-firstpage span");

function span(i) {
  if (i == span_item.length) {
    return;
  }

  setTimeout(() => {
    span_item[i].style.opacity = 1;

    span_item[i].innerHTML += `<i class="cursor">|</i>`;

    i += 1;

    span(i);
  }, 600);
}
span(0);


//// login-logout-button

let time_count;
login_logout_btn.addEventListener("click", () => {
  if (localStorage.login == "true") {
    document.querySelector(".logout-warning").style.transform = "translateX(0)";
    document.querySelector(".firstpage").style.filter = "blur(5px)";
    document.querySelector(".secondpage").style.filter = "blur(5px)";
    document.querySelector(".thirdpage").style.filter = "blur(5px)";
    document.querySelector(".fourthpage").style.filter = "blur(5px)";
    document.querySelector("body").style.overflow = "hidden";
    
    document.querySelector(".navbar").style.filter = "blur(5px)";
  } else {
    location.href = "loginpage.html";
  }

///for timer on logout 
let n=10
function time_counting(){
    if (n==0){
        localStorage.login = false;
        location.href = "htmlanguage.html";
    }
    document.querySelector(".time-to-logout").innerText=n+" seconds"
    n--;
}

  time_count=setInterval(time_counting,1000)

  



//when clicked stay logged in

});
const logout_no = document.querySelector(".logout-no");
logout_no.addEventListener("click", () => {
    clearInterval(time_count)

  document.querySelector(".logout-warning").style.transform ="translateX(-2000px)";
  document.querySelector(".firstpage").style.filter = "blur(0px)";
  document.querySelector(".secondpage").style.filter = "blur(0px)";
  document.querySelector(".thirdpage").style.filter = "blur(0px)";
  document.querySelector(".fourthpage").style.filter = "blur(0px)";
  document.querySelector("body").style.overflow = "auto";
  document.querySelector("body").style.overflowX = "hidden";
  document.querySelector(".navbar").style.filter = "blur(0px)";
});

//when clicked logout now

const logout_yes = document.querySelector(".logout-yes");
logout_yes.addEventListener("click", () => {
  localStorage.login = false;
  location.href = "htmlanguage.html";
});



//feedback star rotation and color and reaction

let rated = 0;
const react = document.querySelector(".reaction-of-rating");
const star = document.querySelectorAll(".rating-star i");

react.innerText = "😕";
star.forEach((e) => {
  e.addEventListener("click", () => {
    const number = e.classList[2];
    rated = parseInt(number);
    for (let i = 4; i > number - 1; i--) {
      star[i].style.color = "rgba(174, 174, 174, 0.615)";
      star[i].style.rotate = "0deg";
    }

    for (let i = 0; i < number; i++) {
      star[i].style.color = "gold";
      star[i].style.rotate = "90deg";
    }

    switch (rated) {
      case 1:
        react.innerText = "☹️";
        break;
      case 2:
        react.innerText = "😟";
        break;
      case 3:
        react.innerText = "😔";
        break;
      case 4:
        react.innerText = "😊";
        break;
      case 5:
        react.innerText = "😁";
        break;
    }
  });
});

//feedback submition

const submit = document.querySelector(".feedback-submit");
const feedback = document.querySelector(".feedback-comment");
submit.addEventListener("click", () => {
  if (rated > 0 && feedback.value.length > 50) {
    star.forEach((e) => {
      e.style.color = "rgba(161, 161, 161, 0.582)";
    });

    document.querySelector(".profile2-name").innerText =
      localStorage.firstName + " " + localStorage.lastName;

    document.querySelectorAll(".profile2-rating i").forEach((e) => {
      e.style.color = "rgba(161, 161, 161, 0.582)";
    });

    for (let i = 0; i < rated; i++) {
      document.querySelectorAll(".profile2-rating i")[i].style.color =
        "rgb(235, 201, 4)";
    }
    document.querySelector(".profile2-comment").innerText = feedback.value;
    feedback.value = "";
  }
});

feedback.addEventListener("input", () => {
  document.querySelector(".comment-word-count").innerText =
    feedback.value.length;

  if (feedback.value.length <= 50 && feedback.value.length > 0) {
    feedback.style.backgroundColor = "rgba(251, 130, 130, 0.436)";
  } else {
    feedback.style.backgroundColor = "#f8ffce72";
  }
});






