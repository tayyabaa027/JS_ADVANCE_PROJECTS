const changemode = document.querySelector(".changer");
const body=document.querySelector("body");
const card=document.querySelector(".parent");
const input=document.querySelector(".prompt-input");
const dropdowns=document.querySelectorAll(".custom-select");


changemode.addEventListener("click", () => {
    const change = changemode.querySelector("i");

    change.classList.toggle("fa-moon");
    change.classList.toggle("fa-sun");
    if(change.classList.contains("fa-sun"))
    {
       body.style.background="linear-gradient(135deg,#182a5b,#5a3f88,#35559a)";
       body.style.color="white";
       card.style.background="#07173a";
       input.style.background="#081634";
       dropdowns.forEach((Element)=>{
        Element.style.background="#142345";
        Element.style.color="white";

       });

    }
    else{
         body.style.background="linear-gradient(135deg,#6b82c0,#927bb8,#6b93e7)";
       body.style.color="black";
       card.style.background="white";
       input.style.background="#f5f6ff";
       dropdowns.forEach((Element)=>{
        Element.style.background="#f5f6ff";
        Element.style.color="black";

       });
    }
});