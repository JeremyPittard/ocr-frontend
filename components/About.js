export const About = (props) => {
  console.log(props, "about props");
  let aboutText = props.aboutText.aboutOcr;
  let aboutImage = props.aboutText.image;
  return (
    <div id="aboutSection" className="bg-ocr-primary">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                About&nbsp;
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-ocr-secondary" />
                  <span className="relative inline-block text-deep-purple-accent-400">
                    OCR Projects
                  </span>
                </span>
              </h2>
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <div
                className="text-base text-gray-700 md:text-lg"
                dangerouslySetInnerHTML={{ __html: aboutText }}
              ></div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={aboutImage.mediaItemUrl}
              alt={aboutImage.altText == '' ? '#' : aboutImage.altText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
