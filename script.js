function isDesktop() {
  return window.matchMedia("(min-width: 768px)").matches;
}

// Redirect to a desktop-only message if not on a desktop
function redirectIfNotDesktop() {
  if (!isDesktop()) {
      window.location.href = "desktop-only.html";
  }
}

// Check on page load
window.onload = function() {
  redirectIfNotDesktop();
};

document.querySelectorAll('#main').forEach((section, index) => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top center', // adjust as needed
      end: 'bottom center', // adjust as needed
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 1, // adjust as needed
  });
});



Shery.mouseFollower();
Shery.makeMagnet(".magnet");
function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 160,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 27);
    },
  });
  tl.to(".line h2", {
    animationName: "loaderAnime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.6,
  });
  tl.from("#page1", {
    delay: 0.1,
    y: 1600,
    duration: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });
  tl.from(
    "#hero1, #page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}

var t2 = gsap.timeline()

gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -10%",
        scrub:3,
        pin:true
    }
})

gsap.to(".info",{
  x:750,
  duration:2,
  opacity:1,
  scrollTrigger:{
    trigger:".info",
    scroller:"body"
  }
})

gsap.from(".nav h1",{
  y:-80,
  delay:5,
  duration:2,
  stagger:0.5
})

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  




  
  var typed = new Typed('#element', {
    strings: ['Web Developer', 'Programmer', 'Coder'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });

loadingAnimation();