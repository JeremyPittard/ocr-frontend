import Head from "next/head";


const SiteHead = props => {
  const priceRange = props.settings.priceRange != null ? `"priceRange": "${[props.settings.priceRange]}",` : '';
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "OCR Projects",
    image: `"${props.settings.siteLogo.mediaItemUrl}"`,
    "@id": "",
    url: "https;//ocrprojects.com.au",
    telephone: `"${props.settings.contactPhone}"`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    sameAs: [
      `"${props.settings.facebookLink}"`,
      `"${props.settings.instagramLink}"`,
      props.settings.linkedInLink != null && `"${props.settings.linkedInLink}"`
    ],
    priceRange
  };
  
  return (
    <>
      <Head>
        <title>{props.settings.seoTitle}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>
    </>
  );
};

export default SiteHead;
