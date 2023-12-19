let menuButton = document.querySelector("#nav-buttons-small");
let closeButton = document.querySelector("#nav-close");
menuButton.addEventListener("click",function(){
    console.log("Hai");
    // document.querySelector(".nav-links").classList.add("dynamic-links");
    document.querySelector(".nav-links").style.top ="0";
})

closeButton.addEventListener("click",function(){
    document.querySelector(".nav-links").style.top = "-100%"
})
