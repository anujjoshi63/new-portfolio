const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll('.nav-links li' );
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  navLinks.forEach((link,index) => {
    // console.log(link)
    if(link.style.animation) link.style.animation = '';
    else link.style.animation = `navLinkFade 0.6s ease  forwards ${index/5 +0.4}s`;
  })

  if(  document.querySelector('.line2').style.opacity == '0'){
    document.querySelector('.line1').style.transform = 'rotate(0)  translateY(0px)'
    document.querySelector('.line2').style.opacity = '1'
    document.querySelector('.line3').style.transform = 'rotate(0)  translateY(0px)'
  }
  else{
  document.querySelector('.line1').style.transform = 'rotate(-45deg)  translateY(8px)'
  document.querySelector('.line2').style.opacity = '0'
  document.querySelector('.line3').style.transform = 'rotate(45deg)  translateY(-8px)'
  }
});
