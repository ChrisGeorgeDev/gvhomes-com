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
                image="/img/hero/services-hero.jpg"
                imagePortrait="/img/comm/landing-portrait.jpg"
                desktopPosition="object-top"
                style="text-blue-ggDark flex-col" >


                <h1 className="text-center drop-shadow-md  text-8xl leading-[1.2em] font-bold block text-white">
                    Contact
                </h1>


            </InteriorHero>


            <main id="main" className="mb-auto">


                <section className="border-b">
                    <div className="container mx-auto px-5 sectionp  justify-between flex gap-24">


                        <h2>Get in touch</h2>



                        <div className="grid w-2/3 grid-cols-2 gap-10">

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
                                    decor@gableviewhomes.com
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
                    <div className="container mx-auto px-5 sectionp  justify-between flex gap-24">


                        <h2>General inquiries</h2>



                        <div className="grid w-2/3 grid-cols-2 gap-10">

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
                                    decor@gableviewhomes.com
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




            </main>

            <Footer />
        </div>
    );
}


