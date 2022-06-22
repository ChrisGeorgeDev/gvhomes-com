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
import CommunityTabs from "../components/ServiceTabs/communities";
import ValuesTabs from "../components/ServiceTabs/values";
import SeparatorRight from "../components/Separator/TextRight";
import SeparatorLeft from "../components/Separator/TextLeft";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="About Gable View Homes"
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

      <InteriorHero
        image="/img/hero/about-hero.jpg"
        imagePortrait="/img/hero/about-hero.jpg"
        desktopPosition="object-top"
        style="text-blue-ggDark flex-col"
      >
                <h1 className="text-center drop-shadow-md text-5xl lg:text-8xl leading-[1.2em] font-bold block text-white">
          About Us
        </h1>
      </InteriorHero>

      <main id="main" className="mb-auto">
      
        <section>
          <div className="container mx-auto px-5 sectionp">
            <h2>Who we are</h2>
            <p>
              Gable View Homes creates engaging and inspiring living experiences
              by setting new standards in real estate development.
            </p>

            <p>
              Grounded in diverse community engagement and integration with each
              project, we design and develop spaces to live, work and play,
              ranging from townhomes to condominiums.
            </p>
          </div>
        </section>

        <section className=" bg-gray-50 ">

        <SeparatorLeft
          bold="Spaces"
          thin="Designed <br/> For Life"
          image="/img/gvh-living.jpg"
        />
        </section>

        <section>
          <div className="container mx-auto px-5 sectionp">
  
            <p>
              With over 25 years of experience, Gable View Homes' seasoned team
              provides the vision and execution expertise to create outstanding
              new buildings and homes in the GTA and Canada. As we continue to
              grow and expand our portfolio, we aim to create extraordinary
              designs and living environments.{" "}
            </p>
          </div>
        </section>

        <section className=" bg-gray-50 ">
              <div className="container mx-auto px-5  sectionp">
                <h2>Our values</h2>
                <p>
                  Our work is guided by passion and drive to reshape the way we
                  build homes and communities.
                </p>

                <p>
                  From contemporary townhomes to innovative condominiums, our
                  mission to create outstanding spaces is guided by our <strong>three
                  core values</strong>.
                  {/*             
                    is to adhere to our core values of creating outstanding spaces through design and craftsmanship and to deliver homes with quality, innovation 
                    and customer service.              */}
                </p>
              <div >
              <ValuesTabs />
              </div>
          </div>
        </section>

  

        <section>
        <SeparatorRight
          bold="Current"
          thin="Communities"
          image="/img/suite-d-kitchen.jpg"
        />
          <div className="container mx-auto px-5 sectionp">
            <p>The Residences on Kennedy&nbsp;Circle</p>

            <p>
              The Residences on Kennedy Circle is the product of our vision to
              bring contemporary, innovative and community living to Milton. The
              project is comprised of 148 units in a 6-storey mid-rise
              state-of-the-art building that embodies a distinct spirit and
              style like no other condominium in the area.{" "}
            </p>

           
              <a href="https://kennedycirclecondo.com" target="_blank" rel="noreferrer">
                <Button>VISIT PROJECT SITE</Button>
              </a>
          
          </div>
        </section>

        <section className="bg-gray-50">
        <SeparatorLeft
              bold="Past"
              thin="Communities"
              image="/img/livingroom.jpg"
            />
          <div className="container mx-auto px-5 ">
       
            <div className="container px-5 pt-[40px]">
              <h2 className="h2  ">Highlights from Our Growing Portfolio</h2>

              <CommunityTabs />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
