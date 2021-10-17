import { gql } from "@apollo/client";
import client from "../lib/client";
import { Nav } from "../components/Nav";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { Portfolio } from "../components/Portfolio";

const Home = (props) => {
  console.log(props.siteSettings, 'site-settings')
  return (
    <>
      <Nav logo={props.siteSettings.siteLogo.mediaItemUrl}/>
      <Banner banners={props.banner} />
      <About aboutText={props.about} />
      <Services services={props.services} />
      <Portfolio portfolio={props.portfolio}/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const aboutData = await client.query({
    query: gql`
      {
        about {
          nodes {
            about_acf {
              aboutOcr
              image {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    `,
  });

  const siteSettingsData = await client.query({
    query: gql`
    {
      themeGeneralSettings {
        site_settings {
          abn
          contactEmail
          contactPhone
          facebookLink
          fieldGroupName
          instagramLink
          linkedInLink
          siteLogo {
            mediaItemUrl
          }
        }
      }
    }
  `
  
  })

  const bannerData = await client.query({
    query: gql`
      {
        banner {
          nodes {
            banner_acf {
              bannerImage {
                id
                altText
                mediaItemUrl
              }
              bannerText
            }
          }
        }
      }
    `,
  });

  const servicesData = await client.query({
    query: gql`
      {
        services {
          nodes {
            service_acf {
              serviceName
            }
          }
        }
      }
    `,
  });

  const portfolioData = await client.query({
    query: gql`
      {
        portfolio {
          nodes {
            portfolioItem_acf {
              title
              description
              category {
                name
              }
              gallery {
                id
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    `,
  });

  const reviewsData = await client.query({
    query: gql`
      {
        reviews {
          nodes {
            review {
              clientComment
              clientName
              clientRating
              fieldGroupName
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      siteSettings: siteSettingsData.data.themeGeneralSettings.site_settings,
      banner: bannerData.data.banner.nodes,
      about: aboutData.data.about.nodes[0].about_acf,
      services: servicesData.data.services.nodes,
      portfolio: portfolioData.data.portfolio.nodes,
      reviews: reviewsData.data.reviews.nodes,
    },
  };
}
