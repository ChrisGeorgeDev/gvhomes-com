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

export default function Home() {
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
                        }
                    ],
                }}
            />

            <Navbar />




            <ResourcesHero>
                <span className="montserrat">COMMUNITY RESOURCES</span>
                  <h1 className="text-left w-7/12 2xl:w-6/12   text-6xl leading-[1.2em] font-bold block text-black">
                    The Residences on Kennedy Circle
                </h1>
            </ResourcesHero>


            <main id="main" className="mb-auto">


                <section className="border-b pb-20">
        



<div className="py-10 container gap-5 flex w-full border-b">

<div className="" >
<svg width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59 50.7411L59 50.6221M59 50.6221L59 1L1 0.999997L1 50.7411L29.7642 58L59 50.6221Z" stroke="black"/>
<path d="M18 43H42.5" stroke="black"/>
<path d="M29.6464 33.3536C29.8417 33.5488 30.1583 33.5488 30.3536 33.3536L33.5355 30.1716C33.7308 29.9763 33.7308 29.6597 33.5355 29.4645C33.3403 29.2692 33.0237 29.2692 32.8284 29.4645L30 32.2929L27.1716 29.4645C26.9763 29.2692 26.6597 29.2692 26.4645 29.4645C26.2692 29.6597 26.2692 29.9763 26.4645 30.1716L29.6464 33.3536ZM29.5 10L29.5 33L30.5 33L30.5 10L29.5 10Z" fill="black"/>
</svg>

</div>

<div className="grow flex gap-2 flex-col">
    <span className="uppercase montserrat font-normal">DOCUMENT</span>
    <a href="">    
    <span className="text-xl hover:text-red-600 font-bold">Digital Decor Centre</span>
</a>
    <span className="uppercase montserrat font-normal">PDF 2MB</span>
</div>

<div className="flex-col flex justify-between">
<span className=" uppercase montserrat font-normal">PUBLISHED</span>
<span className=" uppercase montserrat font-normal">03.22.22</span>


</div>


</div>

<div className="py-10 container gap-5 flex w-full border-b">

<div className="" >
<svg width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59 50.7411L59 50.6221M59 50.6221L59 1L1 0.999997L1 50.7411L29.7642 58L59 50.6221Z" stroke="black"/>
<path d="M18 43H42.5" stroke="black"/>
<path d="M29.6464 33.3536C29.8417 33.5488 30.1583 33.5488 30.3536 33.3536L33.5355 30.1716C33.7308 29.9763 33.7308 29.6597 33.5355 29.4645C33.3403 29.2692 33.0237 29.2692 32.8284 29.4645L30 32.2929L27.1716 29.4645C26.9763 29.2692 26.6597 29.2692 26.4645 29.4645C26.2692 29.6597 26.2692 29.9763 26.4645 30.1716L29.6464 33.3536ZM29.5 10L29.5 33L30.5 33L30.5 10L29.5 10Z" fill="black"/>
</svg>

</div>

<div className="grow flex gap-2 flex-col">
    <span className="uppercase montserrat font-normal">DOCUMENT</span>
    <span className="text-xl font-bold">Digital Decor Centre</span>
    <span className="uppercase montserrat font-normal">PDF 2MB</span>
</div>

<div className="flex-col flex justify-between">
<span className=" uppercase montserrat font-normal">PUBLISHED</span>
<span className=" uppercase montserrat font-normal">03.22.22</span>


</div>


</div>




<div className="py-10 container gap-5 flex w-full ">

<div className="" >
<svg width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59 50.7411L59 50.6221M59 50.6221L59 1L1 0.999997L1 50.7411L29.7642 58L59 50.6221Z" stroke="black"/>
<path d="M18 43H42.5" stroke="black"/>
<path d="M29.6464 33.3536C29.8417 33.5488 30.1583 33.5488 30.3536 33.3536L33.5355 30.1716C33.7308 29.9763 33.7308 29.6597 33.5355 29.4645C33.3403 29.2692 33.0237 29.2692 32.8284 29.4645L30 32.2929L27.1716 29.4645C26.9763 29.2692 26.6597 29.2692 26.4645 29.4645C26.2692 29.6597 26.2692 29.9763 26.4645 30.1716L29.6464 33.3536ZM29.5 10L29.5 33L30.5 33L30.5 10L29.5 10Z" fill="black"/>
</svg>

</div>

<div className="grow flex gap-2 flex-col">
    <span className="uppercase montserrat font-normal">DOCUMENT</span>
    <span className="text-xl font-bold">Digital Decor Centre</span>
    <span className="uppercase montserrat font-normal">PDF 2MB</span>
</div>

<div className="flex-col flex justify-between">
<span className=" uppercase montserrat font-normal">PUBLISHED</span>
<span className=" uppercase montserrat font-normal">03.22.22</span>


</div>


</div>























                </section>

          







            </main>

            <Footer />
        </div>
    );
}






