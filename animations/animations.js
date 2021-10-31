import gsap, {Bounce} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export const heroAnimations = () => {
  let tl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "power1.inOut",
    },
  });

  tl.to(".hero__img", { transform: "translateY(0)", opacity: 1 })
    .to(".hero__title", {
      opacity: 1,
      transform: "trasnlateX(0)",
      onComplete: shiftImage,
    })
    .to(".scroll", { opacity: 1, delay: 5 })
    .to(".scroll", {
      transform: "translateY(-20px)",
      yoyo: true,
      repeat: -1,
      yoyoEase: Bounce.easeOut,
      duration: 0.75,
    });

  function shiftImage() {
    gsap.to(".img-shift", { scale: 1.1,translateX: 15 ,duration: 15, yoyo: true, repeat: -1 });
  }
};

export const scrollAbout = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "100px 80%",
    },
  });

  tl.to(".about__heading", {
    opacity: 1,
    transform: "translateY(0)",
    duration: 0.35,
  })
    .to(".about__content", {
      opacity: 1,
      transform: "translateY(0)",
      duration: 0.35,
    })
    .to(".about__img", {
      opacity: 1,
      transform: "translateY(0)",
      duration: 0.35,
    });
};


// export const scrollContact = () => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".contact",
//       start: "100px 80%",
//     },
//   });

//   tl.to(".contact__heading", {
//     opacity: 1,
//     transform: "translateY(0)",
//     duration: 0.35,
//   })
//     .to(".contact__content", {
//       opacity: 1,
//       transform: "translateY(0)",
//       duration: 0.35,
//     })
//     .to(".contact__book", {
//       opacity: 1,
//       transform: "translateY(0)",
//       duration: 0.35,
//     });
// };
