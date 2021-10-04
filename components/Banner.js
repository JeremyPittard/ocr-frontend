import Image from 'next/image'


export const Banner = (props) => {
  const theImages = props.banners;
  console.log(theImages, 'the images')

  return (
    <div className="relative h-screen">
      {theImages.map((b,i) => {
        return(
          <Image src={b.banner_acf.bannerImage.mediaItemUrl} layout='fill' 
          className="absolute inset-0 object-cover w-full h-full"
          alt="#" key={`banner-image-${i}`}/>
        )
      })}
      <div className="relative bg-opacity-50 bg-gray-800 bottom-0 h-full">
        <svg
          className="absolute inset-x-0 -bottom-1 text-ocr-primary"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative h-full px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col h-full items-center justify-between xl:flex-row">
            <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              {theImages.map((t,i) => {
                return(
                  <h2 className="mb-6 font-sans text-3xl font-bold tracking-normal text-white sm:text-4xl sm:leading-none" key={`banner-text-${i}`}>{t.banner_acf.bannerText}</h2>
                )
              })}
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-ocr-primary"
              >
                Scroll
                <svg
                  className="inline-block w-3 ml-2 rotate-90"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};