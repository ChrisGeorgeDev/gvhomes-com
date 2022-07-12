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
import SeparatorLeft from "../components/Separator/TextLeft";
import SeparatorRight from "../components/Separator/TextRight";
import ResourceTab from "../components/ResourceTab";
import axios from "axios";


export default function Home({community}) {
  // const questions = community.data[0].attributes.owner_resources;

  return (
    <div>
      <NextSeo
        title="Spaces designged for Life."
        description="Please don’t hesitate to contact us about our properties, their location or what we do. Simply fill out the form and we’ll get right back to you."
        canonical="https://www.gableviewhomes.com/contact"
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

      <LandingHero
        image="/img/hero/morning-coffee.jpg"
        imagePortrait="/img/comm/landing-portrait.jpg"
        style="text-blue-ggDark flex-col "
        height="h-[100vh]"
      >
        <div className="flex px-5 content-end flex-col">
          <div className=" w-full lg:w-1/2">
            <h1>
              <span className="text-5xl lg:text-8xl leading-[1.2em] font-bold block text-white">
                Spaces
              </span>
              <span className="text-5xl lg:text-8xl leading-[1.2em] font-thin text-white">
                DESIGNED FOR&nbsp;LIFE
              </span>
            </h1>
          </div>

       
        </div>
      </LandingHero>
      {/* <ResourceTab  className="center" com={questions} /> */}

      <main id="main" className="mb-auto">
      
        <section className="leadp">
          <div className="container mx-auto px-5 sectionp ">
            <p className="max-w-[690px]">
              At Gable View Homes, we are inspired to build houses and
              communities you'll be proud to call home.
            </p>

            <p className="max-w-[800px]">

              As a boutique developer with 25 years of experience, our vision
              remains a home that is inviting, desirable, affordable and
              thoughtfully integrated into the fabric of the surrounding
              community.
            </p>

            <Link href="/about">
              <a>
                <Button>WHO WE ARE</Button>
              </a>
            </Link>
          </div>
        </section>

      

        <section className=" bg-gray-50 flex flex-col gap-20">
        <SeparatorLeft
            bold="Elevated"
            thin=" Living <br/> Experiences"
            svgtext="/img/svg/elevated-experiences.svg"
            image="/img/kitchen_2.jpg"
          />
          <div className="md:container md:mx-auto  ">
            <div className="container px-5">
              <div className="sectionp">
              <h2 className="">Our Services</h2>

              </div>
              <ServiceTabs />
              <p className="text-xl soleil max-w-[730px] font-normal mb-6">
                Gable View Homes is a full-service real estate development firm
                specializing in new construction residential projects.
              </p>
              <Link href="/services">
                <a>
                  <Button>WHAT WE DO</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

     

        <section className=" flex flex-col gap-20">
        <SeparatorRight
          bold="Featured"
          thin=" Community"
          svgtext="/img/svg/featured-community.svg"
size="max-w-[75%]"
          image="/img/kc-exterior.jpg"
        />
          <div className="container mx-auto px-5 sectionp">
            <p>The Residences on Kennedy&nbsp;Circle</p>

            <p>
              Gable View Homes is pleased to announce our expansion into the
              Town of Milton with our newest development, The Residences on
              Kennedy Circle.
            </p>

            <a
              href="https://kennedycirclecondo.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Button>VISIT PROJECT SITE</Button>
            </a>
          </div>
        </section>

        <section className=" bg-gray-50">
     
              <SeparatorLeft
           bold="Simplified"
           thin="Home buying <br/> process"
            svgtext="/img/svg/simplified-process.svg"
            image="/img/kc-suite-e.jpg"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}


// Home.getInitialProps = async (ctx) => {
//   try {
//     const res = await axios.get(
// "https://strapi-production-2269.up.railway.app/api/communities?populate[owner_resources][populate]=*&filters[name][$eq]=Notting%20Hill"    );
//     const community = res.data;
//     return { community };
//   } catch (error) {
//     return { error };
//   }
// };



// https://strapi-production-2269.up.railway.app/api/communities?populate[owner_resources][populate]=*&filters[name][$eq]=Notting%20Hill


// "https://strapi-production-2269.up.railway.app/api/communities?populate=home_owner_resources&populate[1]=home_owner_resources.resource.download&populate[2]=home_owner_resources.resource.download.media&filters[name][$eq]=Notting%20Hill"
