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

<Navbar/>


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

<Link href="/cows">
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

            <Link href="/cows">
              <a>
                <Button>ABOUT GABLE VIEW</Button>
              </a>
            </Link>
          </div>
        </section>

        <section>
          <div className="py-[125px] bg-gray-50">
            <div className="flex flex-col lg:flex-row ">
              <div className=" flex flex-col lg:text-upright justify-end w-7/12 2xl:w-4/12 ">
                <div className="ml-20 leading-none lg:leading-tight">
                  <span className="text-8xl  block font-bold">Elevated</span>
                  <span className="text-8xl  uppercase  block font-thin">
                    Living
                  </span>
                  <span className="text-8xl  uppercase block font-thin">
                    Experiences
                  </span>
                </div>
              </div>
              <div className="flex justify-items-end  ">
                <img className="self-end" src="/img/kitchen_2.jpg" />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-[125px] bg-gray-50 py-16">
          <div className="md:container md:mx-auto border-b  ">
            <div className="container">
              <h2 className="h2">What we do</h2>
            </div>
          </div>
          <ServiceTabs />
        </section>

        <section>
          <div className="mb-[125px]">
            <div className="flex flex-col lg:flex-row-reverse ">
              <div className=" flex flex-col lg:text-upright justify-start w-7/12 2xl:w-4/12 ">
                <div className="ml-20 leading-none lg:leading-tight">
                  <span className="text-8xl  block font-bold">Elevated</span>
                  <span className="text-8xl  uppercase  block font-thin">
                    Living
                  </span>
                  <span className="text-8xl  uppercase block font-thin">
                    Experiences
                  </span>
                </div>
              </div>
              <div className="grid justify-items-end  ">
                <img className="self-end" src="/img/kitchen_2.jpg" />
              </div>
            </div>
          </div>
        </section>

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

            <Link href="/cows">
              <a>
                <Button>ABOUT GABLE VIEW</Button>
              </a>
            </Link>
          </div>
        </section>


        <section>
          <div className="py-[125px] bg-gray-50">
            <div className="flex flex-col lg:flex-row ">
              <div className=" flex flex-col lg:text-upright justify-end w-7/12 2xl:w-4/12 ">
                <div className="ml-20 leading-none lg:leading-tight">
                  <span className="text-8xl  block font-bold">Elevated</span>
                  <span className="text-8xl  uppercase  block font-thin">
                    Living
                  </span>
                  <span className="text-8xl  uppercase block font-thin">
                    Experiences
                  </span>
                </div>
              </div>
              <div className="flex justify-items-end  ">
                <img className="self-end" src="/img/kitchen_2.jpg" />
              </div>
            </div>
          </div>
        </section>

{/* 
        <section className="mb-[125px] bg-gray-50 py-16">
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
