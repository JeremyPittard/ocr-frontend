import { useEffect } from "react";
import { scrollAbout } from "../animations/animations";

export const About = (props) => {

  useEffect(() => {
    scrollAbout();
  }, [])

  let aboutText = props.aboutText.aboutOcr;
  let aboutImage = props.aboutText.image;
  return (
    <div id="aboutSection" className="opacity-0 -translate-y-3 bg-ocr-primary mx-4">
      <div className="px-4 py-8 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="about__heading max-w-lg opacity-0 mb-6 font-sans text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none">
          About&nbsp;
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-ocr-secondary"></div>
            <span className="relative inline-block text-ocr-white">
              OCR Projects
            </span>
          </span>
        </h2>
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <div
                className="about__content opacity-0 -translate-y-3 text-base text-gray-900 md:text-lg"
                dangerouslySetInnerHTML={{ __html: aboutText }}
              ></div>
            </div>
          </div>
          <div>
            <img
              className="about__img opacity-0 -translate-y-3 object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={aboutImage.mediaItemUrl}
              alt={aboutImage.altText == "" ? "#" : aboutImage.altText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
