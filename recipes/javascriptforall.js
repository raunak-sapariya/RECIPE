///for navbar

document.querySelector(".home").addEventListener("click",()=>{
    location.href="../htmlanguage.html"
})


document.querySelector(".recipe").addEventListener("click",()=>{
    location.href="../recipepage.html"
})

document.querySelector(".about-us").addEventListener("click",()=>{
    location.href="../about-us.html"
})


//contact-us

let contact_btn=document.querySelector(".contact-us")
contact_btn.addEventListener("click",()=>{
  location.href="../htmlanguage.html"
  
  localStorage.setItem("shift",1)
  
})






//login-button

let login_logout_btn = document.querySelector(".out-in-btn");

if (localStorage.login == "true") {
  login_logout_btn.innerText = "Logout";
} else {
  login_logout_btn.innerText = "Login";
}


//login-logout-button

let time_count;
login_logout_btn.addEventListener("click", () => {
  if (localStorage.login == "true") {
    document.querySelector(".logout-warning").style.transform = "translateX(0)";
    document.querySelector(".toblur").style.filter = "blur(5px)";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".navbar").style.filter = "blur(5px)";
  } else {
    location.href = "../loginpage.html";
  }


//for timer on logout

let n=10
  function time_counting(){
      if (n==0){
        localStorage.login = false;
        location.href = "../htmlanguage";
      }
      document.querySelector(".time-to-logout").innerText=n+" seconds"
      n--;
  }
  
    time_count=setInterval(time_counting,1000)  


});

//when clicked stay logged in

const logout_no = document.querySelector(".logout-no");
logout_no.addEventListener("click", () => {
  clearInterval(time_count)
  document.querySelector(".logout-warning").style.transform =
    "translateX(-2000px)";
  document.querySelector(".toblur").style.filter = "blur(0px)";
  document.querySelector("body").style.overflow = "auto";
  document.querySelector("body").style.overflowX = "hidden";
  document.querySelector(".navbar").style.filter = "blur(0px)";

});


//when clicked logout now

const logout_yes = document.querySelector(".logout-yes");
logout_yes.addEventListener("click", () => {
  localStorage.login = false;
  location.href = "../htmlanguage.html";

});


