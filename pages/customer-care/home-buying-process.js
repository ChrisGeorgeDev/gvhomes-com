import Head from "next/head";
import Button from "../../components/Button";
import Link from "next/link";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import { NextSeo } from "next-seo";
import Navbar from "../../components/MainNav";
import InteriorHero from "../../components/Hero/InteriorHero";
import SeparatorLeft from "../../components/Separator/TextLeft";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout
        title=" Home Buying Process"
        description={`Ya get me - The next level`}
      >
        <InteriorHero
          image="/img/hero/homebuyers-hero.jpg"
          imagePortrait=""
          desktopPosition="object-top"
          style="text-blue-ggDark flex-col"
        >
          <h1 className="text-center drop-shadow-md text-5xl lg:text-8xl leading-[1.2em] font-bold block text-white">
            Home buying
            <br /> Process
          </h1>
        </InteriorHero>

        <section>
          <div className="container mx-auto px-5 sectionp">
            <h2>Thank you for choosing&nbsp;us.</h2>

            <p>
              As your homebuilder, our commitment is to deliver your new home
              built with the upmost quality, standards and innovation, as well
              as to ensure it is thoughtfully integrated into the fabric of your
              new community.
            </p>
            <p>
              Over the various stages of the homebuilding process, our team will
              connect and work together with you to achieve your vision for your
              new Gable View home. We've worked hard to provide all of our
              customers with this streamlined process.Our goal is to create a
              home that reflects your lifestyle and personal taste
            </p>
          </div>
        </section>

        <section id="the-home-buying-process" className="bg-gray-50">
          <SeparatorLeft
            image="/img/finishes.jpg"
            thin=" Starts here"
            bold="Your journey"
            size="max-w-[75%]"
            svgtext="/img/svg/start-here.svg"
          />

          <div className="lg:container mx-auto px-5  sectionp">
            <h2>The Process</h2>
            <Services />
          </div>
        </section>

        <section id="home-owner-guide" className="border-b">
          <div className="container mx-auto px-5 sectionp">
            <h2>Resources</h2>
            <p>
              Our Welcome Package will guide you step-by-step to inform you of
              who will connect with you over the course of the build – before,
              during and after your home have been constructed.
            </p>

            <p>
              Please save, review and refer to this package as you embark on
              this very special Gable View Homes experience.
            </p>

            <Link href="#">
              <a>
                <Button>DOWNLOAD THE GUIDE</Button>
              </a>
            </Link>
          </div>
          <div
            id="home-owner-resources"
            className="container mx-auto px-5 sectionp"
          >
            <p>Community Resources</p>

            <div className="flex ">
              <Link href="/customer-care/owner-resources/notting-hill-towns">
                <a className="w-1/4 bg-[url('/img/tile-notting-hill.jpg')] bg-cover bg-center ">
                  <img
                    className="w-1/2 mx-auto py-16 invert brightness-0 "
                    src="/img/svg/NottingHill.svg"
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className="container mx-auto px-5 sectionp">
            <p>
              Thank you for joining our family, we look forward to welcoming you
              home.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
}
