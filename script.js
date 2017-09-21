// Evenement

const panels = document.querySelectorAll(".panel");

    
function toggleOpen() {
    panels.forEach(panel => panel.classList.remove("open"));
    this.classList.toggle("open");
};

function toggleActive(e) {
    if (e.propertyName.includes("flex")) this.classList.toggle("open-active");
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

//Evenment

// Stop carousel 
/*$('.carousel').carousel({
  interval: false
   });
*/
// Vidéo

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#moony button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

// Fin video

alert('salut');