import Head from "next/head";
import Button from "../../components/Button";
import LandingHero from "../../components/Hero/LandingHero";
import ServiceTabs from "../../components/ServiceTabs";
import Link from "next/link";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import { NextSeo } from "next-seo";
import Navbar from "../../components/MainNav";
import InteriorHero from "../../components/Hero/InteriorHero";
import SeparatorLeft from "../../components/Separator/TextLeft";
import Layout from "../../components/Layout";
import MailchimpForm from "../../components/CustomForm";
 
export default function Home() {
  return (
    <div>
      <Layout title=" Nottinghill Hill Towns Rentals">
        <InteriorHero
          image="/img/hero/notting-hill-block-a.jpg"
          imagePortrait=""
          desktopPosition="object-bottom"
          style="text-blue-ggDark flex-col"
        >
          <h1 className="text-center drop-shadow-md text-5xl lg:text-8xl leading-[1.2em] font-bold block text-white">
            Notting Hill Towns
          </h1>
        </InteriorHero>
        <section>
          <div className="container mx-auto px-5 sectionp">
            <h2>Available for Rent</h2>
            <p>
              Notting Hill Towns
              <br />
              Cambridge, ON
            </p>
            <p>
              Nestled in the vibrant neighborhood of Galt, this picturesque
              neighborhood blends traditional small-town charm with a
              progressive spirit, creating a relaxed and luxurious destination
              rooted in history, bound in natural beauty, and connected by a
              strong sense of community.
            </p>
            <p>
              Close proximity to transit, schools, and recreation; the South
              Cambridge Shopping Centre amenities are within a short walk.
            </p>

            <a href="#contact-sales">
              <Button>CONTACT SALES</Button>
            </a>
          </div>
        </section>

        <section className="bg-gray-50">
          <SeparatorLeft
            image="/img/Living_room_up.jpg"
            thin="plus Den"
            bold="2 Bed"
            svgtext="/img/svg/2bd-02.svg"
          />

          <div className="flex flex-col md:flex-col px-5  container mt-24 gap-6">
          
            <div className="flex container gap-10 flex-col lg:flex-row">
              <div className="sectionp  ">
              <div className="container mx-auto ">
              <h2 className="text-6xl leading-[1.1] max-w-[730px] font-bold block text-black lg:mb-[10px]">
                <span className="block font-[500] text-sm text-[#757575] mb-2">
                  {" "}
                  FLOORPLAN
                </span>
                The Ashlar
              </h2>
            </div>

                <p className="text-xl max-w-[730px] mb-[1em]">
                  These back-to-back townhomes offer the perfect fit for singles
                  and couples while still leaving room to grow.
                </p>
              </div>

              <div className="  px-5 sectionp">
                <h3 className="text-[1.4rem] font-sans font-[500]">
                  FEATURES AT A GLANCE
                </h3>
                <ul className="list-disc ml-4 list-outside text-[1.4rem] mb-10">
                  <li>21’ Lot</li>
                  <li>Back-to-back-townhomes</li>
                  <li>2 bedrooms + Den</li>
                  <li>1.5 Bath</li>
                  <li>1400 sq.ft</li>
                </ul>

     
                  <a href="https://res.cloudinary.com/ddi66icj4/image/upload/v1658456570/Notting_Hill_The_Ashlar_2fc7201af4.pdf" target="_blank" rel="noreferrer">
                    <Button>DOWNLOAD FLOORPLAN</Button>
                  </a>
            
              </div>
            </div>
          </div>
        </section>

        <section className="border-b ">
          <div className="flex flex-col gap-10 2xl:gap-20 lg:flex-row container">
            <div className="w-12/12 lg:w-6/12 px-5 sectionp">
              <p>
                Find out just how spacious and functional 1,400 square feet can
                be, contact sales to{" "}
                <a
                  className="hover:text-[#757575] pt-2  border-b-2 lg:border-b-0 pb-[4px]"
                  href="#contact-sales"
                >
                  book your tour today
                </a>
                .
              </p>

              <p>
                <span className="font-[500] block mt-10 text-lg font-san mb-1">
                  BY APPOINTMENT ONLY
                </span>

                <span className=" flex text-lg items-center gap-3 leading-[1.5] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>

                  <a href="tel:905.336.8953">905.336.8953 x1</a>
                </span>

                <span className=" flex text-lg  items-center gap-3 font-normal leading-[1.5] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@gableviewhomes.com
                </span>
              </p>
{/* 
              <span className="text-lg ">
                Notting Hill Towns <br />
                123 Full Address Lane <br />
                Cambridge, ON <br /> <br />
                <a
                  href="https://goo.gl/maps/zD5BiHHfQDeS9JNA6"
                  className="hover:font-medium pt-2 text-lg   border-b-2 pb-[4px]"
                >
                  Get Driving Directions
                </a>
              </span> */}
            </div>

            <div
              id="contact-sales"
              className="w- 12/12 mt-[60px] lg:w-6/12 bg-white  -lg  flex flex-col  relative z-10 "
            >
              <div className="flex flex-col text-center w-full mb-12">

                {/* <p className="w-full mx-auto leading-relaxed text-base">
                  Please provide your information below and one of our team
                  members will follow up with you to coordinate an appointment
                  with you!
                </p> */}
              </div>

      
{/* 
              <MailchimpForm
              ></MailchimpForm> */}

            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
