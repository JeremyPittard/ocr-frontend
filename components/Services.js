import Image from "next/image";
export const Services = (props) => {
  let serviceCount = 0;
  let columnArray = []


  return (
    <div className="m-4">
      <div className="flex flex-col px-4 py-8 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row md:mt-8">
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
              <span className="relative text-black">Our Services</span>
            </span>
          </h2>
         
        </div>
        <div className="flex-grow pt-1">
          <div className="flex items-center mb-3">
            <span className="font-bold tracking-wide text-gray-900">
              Services Offered
            </span>
            <span className="ml-1">
              <svg
                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
          </div>
          <div className="grid grid-cols-2 row-gap-6 sm:grid-cols-4">
            
            <ul className="space-y-2">
              {props.services.map((s, i) => {
                const serviceName = s.service_acf.serviceName;
                serviceCount++;
                if (i < 4) {
                  return <li key={`service-${i}`}>{serviceName}</li>;
                }
              })}
            </ul>
            <ul className="space-y-2">
              {props.services.map((s, i) => {
                const serviceName = s.service_acf.serviceName;
                serviceCount++;
                if (i > 4 && i < 9) {
                  return <li key={`service-${i}`}>{serviceName}</li>;
                }
              })}
            </ul>
            <ul className="space-y-2">
              {props.services.map((s, i) => {
                const serviceName = s.service_acf.serviceName;
                serviceCount++;
                if (i >= 9) {
                  return <li key={`service-${i}`}>{serviceName}</li>;
                }
              })}
            </ul>
            
          </div>
        </div>
      </div>
      <div className="relative w-full h-56">
        <Image
          layout="fill"
          className="object-cover  sm:h-96"
          src={props.banner}
          alt="#"
        />
        <span className="absolute inset-0 bg-black opacity-20"></span>

      </div>
    </div>
  );
};
