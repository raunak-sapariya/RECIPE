///for contact

let contact_btn=document.querySelector(".contact-us")
contact_btn.addEventListener("click",()=>{
  location.href="htmlanguage.html"
  
  localStorage.setItem("shift",1)
  
})





////for navbar-change color on scroll

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      document.querySelector(".navbar").style.backgroundColor = "black";
    } else {
      document.querySelector(".navbar").style.backgroundColor = "transparent";
    }
  });



  

//// login-logout-button
let login_logout_btn = document.querySelector(".out-in-btn");
let time_count;
login_logout_btn.addEventListener("click", () => {
  if (localStorage.login == "true") {
    document.querySelector(".logout-warning").style.transform = "translateX(0)";
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




// change on hover


document.querySelectorAll(".team-intro section").forEach((e)=>{
  console.log(e.classList)
  e.addEventListener("mouseenter",()=>{
    document.querySelector(".team-container").style.backgroundColor=e.classList[1]
    //////////////////////////////////////////////////////////////////////////////
    document.querySelectorAll(".team-intro section").forEach((e)=>{
      e.style.opacity=0.4
    })
    e.style.opacity=1

  })
  e.addEventListener("mouseleave",()=>{
    document.querySelector(".team-container").style.backgroundColor="rgb(232, 232, 232)"

    ////////////////////////////////////////////////////////////////////////////////////////
    document.querySelectorAll(".team-intro section").forEach((e)=>{
      e.style.opacity=1
    })
  })
})
