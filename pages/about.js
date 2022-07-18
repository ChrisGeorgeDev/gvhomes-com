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
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const imageAnim = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const p1 = {
  hidden: { opacity: 0, x: 0, y: -25 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const p2 = {
  hidden: { opacity: 0, x: 0, y: 25 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function Home() {
  return (
    <div>
      <Layout
        title="About Gable View Homes"
        description={`Ya get me - The next level`}
      >
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

        <section>
          <motion.div
            className="container mx-auto px-5 sectionp "
            initial="hidden"
            whileInView={"enter"}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ staggerChildren: 0.2, staggerDirection: -1 }}
          >
            <h2>Who we are</h2>
            <motion.p variants={p1} transition={{ type: "ease", duration: 1 }}>
              Gable View Homes creates engaging and inspiring living experiences
              by setting new standards in real estate development.
            </motion.p>

            <motion.p variants={p2} transition={{ type: "ease", duration: 1 }}>
              Grounded in diverse community engagement and integration with each
              project, we design and develop spaces to live, work and play,
              ranging from townhomes to condominiums.
            </motion.p>
          </motion.div>
        </section>

        <section className="bg-gray-50 ">
          <SeparatorLeft
            bold="Spaces"
            thin="Designed <br/> For Life"
            svgtext="img/svg/spaces-designed-for-life.svg"
            image="/img/gvh-living.jpg"
          />
        </section>

        <section>
          <div className="container mx-auto px-5 sectionp">
            <motion.p
              initial="hidden"
              whileInView={"enter"}
              viewport={{ once: true, amount: 0.25 }}
              variants={p1}
              transition={{ type: "ease", duration: 1 }}
            >
              With over 25 years of experience, Gable View Homes' seasoned team
              provides the vision and execution expertise to create outstanding
              new buildings and homes in the GTA and Canada. As we continue to
              grow and expand our portfolio, we aim to create extraordinary
              designs and living environments.
            </motion.p>
          </div>
        </section>

        <section id="our-values" className=" bg-gray-50 ">
          <div className="container mx-auto px-5  sectionp">
            <h2>Our values</h2>
            <p>
              Our work is guided by passion and drive to reshape the way we
              build homes and communities.
            </p>

            <p>
              From contemporary townhomes to innovative condominiums, our
              mission to create outstanding spaces is guided by our{" "}
              <strong>three core values</strong>.
              {/*             
                    is to adhere to our core values of creating outstanding spaces through design and craftsmanship and to deliver homes with quality, innovation 
                    and customer service.              */}
            </p>
            <div className="mt-20">
              <ValuesTabs />
            </div>
          </div>
        </section>

        <section id="current-communities">
          <SeparatorRight
            bold="Current"
            thin="Communities"
            svgtext="img/svg/current-communities.svg"
            size="max-w-[75%]"
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

            <a
              href="https://kennedycirclecondo.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button>VISIT PROJECT SITE</Button>
            </a>
          </div>
        </section>

        <section id="past-communities" className="bg-gray-50">
          <SeparatorLeft
            bold="Past"
            thin="Communities"
            svgtext="img/svg/past-communities.svg"
            size="max-w-[75%]"
            image="/img/livingroom.jpg"
          />
          <div className="container mx-auto px-5 ">
            <div className="container px-5 pt-[40px]">
              <h2 className="h2  ">Highlights from Our Growing Portfolio</h2>

              <CommunityTabs />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
