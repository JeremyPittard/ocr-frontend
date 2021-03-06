import { useState, useEffect } from "react";
import Loader from "./loader";
import { scrollContact } from "../animations/animations";

export const Contact = () => {
  const [data, setData] = useState({
    cfName: "",
    cfPhone: "",
    cfEmail: "",
    cfComment: "",
  });

  const [formState, setFormState] = useState(0);

  useEffect(() => {
    scrollContact();
  }, [])

  const submitForm = (e) => {
    e.preventDefault();
    setFormState(1);
    const form = new FormData();
    for (const field in data) {
      form.append(field, data[field]);
    }

    fetch(process.env.NEXT_PUBLIC_CONTACT_API_URL, {
      method: "POST",
      body: form,
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setTimeout(() => {

          setFormState(2);
        }, 500)
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {

          setFormState(0)
        }, 500)
      });
  };

  const updateState = (e, v) => {
    e.preventDefault();
    let tempObj = data;
    switch (v) {
      case "name":
        tempObj.cfName = e.target.value;
        break;

      case "phone":
        tempObj.cfPhone = e.target.value;
        break;
      case "email":
        tempObj.cfEmail = e.target.value;
        break;
      case "comment":
        tempObj.cfComment = e.target.value;
        break;
      default:
        break;
    }

    setData({ ...tempObj });
  };

  return (
    <div id="contactSection" className="bg-ocr-primary opacity-0 -translate-y-3 px-4 sm:px-0 py-8 md:py-16 lg:py-20 mx-4">
      <div className="w-full max-w-xl xl:px-8 xl:w-5/12 mx-auto">
        <div className="contact__form opacity-0 -translate-y-3 bg-white rounded shadow-2xl p-7 sm:p-10">
          <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
            Contact us
          </h3>
          {formState === 0 && (
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-1 sm:mb-2">
                <label htmlFor="name" className="inline-block mb-1 font-medium">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-ocr-primary focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  enterKeyHint="next"
                  onChange={(e) => updateState(e, "name")}
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="phone"
                  className="inline-block mb-1 font-medium"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  enterKeyHint="next"
                  onChange={(e) => updateState(e, "phone")}
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="email"
                  className="inline-block mb-1 font-medium"
                >
                  E-mail
                </label>
                <input
                  required
                  type="email"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  onChange={(e) => updateState(e, "email")}
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="comment"
                  className="inline-block mb-1 font-medium"
                >
                  How Can We Help?
                </label>
                <textarea
                  required
                  className="flex-grow h-32 w-full h-12 p-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="comment"
                  name="comment"
                  onChange={(e) => updateState(e, "comment")}
                />
              </div>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-ocr-primary hover:bg-ocr-secondary hover:border-ocr-secondary focus:shadow-outline focus:outline-none"
                >
                  Send
                </button>
              </div>
            </form>
          )}
          {formState === 1 && <Loader />}
          {formState === 2 && <Message />}
        </div>
      </div>
    </div>
  );
};

const Message = () => {
  return (
    <h4 className="message mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
      Thanks, we will be in touch
    </h4>
  );
};
