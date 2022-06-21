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

export default function Home() {
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
            }
          ],
        }}
      />

      <Navbar />

      <LandingHero
        image="/img/hero/welcome_couch.jpg"
        imagePortrait="/img/comm/landing-portrait.jpg"
        style="text-blue-ggDark flex-col"
        height="h-[100vh]"
      >

        <div className="flex flex-col">
          <div className="w-1/2">
            <h1>
              <span className="text-8xl leading-[1.2em] font-bold block text-white">Spaces</span>
              <span className="text-8xl leading-[1.2em] font-thin text-white">DESIGNED FOR&nbsp;LIFE</span>
            </h1>
          </div>

          <Link href="/about">
            <a>
              <Button>ABOUT GABLE VIEW</Button>
            </a>
          </Link>

        </div>

      </LandingHero>


      <main id="main" className="mb-auto">
        <section>
          <div className="container mx-auto px-5 sectionp">
            <p>
              At Gable View Homes, we are inspired to build houses and
              communities you'll be proud to call home.
            </p>

            <p>
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

 

        <SeparatorLeft
          bold="Elevated"
          thin=" Living <br/> Experiences"
          image="/img/kitchen_2.jpg"
        />



        <section className="mb-[125px] bg-gray-50 py-16">
          <div className="md:container md:mx-auto  ">
            <div className="container">
              <h2 className="h2  ">Our Services</h2>
              <ServiceTabs />
              <p className="text-xl max-w-[730px] font-light mb-6">
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



        <SeparatorRight
          bold="Featured"
          thin=" Community"
          image="/img/kc-exterior.jpg"
        />


        <section>
          <div className="container mx-auto px-5 sectionp">
            <p>
            The Residences on Kennedy Circle 
            </p>

            <p>
            Gable View Homes is pleased to announce our expansion into the Town of Milton with our newest development, The Residences on Kennedy Circle.
            </p>

        
              <a href="https://kennedycirclecondo.com/" target="_blank" rel="noreferrer">
                <Button>VISIT PROJECT SITE</Button>
              </a>
         
          </div>
        </section>


 

        <div className="pb-[125px] bg-gray-50">

        <SeparatorLeft
          bold="Inspired"
          thin="Design for <br/> Modern Living"
          image="/img/kc-suite-e.jpg"
        />
</div>



      </main>

      <Footer />
    </div>
  );
}
