import { NextSeo } from "next-seo";
import Navbar from "../../../components/MainNav";
import ResourcesHero from "../../../components/Hero/resourcehero";
import ResourceTab from "../../../components/ResourceTab";
import Layout from "../../../components/Layout";
import PageHero from "../../../components/Hero/pageHero";
import { DateTime } from "luxon";

export default function Comm({ community }) {
  const questions = community.data[0].attributes.owner_resources;
  //   console.log(community);

  return (
    <div>
      <Layout
        title={`${community.data[0].attributes.name} Community Resources `}
        description={`Ya get me - The next level`}
      >
        <ResourcesHero>
          <span className="mb-4 block ">COMMUNITY RESOURCES</span>
          <h1 className="text-left w-full  lg:w-11/12   text-2xl md:text-3xl lg:text-7xl  leading-[1.2em] font-bold block text-black">
            {community.data[0].attributes.name}
          </h1>
        </ResourcesHero>

        <div className="min-h-[50vh]">
          <ResourceTab className="center mb-auto" com={questions} />
        </div>
      </Layout>
    </div>
  );
}

// Comm.getInitialProps = async (ctx) => {
//   try {
//     const res = await axios.get(
// "https://strapi-production-2269.up.railway.app/api/communities?populate[owner_resources][populate]=*&filters[name][$eq]=Notting%20Hill");
//     const community = res.data;
//     console.log(community)
//     return { community };

//   } catch (error) {
//     return { error };
//   }
// };

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://strapi-production-2269.up.railway.app/api/communities`
  );

  const communities = await res.json();
  // const articles = JSON.parse(JSON.stringify(content))

  return {
    paths: communities.data.map((community) => ({
      params: {
        slug: community.attributes.slug,
      },
    })),
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://strapi-production-2269.up.railway.app/api/communities?populate[owner_resources][populate]=*&filters[slug][$eq]=${params.slug}`
  );

  const community = await res.json();
  // const articles = JSON.parse(JSON.stringify(content))
  console.log(community);
  return {
    props: {
      community,
    },
  };
};
