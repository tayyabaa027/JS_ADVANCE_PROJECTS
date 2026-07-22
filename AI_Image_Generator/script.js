const changemode = document.querySelector(".changer");
const body = document.querySelector("body");
const card = document.querySelector(".parent");
const input = document.querySelector(".prompt-input");
const dropdowns = document.querySelectorAll(".custom-select");
const promptInput = document.querySelector(".prompt-input");
const promptBtn = document.querySelector(".prompt-btn");
const promptform = document.querySelector(".prompt-form");
const model = document.getElementById("model");
const count = document.getElementById("count");
const ratio = document.getElementById("ratio");

const examplePrompts = [
   "A magic forest with glowing plants and fairy homes among giant mushrooms",
   "An old steampunk airship floating through golden clouds at sunset",
   "A future Mars colony with glass domes and gardens against red mountains",
   "A dragon sleeping on gold coins in a crystal cave",
   "An underwater kingdom with merpeople and glowing coral buildings",
   "A floating island with waterfalls pouring into clouds below",
   "A witch's cottage in fall with magic herbs in the garden",
   "A robot painting in a sunny studio with art supplies around it",
   "A magical library with floating glowing books and spiral staircases",
   "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
];

changemode.addEventListener("click", () => {
   const change = changemode.querySelector("i");

   change.classList.toggle("fa-moon");
   change.classList.toggle("fa-sun");
   if (change.classList.contains("fa-sun")) {
      body.style.background = "linear-gradient(135deg,#182a5b,#5a3f88,#35559a)";
      body.style.color = "white";
      card.style.background = "#07173a";
      input.style.background = "#081634";
      dropdowns.forEach((Element) => {
         Element.style.background = "#142345";
         Element.style.color = "white";

      });

   }
   else {
      body.style.background = "linear-gradient(135deg,#6b82c0,#927bb8,#6b93e7)";
      body.style.color = "black";
      card.style.background = "white";
      input.style.background = "#f5f6ff";
      dropdowns.forEach((Element) => {
         Element.style.background = "#f5f6ff";
         Element.style.color = "black";

      });
   }
});
const createimgcard = (selectedModel, imageCount, aspectRatio, promptText) => {

}

const handleformsubmit = (e) => {
   e.preventDefault();
   const selectedModel = model.value;
   const aspectRatio = ratio.value || "1:1";
   const imageCount = parseInt(count.value) || 1;
   const promptText = promptInput.value.trim();
   createimgcard(selectedModel, imageCount, aspectRatio, promptText);

}

promptBtn.addEventListener("click", () => {
   promptInput.value = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
});

promptform.addEventListener("submit", handleformsubmit);