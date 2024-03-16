



//Login



document.querySelector(".text-to-add").innerText=", "+localStorage.firstName


//Menu Bar
const open_menu=document.getElementById("menu-bar")

open_menu.addEventListener("click",()=>{

    document.getElementById("menu-slide").classList+=" menu-bar-clicked";
    document.getElementById("menu-bar").style.transform="rotate(90deg)"   
    document.getElementById("firstpage").style.filter="blur(8px)"
 
})
const close_menu=document.getElementById("close-menu")
close_menu.addEventListener("click",()=>{

    document.getElementById("menu-slide").classList="menu-bar-slide";
    document.getElementById("menu-bar").style.transform="rotate(0deg)"   
    document.getElementById("firstpage").style.filter="blur(0px)"
})





//Phone Slider 

const bodybg=document.querySelector(".secondpage")
const img=document.querySelectorAll(".list-item");
const nextbtn=document.getElementById("next")
let length=img.length-1;
let count=1;
nextbtn.addEventListener("click",()=>{
    if (count===img.length-1){
        count=0;
        changedisplay(img)

    }
    else{
        img[count].removeAttribute("hidden","hidden")
        count++;

        
    }
})
function changedisplay(img){
    for (let i=0;i<img.length-1;i++){
        img[i].setAttribute("hidden","hidden")
    }
}
