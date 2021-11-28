import gsap, { Bounce } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const heroAnimations = () => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "power1.inOut",
    },
  });

  tl.to(".hero__img", { transform: "translateY(0)", opacity: 1 }).to(
    ".hero__title",
    {
      opacity: 1,
      transform: "trasnlateX(0)",
      onComplete: shiftImage,
    }
  );

  function shiftImage() {
    gsap.to(".img-shift", {
      scale: 1.1,
      translateX: 15,
      duration: 15,
      yoyo: true,
      repeat: -1,
    });
  }
};

export const loadingAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      duration: 0.25,
      ease: "power1.inOut",
      repeat: -1,
      repeatDelay: 0.35,
      yoyo: true,
    },
  });

  tl.to(".load-1", { translateY: -10 }, '-=0.15')
    .to(".load-2", { translateY: -10 }, '-=0.15')
    .to(".load-3", { translateY: -10 }, '-=0.15');
};

export const scrollAbout = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#aboutSection",
      start: "100px 80%",
    },
  });

  tl.to("#aboutSection", {
    opacity: 1,
    transform: "translateY(0)",
    duration: 0.2,
  })
    .to(".about__heading", {
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

export const scrollServices = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#servicesSection",
      start: "100px 80%",
    },
  });

  tl.to("#servicesSection", {
    opacity: 1,
    transform: "translateY(0)",
    duration: 0,
  })
    .to(".services__heading", {
      opacity: 1,
      transform: "translateY(0)",
      duration: 0.35,
    })
    .to(".services__content", {
      opacity: 1,
      transform: "translateY(0)",
      duration: 0.35,
    })
    .to(".services__img", {
      opacity: 1,
      transform: "translateY(0)",
      duration: 0.35,
    });
};

export const scrollPortfolio = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#portfolioSection",
      start: "100px 80%",
    },
  });

  tl.to("#portfolioSection", {
    opacity: 1,
    transform: "translateY(0)",
    duration: 0,
  })
    .to(".portfolio__heading", {
      opacity: 1,
      transform: "translateY(0)",
      duration: 0.35,
    })
    .to(".portfolio__content", {
      opacity: 1,
      transform: "translateY(0)",
      duration: 0.35,
    });
};

export const scrollContact = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#contactSection",
      start: "100px 80%",
    },
  });

  tl.to("#contactSection", {
    opacity: 1,
    transform: "translateY(0)",
    duration: 0.2,
  }).to(".contact__form", {
    opacity: 1,
    transform: "translateY(0)",
    duration: 0.35,
  });
};

export const theOldFadeAndSwitch = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power1.inOut",
    },
  });
  gsap.set('.portfolio__content', {opacity: 0})
    

    tl.to('.portfolio__content', {opacity: 1, delay: .3})
};
