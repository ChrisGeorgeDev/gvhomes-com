import Head from "next/head";
import Button from "../components/Button";
import LandingHero from "../components/Hero/LandingHero";
import ServiceTabs from "../components/ServiceTabs";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Services from "../components/Services";
import { NextSeo } from "next-seo";
import Navbar from "../components/MainNav";
import InteriorHero from "../components/Hero/InteriorHero";
import ResourcesHero from "../components/Hero/resourcehero";
import ResourceTab from "../components/ResourceTab";

export default function Comm({community}) {
  const questions = community.data[0].attributes.owner_resources;
//   console.log(community);

  return (
    <div>
      <NextSeo
        title="Our Services"
        description="Please don’t hesitate to contact us about our properties, their location or what we do. Simply fill out the form and we’ll get right back to you."
        canonical="https://www.gableviewhomes.com/about"
        openGraph={{
          images: [
            {
              url: "https://greatgulfstrapi.blob.core.windows.net/greatgulf/assets/customer_care_1_40fb605ae6.jpg",
              width: 2500,
              height: 1111,
            },
          ],
        }}
      />

      <Navbar />

      <ResourcesHero>
        <span className="mb-4 block px-5">COMMUNITY RESOURCES</span>
        <h1 className="text-left w-full px-5 lg:w-7/12 2xl:w-6/12  text-2xl md:text-3xl lg:text-6xl  leading-[1.2em] font-bold block text-black">
          Notting Hill
        </h1>
      </ResourcesHero>

      <main id="main" className="mb-auto">


      <ResourceTab  className="center" com={questions} />

      </main>

      <Footer />
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


export const getStaticProps = async () => {
    const res = await fetch(
      `https://strapi-production-2269.up.railway.app/api/communities?populate[owner_resources][populate]=*&filters[name][$eq]=Notting%20Hill`
    );
  
    const community = await res.json();
    // const articles = JSON.parse(JSON.stringify(content))
  console.log(community)
    return {
      props: {
        community,
      },
    };
  };