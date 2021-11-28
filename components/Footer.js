import { printIntrospectionSchema } from "graphql";
import Image from "next/image";
export const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  console.log(props)
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="back to top"
            className="inline-flex items-center"
          >
            <Image
              src={props.settings.siteLogo.mediaItemUrl}
              alt="OCR Projects Logo"
              width={150}
              height={80}
            />
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href={`tel:${props.settings.contactPhone.replace(/ /g, "")}`}
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-gray-900 hover:text-ocr-primary"
            >
              {props.settings.contactPhone}
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href={`mailto:${props.settings.contactEmail}`}
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-gray-900 hover:text-ocr-primary"
            >
              {props.settings.contactEmail}
            </a>
          </div>
          {props.settings.address && (
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href={`https://www.google.com/maps/place/${props.settings.address}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-gray-900 hover:text-ocr-primary"
              >
                {props.settings.address}
              </a>
            </div>
          )}
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            {props.settings.instagramLink != null && (
              <a
                href={props.settings.instagramLink}
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-ocr-primary"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
            )}
            {props.settings.facebookLink != null && (
              <a
                href={props.settings.facebookLink}
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-ocr-primary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          &copy; Copyright {currentYear} OCR Projects.
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-ocr-primary"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-ocr-primary"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};
