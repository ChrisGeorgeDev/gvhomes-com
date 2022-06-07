import Head from "next/head";
import Image from "next/image";
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
            }
          ],
        }}
      />

      <Navbar />


      <InteriorHero
        image="/img/hero/about-hero.jpg"
        imagePortrait="/img/comm/landing-portrait.jpg"
        desktopPosition="object-top"
        style="text-blue-ggDark flex-col" >


            <h1 className="text-center drop-shadow-md  text-8xl leading-[1.2em] font-bold block text-white">
          About Us
            </h1>
   

      </InteriorHero>


      <main id="main" className="mb-auto">
        <section>
          <div className="container mx-auto px-5 sectionp">
              <h2>Who we are</h2>
            <p>
            Gable View Homes creates engaging 
and inspiring living experiences by 
setting new standards in real estate
development. 
            </p>

            <p>
            Grounded in diverse community engagement and integration with each project, we design and develop spaces to live, work and play, ranging from townhomes to condominiums. 
            </p>

        
          </div>
        </section>

        <section>
          <div className="py-[125px] ">
            <div className="flex flex-col lg:flex-row ">
              <div className=" flex flex-col lg:text-upright justify-end w-7/12 2xl:w-4/12 ">
                <div className="ml-20 leading-none lg:leading-tight">
                  <span className="text-8xl  block font-bold">Spaces</span>
                  <span className="text-8xl  uppercase  block font-thin">
                   Designed
                  </span>
                  <span className="text-8xl  uppercase block font-thin">
                    For Life
                  </span>
                </div>
              </div>
              <div className="flex justify-items-end  ">
                <img className="self-end" src="/img/kitchen_2.jpg" />
              </div>
            </div>
          </div>
        </section>
        

        <section>
          <div className="container mx-auto px-5 sectionp">
            <p>
            PLACEHOLDER
            </p>

            <p>
            With over 25 years of experience, Gable View Homes' seasoned team provides the vision and execution expertise to create outstanding new buildings and homes in the GTA and Canada. As we continue to grow and expand our portfolio, we aim to create extraordinary designs and living environments.            </p>

     
          </div>
        </section>
      

        <section className="mb-[125px] bg-gray-50 py-16">
          <div className="md:container md:mx-auto  ">
            <div className="container">
            <div className="container mx-auto px-5  sectionp">
              <h2>Our values</h2>
            <p>
            Our work is guided by passion and 
drive to reshape the way we build 
homes and communities.
            </p>

            <p>
            From contemporary townhomes to innovative condominiums, Gable View Homes' mission is to adhere to our core values of creating outstanding spaces through design and craftsmanship and to deliver homes with quality, innovation 
and customer service.             
</p>

        
          </div>
              <ServiceTabs />

      
            </div>
          </div>
      
          
        </section>

        <section>
          <div className="mb-[125px]">
            <div className="flex flex-col lg:flex-row-reverse ">
              <div className=" flex flex-col lg:text-upright justify-start w-7/12 2xl:w-4/12 ">
                <div className="ml-20 leading-none lg:leading-tight">
                  <span className="text-8xl  block font-bold">Featured</span>
                  <span className="text-8xl  uppercase  block font-thin">
                    Community
                  </span>
            
                </div>
              </div>
              <div className="grid justify-items-end  ">
                <img className="self-end" src="/img/kc-exterior.jpg" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-5 sectionp">
            <p>
            The Residences on Kennedy Circle 
            </p>

            <p>
            The Residences on Kennedy Circle is the product of our vision to bring contemporary, innovative and community living to Milton. The project is comprised of 148 units in a 6-storey mid-rise state-of-the-art building that embodies a distinct spirit and style like no other condominium in the area.            </p>

            <Link href="/cows">
              <a>
                <Button>VISIT PROJECT SITE</Button>
              </a>
            </Link>
          </div>
        </section>


        <section>
          <div className="py-[125px] bg-gray-50">
            <div className="flex mb-[125px] flex-col lg:flex-row ">
              <div className=" flex flex-col lg:text-upright justify-end w-7/12 2xl:w-4/12 ">
                <div className="ml-20 leading-none lg:leading-tight">
                  <span className="text-8xl  block font-bold">Past </span>
                  <span className="text-8xl  uppercase  block font-thin">
                    Communities
                  </span>
            
                </div>
              </div>
              <div className="flex justify-items-end  ">
                <img className="self-end" src="/img/kc-suite-e.jpg" />
              </div>
            </div>

            <ServiceTabs />

          </div>

        </section>


        {/* <section className="mb-[125px] bg-gray-50 py-16">
          <div className="md:container md:mx-auto border-b  ">
            <div className="container">
              <h2 className="h2">What we do</h2>
            </div>
          </div>
          <Services />
        </section> */}


      </main>

      <Footer />
    </div>
  );
}
