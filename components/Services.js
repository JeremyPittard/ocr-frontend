import Image from "next/image";
import { scrollServices } from "../animations/animations";
import { useEffect } from "react";

export const Services = (props) => {
  let serviceCount = 0;
  let columnArray = []

  useEffect(() => {
    scrollServices();
  }, [])


  return (
    <div className="m-4" id="servicesSection" className="opacity-0">
      <div className="flex flex-col px-4 py-8 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row md:mt-8">
        <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
          <h2 className="services__heading -translate-y-3 opacity-0 relative mb-4 font-sans text-3xl font-bold text-ocr-secondary sm:text-4xl sm:leading-none">
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
              <span className="relative text-black">Our Services</span>
            </span>
          </h2>
         
        </div>
        <div className="services__content opacity-0 -translate-y-3 flex-grow pt-1">
          <div className="flex items-center mb-3">
            <span className="font-bold text-gray-900">
              Services Offered
            </span>
          </div>
          <div className="block md:grid grid-cols-2 row-gap-6 sm:grid-cols-4">
            
              {props.services.map((s, i) => {
                const serviceName = s.service_acf.serviceName;
                serviceCount++;
                  return <div className="text-xl p-3 bg-ocr-primary shadow-md flex items-center md:justify-center m-1" key={`service-${i}`}>{serviceName}</div>;
              })}

              
          </div>
        </div>
      </div>
      <div className="services__img -translate-y-3 mx-4 opacity-0 relative h-56">
        <Image
          layout="fill"
          className="sm:h-96"
          objectFit="cover"
          src={props.banner}
          alt="#"
        />
        <span className="absolute inset-0 bg-black opacity-20"></span>

      </div>
    </div>
  );
};
