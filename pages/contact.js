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
                title="Contact Us"
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
                image="/img/hero/contact-hero.jpg"
                imagePortrait="/img/comm/landing-portrait.jpg"
                desktopPosition="object-top"
                style="text-blue-ggDark flex-col" >


                <h1 className="text-center drop-shadow-md  text-8xl leading-[1.2em] font-bold block text-white">
                    Contact Us
                </h1>


            </InteriorHero>


            <main id="main" className="mb-auto">


                <section className="border-b">
                    <div className="container mx-auto px-5 sectionp  justify-between flex flex-col lg:flex-row gap-2 lg:gap-24">


                       <div className="w-full lg:w-1/3">
                       <h2>Get in touch</h2>


                       </div>

                        <div className="grid w-full lg:w-2/3 grid-cols-1 md:grid-cols-2 gap-10">

                            <div className="text-lg ">
                                <span className=" font-medium text-black leading-[1.5] block mb-2">
                                    Sales
                                </span>
                                <span className=" flex items-center gap-3 leading-[1.5] ">


                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>

                                    <a href="tel:905.336.8953">
                                        905.336.8953 x1
                                    </a>
                                </span>

                                <span className=" flex items-center gap-3 font-normal leading-[1.5] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    sales@gableviewhomes.com
                                </span>

                            </div>

                            <div className="text-lg ">
                                <span className=" font-medium text-black leading-[1.5] block mb-2">
                                 Design Centre
                                </span>
                                <span className=" flex items-center gap-3 leading-[1.5] ">


                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>

                                    <a href="tel:905.336.8953">
                                        905.336.8953 x4
                                    </a>
                                </span>

                                <span className=" flex items-center gap-3 font-normal leading-[1.5] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    decor@gableviewhomes.com
                                </span>

                            </div>


                            <div className="text-lg ">
                                <span className=" font-medium text-black leading-[1.5] block mb-2">
                                    Warranty
                                </span>
                                <span className=" flex items-center gap-3 leading-[1.5] ">


                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>

                                    <a href="tel:905.336.8953">
                                        905.336.8953 x6
                                    </a>
                                </span>

                                <span className=" flex items-center gap-3 font-normal leading-[1.5] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    warrantyservice@gableviewhomes.com
                                </span>

                            </div>



                            <div className="text-lg ">
                                <span className=" font-medium text-black leading-[1.5] block mb-2">
                                    Customer Care
                                </span>
                                <span className=" flex items-center gap-3 leading-[1.5] ">


                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>

                                    <a href="tel:905.336.8953">
                                        905.336.8953 x2
                                    </a>
                                </span>

                                <span className=" flex items-center gap-3 font-normal leading-[1.5] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    info@gableviewhomes.com
                                </span>

                            </div>

                        </div>













                    </div>
                </section>
                <section className="border-b">
                    <div className="container mx-auto px-5 sectionp  justify-between flex flex-col lg:flex-row gap-2 lg:gap-24">


                    <div className="w-full lg:w-1/3">
                  <h2>General inquiries</h2>

                  </div>


                        <div className="grid w-full lg:w-2/3 grid-cols-1 md:grid-cols-2 gap-10">

                            <div className="text-lg ">
                                <span className=" font-medium text-black leading-[1.5] block mb-2">
                                    Head Office <br/> (By Appointment Only)
                               
                                </span>
                                <span className="leading-[1.3] block mb-4">
                                1100 Burloak Drive<br/>
                                Suite 300<br/>
                                Burlington, ON<br/>  L7L 6B2
                                </span>
                            
                                <span className=" flex items-center gap-3 leading-[1.5] ">


                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>

                                    <a href="tel:905.336.8953">
                                        905.336.8953
                                    </a>
                                </span>

                                <span className=" flex items-center gap-3 font-normal leading-[1.5] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    hello@gableviewhomes.com
                                </span>
                            
                            </div>

           


             



                            <div className="text-lg ">
                             
                            <iframe width="100%" className="grayscale" height="100%"  frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.0719424359527!2d-79.75970180000002!3d43.396425699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b60b84d78cd6b%3A0xabdff2fc08cf19a8!2s1100%20Burloak%20Dr%2C%20Burlington%2C%20ON%20L7L%206B2!5e0!3m2!1sen!2sca!4v1654747127333!5m2!1sen!2sca" ></iframe>


                            

                            </div>

                        </div>













                    </div>
                </section>




            </main>

            <Footer />
        </div>
    );
}


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.0719424359527!2d-79.75970180000002!3d43.396425699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b60b84d78cd6b%3A0xabdff2fc08cf19a8!2s1100%20Burloak%20Dr%2C%20Burlington%2C%20ON%20L7L%206B2!5e0!3m2!1sen!2sca!4v1654747127333!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}