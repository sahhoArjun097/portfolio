var tl = gsap.timeline()
tl.from(".l-nav a", {
  y: -20,
  duration: 1,
  opacity: 0,
  delay: 0.2
})

tl.from(".description .nav-skill", {
  y: -20,
  stagger: 0.3,
  opacity: 0,
  duration: 1
})

tl.from(".description .nav-work", {
  y: -20,
  stagger: 0.3,
  opacity: 0,
  duration: 1
})

tl.from(".description .nav-edu", {
  y: -20,
  stagger: 0.3,
  opacity: 0,
  duration: 1
})

tl.from(".description .nav-resum", {
  y: -20,
  stagger: 0.3,
  opacity: 0,
  duration: 1
})

tl.from(".description .nav-contact", {
  y: -20,
  stagger: 0.3,
  opacity: 0,
  duration: 1
})
var cross = document.querySelector(".sheet-content i")
var menu = document.querySelector("#present-midnav #menuButton")

var til = gsap.timeline()
til.to(".menu-sheet", {
  right: 0,
  duration: 0.4
})
til.from(".sheet-content h4", {
  x: 100,
  duration: 0.5,
  stagger: 0.3,
  opacity: 0,
})
til.from(".sheet-content i", {
  opacity: 0
})

til.pause()



menu.addEventListener("click", function () {
  til.play()
})

cross.addEventListener("click", function () {
  til.reverse()
})