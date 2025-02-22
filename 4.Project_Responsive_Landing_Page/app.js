const navBtn = document.querySelector(".menu");
const menuBtn = document.querySelector(".menuBtn");


menuBtn.addEventListener("click", ()=> {
  
    navBtn.classList.toggle("active");
    console.log("hello")

})


navBtn.addEventListener("click", ()=> {
    navBtn.style =
    ' position: flex',
       ' right: -100%';
       navBtn.classList.toggle("active");
    console.log("clied")
})
