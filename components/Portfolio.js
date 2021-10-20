export const Portfolio = (props) => {
  // {props.portfolio.map((p, i) => {
  //   const imgUrl = p.portfolioItem_acf.gallery[0].mediaItemUrl;
  //   const imgText = p.portfolioItem_acf.title;
  //   return (
  //     <div className="keywrap" key={`banner-${i}`}>
  //       <img src={imgUrl} width="300" />
  //       {imgText != null && <p>{imgText}</p>}
  //     </div>
  //   );
  // })}

  return (
    <div className="py-16 mx-4">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Discover Our Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
      {props.portfolio.map((p, i) => {
    const imgUrl = p.portfolioItem_acf.gallery[0].mediaItemUrl;
    const imgText = p.portfolioItem_acf.title;
    return(
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              src={imgUrl}
              alt="Person"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">{imgText}</p>
          </div>
        </div>
        );
      })}
        
        
        
      </div>
    </div>

       
    </div>
  );
};
