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
  return (
    <div className="h-screen hero">
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 sm:h-5/6">
        <div className="flex flex-col items-start sm:h-full sm:justify-center w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="hero__title mb-16 lg:max-w-2xl lg:pr-5">
            <div className="max-w-xl mb-6 sm:max-w-2xl">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-ocr-secondary text-white ">
                  OCR Projects
                </p>
              </div>
              <h1 className="max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none sm:max-w-2xl">
                {bannerText}
              </h1>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <button
                className="scroll inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                onClick={(e) => helpers.smoothScroll(e, "#aboutSection")}
              >
                Scroll
              </button>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <Image
            layout="fill"
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full hero__img img-shift"
            // src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            src={theImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
