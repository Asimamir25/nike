console.log("ds");
gsap.from(".left h6,.left h1,.left p ,.left button,.right .elem img,.nav1 h4", {
  opacity: 0,
  stagger: 0.14,
  // scrollTrigger:{
  //     trigger:".left h6",
  //     scroller:"body",
  //     markers:true,
  //     start:"top 24%"
  // }
});
var h4 = document.querySelector(".sp");
var h1 = document.querySelector(".nav");
const tog = () => {
  h1.classList.toggle("active");
};
h4.addEventListener("click", () => tog());
