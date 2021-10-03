import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib/client";
import { useState } from "react";
const Home = (props) => {
  console.log(props.reviews, 'props log');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {props.banner.map((b, i) => {
        const imgUrl = b.banner_acf.bannerImage.mediaItemUrl;
        const imgText = b.banner_acf.bannerText;
        return (
          <div className="keywrap" key={`banner-${i}`}>
            <img src={imgUrl} width="300" />
            {imgText != null && <p>{imgText}</p>}
          </div>
        );
      })}
      <div dangerouslySetInnerHTML={{ __html: props.about }}></div>

      <div className="services">
        <ul>
          {props.services.map((s, i) => {
            const serviceName = s.service_acf.serviceName;
            return <li key={`service-${i}`}>{serviceName}</li>;
          })}
        </ul>
      </div>

      {props.portfolio.map((p, i) => {
        const imgUrl = p.portfolioItem_acf.gallery[0].mediaItemUrl;
        const imgText = p.portfolioItem_acf.title;
        return (
          <div className="keywrap" key={`banner-${i}`}>
            <img src={imgUrl} width="300" />
            {imgText != null && <p>{imgText}</p>}
          </div>
        );
      })}

    <div className="reviews">
        <ul>
          {props.reviews.map((r, i) => {
            const clientName = r.review.clientName;
            return <li key={`review-${i}`}>{clientName}</li>;
          })}
        </ul>
      </div>
      <h1>CONTACT US HERE</h1>
      <h1>Footer here</h1>
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
            }
          }
        }
      }
    `,
  });

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
  `
  })

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
  `
  })

  return {
    props: {
      banner: bannerData.data.banner.nodes,
      about: aboutData.data.about.nodes[0].about_acf.aboutOcr,
      services: servicesData.data.services.nodes,
      portfolio: portfolioData.data.portfolio.nodes,
      reviews: reviewsData.data.reviews.nodes
    },
  };
}
