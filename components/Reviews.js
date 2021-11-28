export const Reviews = (props) => {
//     <div className="reviews">
//     <ul>
//       {props.reviews.map((r, i) => {
//         const clientName = r.review.clientName;
//         return <li key={`review-${i}`}>{clientName}</li>;
//       })}
//     </ul>
// </div>
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <a href="/" className="mb-4 mr-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <div>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
              New History
            </p>
            <h2 className="mb-4 font-sans text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none">
              Cheese on toast tale
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </p>
          </div>
        </div>
      </div>
    );
  };