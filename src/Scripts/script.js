var main = document.querySelector("#main")
var curser = document.querySelector("#curser")
var myimage = document.querySelector("#rigth-box")

main.addEventListener("mousemove", function(deft) {
   gsap.to(curser,{
    x:deft.x,
    y:deft.y,
    duration:1
   })
});
myimage.addEventListener("mouseenter", function(){
  curser.innerHTML="Hi!"

  gsap.to(curser,{
  scale:1.5,
  backgroundColor:"#eeeeee62"
  })
})

myimage.addEventListener("mouseout", function(){
  curser.innerHTML=" "
  gsap.to(curser,{
  scale:1, 
  
  backgroundColor:"#eee"
  })
})


