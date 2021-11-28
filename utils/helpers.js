import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const helpers = {
  handleErrors: function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  },

  smoothScroll: function (e, destination) {
    e.preventDefault();
    const destinationElement = document.querySelector(destination);
    gsap.to(window, {
      scrollTo: {y: destination, offsetY: 120} ,
      duration: 0.3,
      onComplete: setFocus,
    });

    window.history.pushState(null, null, destination);

    const setFocus = () => {
      destinationElement.setAttribute("tabIndex", "-1");
      destinationElement.focus();
    };
  },
};

export default helpers;
