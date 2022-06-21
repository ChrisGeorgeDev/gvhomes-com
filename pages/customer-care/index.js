import Head from "next/head";
import Button from "../../components/Button";
import Link from "next/link";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import { NextSeo } from "next-seo";
import Navbar from "../../components/MainNav";
import InteriorHero from "../../components/Hero/InteriorHero";
import SeparatorLeft from "../../components/Separator/TextLeft";


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
        image="/img/hero/homebuyers-hero.jpg"
        imagePortrait=""
        desktopPosition="object-top"
        style="text-blue-ggDark flex-col" >


<h1 className="text-center drop-shadow-md text-5xl lg:text-8xl leading-[1.2em] font-bold block text-white">
        Customer Care
            </h1>
   

      </InteriorHero>


      <main id="main" className="mb-auto">
        <section>
          <div className="container mx-auto px-5 sectionp">
              <h2>Thank you for
choosing&nbsp;us.</h2>
            <p>
            The Gable View Homes
experienced team of sales 
agents, interior designers, service 
coordinators and tradespeople 
are here to make the process of 
building your home as seamless 
and efficient as possible.
            </p>

            <p>
            As your homebuilder, our commitment is to deliver your new home built with the  upmost quality, standards and innovation, as well as to ensure it is thoughtfully integrated into the fabric of your new community. </p>
            <p>

Over the various stages of the homebuilding process, our team will connect and work together with you to achieve your vision for your new Gable View home. We’ve worked hard to provide all of our customers with this streamlined process.Our goal is to create a home that reflects your lifestyle and personal taste.             </p>

     
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="py-[125px] ">
  

<SeparatorLeft 
image="/img/finishes.jpg"
thin=" Starts here"
bold="Your journey"
/>




            <div className="lg:container mx-auto px-5 pt-20 sectionp">
              <h2>The Process</h2>
            <Services />
            </div>
          </div>
        </section>
           

        <section className="border-b">
          <div className="container mx-auto px-5 sectionp">
<h2>Resources</h2>
            <p>
            Our Welcome Package will guide 
you step-by-step to inform you 
of who will connect with you over 
the course of the build – before, 
during and after your home have 
been constructed. 
            </p>

   <p>Please save, review and refer to this package as you embark on this very special Gable View Homes experience.
       </p>   

       <Link href="/cows">
              <a>
                <Button>DOWNLOAD THE GUIDE</Button>
              </a>
            </Link>
          </div>

          <div className="container mx-auto px-5 sectionp">
            <p>
            Thank you for joining our family, we look forward to welcoming you home.
            </p>
            </div>
        </section>
         



      </main>

      <Footer />
    </div>
  );
}
