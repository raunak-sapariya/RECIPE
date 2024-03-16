
//contact-us
let contact_btn=document.querySelector(".contact-us")
contact_btn.addEventListener("click",()=>{
  location.href="htmlanguage.html"
  
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
    location.href = "loginpage.html";
  }


//for timer on logout

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
  location.href = "htmlanguage.html";

});


//for arranging background glass 

let to = 155;
let all_cards = document.querySelectorAll(".background-glass");

for (let i = 0; i < all_cards.length; i++) {

 /*  if (i % 2 == 0) {
    all_cards[i].style.left = "-2000px";
  } else {
    all_cards[i].style.left = "2000px";
  }
 */
  all_cards[i].style.translate = "0 " + to + "%";
  to += 135;
}



//for 3d figure

setTimeout(() => {
  document
    .querySelector(".donut-3d")
    .setAttribute("camera-orbit", "0deg 65deg");
}, 3150);

document.querySelector(".donut-3d").addEventListener("mouseup", () => {
  document
    .querySelector(".donut-3d")
    .setAttribute("camera-orbit", "0deg 65deg");
});


//effect on scroll  
/*

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 400) {
    all_cards[0].style.left = "calc(50% - 550px)";
  } else {
    all_cards[0].style.left = "-2000px";
  }
  if (window.scrollY > 900+100) {
    all_cards[1].style.left = "calc(50% - 550px)";
  } else {
    all_cards[1].style.left = "2000px";
  }
  if (window.scrollY > 1500+100) {
    all_cards[2].style.left = "calc(50% - 550px)";
  } else {
    all_cards[2].style.left = "-2000px";
  }
  if (window.scrollY > 2100+100) {
    all_cards[3].style.left = "calc(50% - 550px)";
  } else {
    all_cards[3].style.left = "2000px";
  }
  if (window.scrollY > 2700+100) {
    all_cards[4].style.left = "calc(50% - 550px)";
  } else {
    all_cards[4].style.left = "-2000px";
  }
  if (window.scrollY > 3300+100) {
    all_cards[5].style.left = "calc(50% - 550px)";
  } else {
    all_cards[5].style.left = "2000px";
  }
  if (window.scrollY > 4000+100) {
    all_cards[6].style.left = "calc(50% - 550px)";
  } else {
    all_cards[6].style.left = "-2000px";
  }
  if (window.scrollY > 4600+100) {
    all_cards[7].style.left = "calc(50% - 550px)";
  } else {
    all_cards[7].style.left = "2000px";
  }
  if (window.scrollY > 5200+100) {
    all_cards[8].style.left = "calc(50% - 550px)";
  } else {
    all_cards[8].style.left = "-2000px";
  }
  if (window.scrollY > 5800+100) {
    all_cards[9].style.left = "calc(50% - 550px)";
  } else {
    all_cards[9].style.left = "2000px";
  }
  if (window.scrollY > 6400+100) {
    all_cards[10].style.left = "calc(50% - 550px)";
  } else {
    all_cards[10].style.left = "-2000px";
  }
  if (window.scrollY > 7000+100) {
    all_cards[11].style.left = "calc(50% - 550px)";
  } else {
    all_cards[11].style.left = "2000px";
  }
 
});
*/


let card1_pos=-1300
let card2_pos=-2500
let card3_pos=-3700
let card4_pos=-4900
let card5_pos=-6100
let card6_pos=-7400
let card7_pos=-8550

let card8_pos=-9800
let card9_pos=-11000
let card10_pos=-12300
let card11_pos=-13500
let card12_pos=-14600







///animation-btn

let btn_clicked=0;
let animation_btn=document.querySelector(".btn")
animation_btn.addEventListener("click",()=>{
  if (btn_clicked==1){
    btn_clicked=0;
    animation_btn.style.backgroundColor="grey"
    document.querySelector(".circle").style.translate="0px 0px"
   for(let i=0;i<all_cards.length;i++){
    if (i%2==0){
    all_cards[i].style.left="calc(50% - 550px)"
    }
    else{
      all_cards[i].style.right="calc(50% - 550px)"
    }
   

    }
   
    window.removeEventListener("scroll",effect)
  }
  else{
    btn_clicked=1;
    animation_btn.style.backgroundColor="blue"
    document.querySelector(".circle").style.translate="33.2px 0px"
    window.addEventListener("scroll",effect)

  }
})

function effect(){
  all_cards[0].style.left=(window.scrollY*2)+card1_pos+"px"
  all_cards[1].style.right=(window.scrollY*2)+card2_pos+"px"
  all_cards[2].style.left=(window.scrollY*2)+card3_pos+"px"
  all_cards[3].style.right=(window.scrollY*2)+card4_pos+"px"
  all_cards[4].style.left=(window.scrollY*2)+card5_pos+"px"
  all_cards[5].style.right=(window.scrollY*2)+card6_pos+"px"
  all_cards[6].style.left=(window.scrollY*2)+card7_pos+"px"
  all_cards[7].style.right=(window.scrollY*2)+card8_pos+"px"
  all_cards[8].style.left=(window.scrollY*2)+card9_pos+"px"
  all_cards[9].style.right=(window.scrollY*2)+card10_pos+"px"
  all_cards[10].style.left=(window.scrollY*2)+card11_pos+"px"
  all_cards[11].style.right=(window.scrollY*2)+card12_pos+"px"

}
