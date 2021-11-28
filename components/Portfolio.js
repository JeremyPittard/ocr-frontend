import Slider from "react-slick";
import Image from "next/dist/client/image";

import { Fancybox } from "@fancyapps/ui";
import { useEffect, useState, useRef } from "react";
import { scrollPortfolio, theOldFadeAndSwitch } from "../animations/animations";

export const Portfolio = (props) => {
  const [galleryArray, setGalleryArray] = useState();
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setGalleryArray(getGalleryItems());
    scrollPortfolio();
  }, []);

  const slider = useRef(null);

  const slickSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true
        }
      }
    ]
  };
  const getGalleryItems = () => {
    let tempArr = [];

    props.portfolio.forEach((portfolioItem) => {
      let port = [];
      const caption = portfolioItem.portfolioItem_acf.title;
      const category = portfolioItem.portfolioItem_acf.category;
      portfolioItem.portfolioItem_acf.gallery.forEach((galleryItem) => {
        port.push({
          src: galleryItem.mediaItemUrl,
          caption: caption,
          type: "image",
          category: category,
        });
      });
      tempArr = [...tempArr, port];
    });
    return tempArr;
  };

  const filterPortfolio = (e, cat) => {
    e.preventDefault();
    theOldFadeAndSwitch();
    let baseArr = getGalleryItems();
    let tempArr = [];

    if (cat == "all") {
      tempArr = baseArr;
    } else {
      baseArr.forEach((i) =>
        i[0].category.forEach((c) => c.name == cat && tempArr.push(i))
      );
    }
    setActiveFilter(cat);
    setGalleryArray(tempArr);
    slider.current.slickGoTo(0);
  };

  return (
    <section className="portfolio" id="portfolioSection">
      <div className="p-4">
        <div className="flex flex-col px-4 py-8 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row md:mt-8">
          <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
            <h2 className="portfolio__heading opacity-0 -translate-y-3 relative mb-4 font-sans text-3xl font-bold text-ocr-secondary sm:text-4xl sm:leading-none">
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
            <div className="portfolio__heading opacity-0 -translate-y-3 flex flex-col ml-9 md:ml-0">
              <a
                href="#"
                aria-label=""
                onClick={(e) => filterPortfolio(e, "all")}
                className={`${
                  activeFilter === "all" ? "active" : ""
                } text-xl inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800`}
              >
                All
                {activeFilter === "all" && (
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                )}
              </a>
              <a
                href="#"
                onClick={(e) => filterPortfolio(e, "Office")}
                aria-label=""
                className={`${
                  activeFilter === "Office" ? "active" : ""
                } text-xl inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800`}
              >
                Office
                {activeFilter === "Office" && (
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                )}
              </a>
              <a
                href="#"
                onClick={(e) => filterPortfolio(e, "Commercial")}
                aria-label=""
                className={`${
                  activeFilter === "Commercial" ? "active" : ""
                } text-xl inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800`}
              >
                Commercial
                {activeFilter === "Commercial" && (
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                )}
              </a>
              <a
                href="#"
                onClick={(e) => filterPortfolio(e, "Residential")}
                className={`${
                  activeFilter === "Residential" ? "active" : ""
                } text-xl inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800`}
              >
                Residential
                {activeFilter === "Residential" && (
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                )}
              </a>
            </div>
          </div>
          <div className="portfolio__content opacity-0 -translate-y-3  md:w-2/3">
            <div>
              <Slider ref={slider} {...slickSettings}>
                {galleryArray != null &&
                  galleryArray.map((p, i) => {
                    const imgUrl = p[0].src;
                    const imgText = p[0].caption;
                    const catString = p[0].category
                      .map((cat) => cat.name.toLowerCase())
                      .toString()
                      .replace(/,/g, " ");
                    return (
                      <div
                        key={`${imgUrl.replace(/ /g, "")}-${i}`}
                        className={`portfolio__item ${catString}`}
                      >
                        <button
                          className="p-1"
                          onClick={() => Fancybox.show(p)}
                        >
                          <Image
                            className="rounded"
                            src={imgUrl}
                            height={500}
                            width={500}
                            alt="#"
                            layout="intrinsic"
                            objectFit="cover"
                          />
                        </button>
                        <div className="">
                          <p className="text-center">{imgText}</p>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
