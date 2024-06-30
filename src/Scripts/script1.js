var tl = gsap.timeline()
tl.from(".l-nav a",{
  y:-20,
  duration:1,
  opacity:0,
  delay:0.2
})

tl.from(".description ",{
  y:-20,
  stagger:0.3,
  opacity:0,
  duration:1
})

