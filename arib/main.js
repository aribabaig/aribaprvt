var tl = gsap.timeline({scrollTrigger:{
  trigger:"#main",
//  markers:true,
  start:"50% 50%",
  end:"150% 50%",
  scrub:2,
  pin:true
}});
tl
.to("#center",{
 height: "100vh",
},'a')
.to("#top",{
  top: "-50%",
},'a')
.to("#bottom",{
  bottom: "-50%",
},'a')
.to("#top-h1",{
  top: "60%"
},'a')
.to("#bottom-h1",{
  bottom: "-30%"
},'a')
.to("#center-h1",{
 top: "-30%"
},'a')
.to(".content",{
 delay: -0.2,
 marginTop: "0%"
})
 var handle = () => {
  console.log("hy")
 }
 
 function display()  {
  document.getElementById("nav").classList.remove("nav").classList.add("home") ;
  console.log("hy")
 }

 

