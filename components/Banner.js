import { useEffect } from "react";
import Image from "next/image";
import helpers from "../utils/helpers";
import { heroAnimations } from "../animations/animations";

export const Banner = (props) => {
  useEffect(() => {
    heroAnimations();
  }, []);

  const theImage = props.banners[0].banner_acf.bannerImage.mediaItemUrl;
  const bannerText = props.banners[0].banner_acf.bannerText;
  const theLogo = props.logo;
  return (
    <>
      <section
        className="hero relative text-white bg-center bg-no-repeat bg-cover mx-4 mb-4"
        role="banner"
      >
        <div className="p-4">
          <Image
            layout="fill"
            className="object-cover w-full h-full hero__img img-shift"
            src={theImage}
          />
        </div>
        <span className="absolute inset-0 bg-black opacity-40"></span>
        <div className="relative px-4 py-24 mx-auto max-w-screen-xl sm:py-36 sm:px-6 lg:px-8 lg:h-screen lg:flex lg:items-center">
          <div className="hero__title max-w-xl text-center sm:text-left sm:max-w-5xl">
            <Image src={theLogo} alt="OCR Projects" width='180' height='80'/>
            <h1 className="text-3xl font-bold sm:text-5xl mb-4 uppercase">
              {bannerText}
            </h1>
            <button
              type="button"
              className="scroll relative inline-block px-12 py-3 mt-8 overflow-hidden border-2 border-white transition-colors hover:bg-ocr-primary hover:border-ocr-primary"
              onClick={(e) => helpers.smoothScroll(e, "#aboutSection")}
            >
              <span className="absolute inset-0 transition-transform origin-left transform scale-x-0 bg-sky-500 group-hover:scale-x-100"></span>

              <span className="relative text-sm font-medium tracking-widest uppercase">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
