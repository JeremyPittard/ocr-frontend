import Slider from "react-slick";
import Image from "next/dist/client/image";

import { Fancybox } from "@fancyapps/ui";
import { useEffect, useState } from "react";

export const Portfolio = (props) => {
  const [galleryArray, setGalleryArray] = useState();

  useEffect(() => {
    setGalleryArray(getGalleryItems())
  }, []);
  
  const slickSettings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />
  }; 
  const getGalleryItems = () => {
    let tempArr= []  ; 
    
    props.portfolio.forEach((portfolioItem) => {
      let port = [];
      const caption = portfolioItem.portfolioItem_acf.title;

      portfolioItem.portfolioItem_acf.gallery.forEach((galleryItem) => {
        port.push({ src: galleryItem.mediaItemUrl, caption: caption});
      });   
     tempArr = [...tempArr, port]
    });
    return(tempArr)
  }; 

  

  return (
    <>
      <div className="m-4">
        <div className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row mt-8">
          <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
            <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-tight text-ocr-secondary sm:text-4xl sm:leading-none">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-ocr-secondary lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-black">Our Recent Work</span>
              </span>
            </h2>
            <p className="mb-4 text-gray-900 lg:mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              laudantium, totam rem aperiam, eaque ipsa quae explicabo.
            </p>
            <div className="flex flex-col">
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                All
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Office
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Commercial
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Residential
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          {/* {galleryArray != null && 
          galleryArray.map(thing => {
            console.log(galleryArray, 'array')
            console.log(thing, 'thing')
            return <h1>{thing[0].src}</h1>
          })
          } */}
          <div className="w-2/3">
            <div>
              <Slider {...slickSettings}>
                {galleryArray != null && galleryArray.map((p, i) => {
                  const imgUrl = p[0].src;
                  const imgText = p[0].caption;
                  return (
                    <div className="" key={`${imgUrl.replace(/ /g, "")}-${i}`}>
                      <a
                        href={imgUrl}
                        data-fancybox={`${imgText.replace(/ /g, "")}-gallery`}
                      >
                        <Image
                          className="rounded"
                          src={imgUrl}
                          height={250}
                          width={250}
                          alt="Person"
                        />
                      </a>
                      <div className="">
                        <p className="">{imgText}</p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
