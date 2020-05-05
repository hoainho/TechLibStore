////Setting
$(document).ready(function() {

    var active1 = false;
    var active2 = false;
    var active3 = false;
    var active4 = false;
  
      $('.nav-bg--per').on('mousedown touchstart', function() {
      
      if (!active1) $(this).find('.nav-bg--per__icon1').css({'background-color': 'black', 'transform': 'translate(0px,125px)'});
      else $(this).find('.nav-bg--per__icon1').css({'background-color': 'dimGray', 'transform': 'none'}); 
       if (!active2) $(this).find('.nav-bg--per__icon2').css({'background-color': 'black', 'transform': 'translate(60px,105px)'});
      else $(this).find('.nav-bg--per__icon2').css({'background-color': 'darkGray', 'transform': 'none'});
        if (!active3) $(this).find('.nav-bg--per__icon3').css({'background-color': 'black', 'transform': 'translate(105px,60px)'});
      else $(this).find('.nav-bg--per__icon3').css({'background-color': 'silver', 'transform': 'none'});
        if (!active4) $(this).find('.nav-bg--per__icon4').css({'background-color': 'black', 'transform': 'translate(125px,0px)'});
      else $(this).find('.nav-bg--per__icon4').css({'background-color': 'silver', 'transform': 'none'});
      active1 = !active1;
      active2 = !active2;
      active3 = !active3;
      active4 = !active4;
        
      });
  });


////Time
function clock(){
  var hours = document.getElementById('hour');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
  var interval = setInterval(clock,1000);
 
////Wait

  // var waitsale = document.getElementById("waitsale")
  // window.addEventListener("scroll",function() {
  //   waitsale.style.left = +window.pageYOffset + "px";
  // })

////Waiting
// $(document).ready(function(){
//   $(window).scroll(function(event){
//       var head = $('html,body').scrollTop();
//       var lock = $('.sale').offset().top;
//       console.log(lock);
//     //----------function
//           if(head > lock-400){
//             $('.time').addClass('Bouncein animated');
//           }
//   });
// });
// $(document).ready(function(){
//   $(window).scroll(function(){
//     $('.nav-bg').css("opacity",1 - $(window).scrollTop()/500)
//   });
// });
window.onload = function(){
    const TIME =document.querySelector(".time");
    const SALE =document.querySelector(".headland-content--text");
    const BTN =document.querySelector(".btn-box");
    window.addEventListener('scroll',scrolltime);
    window.addEventListener('scroll',scrollsale);
    function scrolltime(){
        if(window.scrollY >=750) {
          TIME.style.opacity = '1';
          TIME.style.transform = 'translateX(0px)';
          TIME.style.transition = '1s ease-in-out';
          TIME.style.transition = '2s ease-in-out';
        }
        else
        {
          TIME.style.opacity = '0';
          TIME.style.transform = 'translateX(-10rem)';
        }
    }
    function scrollsale(){
      if(window.scrollY >=400) {
        SALE.style.opacity = '1';
        SALE.style.transform = 'translateY(0px)';
        SALE.style.transition = '1s ease-in-out';
      }
      else
      {
        SALE.style.opacity = '0';
        SALE.style.transform = 'translateY(-10rem)';
      }
  }
   
};

////BTN-OPTION

// var h1 = document.querySelector("btn-option");

// h1.addEventListener("input", function() {
//   this.setAttribute("data-heading", this.innerText);
// });
// var h1 = document.querySelector("sidebar-product--link");

// h1.addEventListener("input", function() {
//   this.setAttribute("data-sidebar", this.innerText);
// });
//---------
//======OVERLAY
gsap.to('.taitrang-1',{
  duration :2,
  delay:.2,
  ease: "steps.InOut",
  width:0
})
gsap.to('.taitrang-2',{
  duration :1.5,
  delay:.4,
  ease: "bounce.InOut",
  width:0
})
gsap.to('.taitrang-3',{
  duration :1.5,
  delay:.6,
  ease: "bounce.InOut",
  width:0
})
gsap.to('.taitrang-4',{
  duration :1.5,
  delay:.8,
  ease: "bounce.InOut",
  width:0
})
gsap.to('.taitrang-5',{
  duration :1.5,
  delay:1,
  ease: "bounce.InOut",
  width:0
})
gsap.from('.btn-box',{
  duration :1.5,
  delay:1,
  ease: "steps.InOut",
  y:-1000
})
//===============
