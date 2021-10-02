import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../lib/client";
const Home = (props) => {
  console.log(props.banner, typeof props.banner);
  return (
    <>
    {
      props.banner.map(b => {
        const imgUrl = b.banner_acf.bannerImage.mediaItemUrl;
        const imgText = b.banner_acf.bannerText;
        return (
          <>
            <img src={imgUrl} width='300' />
            {imgText != null && <p>{imgText}</p>}
          </>
        )
      })
    }
      <div dangerouslySetInnerHTML={{ __html: props.about }}></div>
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


  return {
    props: {
      banner: bannerData.data.banner.nodes,
      about: aboutData.data.about.nodes[0].about_acf.aboutOcr,
    },
  };
}
