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
import SeparatorLeft from "../components/Separator/TextLeft";
import SeparatorRight from "../components/Separator/TextRight";
import ResourceTab from "../components/ResourceTab";
import axios from "axios";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import LifestyleGallery from "../components/Hero/LifestyleGallery";

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

export default function Home({ community }) {
  return (
    <div>
      <Layout title="Brilliant Living">
        {/* <LandingHero
          image="/img/hero/morning-coffee.jpg"
          imagePortrait="/img/comm/landing-portrait.jpg"
          style="text-blue-ggDark flex-col "
          height="h-[100vh]"
        >
          <div className="flex px-5 content-end flex-col">
            <div className=" w-full lg:w-1/2">
              <h1>
                <span className="text-5xl lg:text-8xl leading-[1.2em] font-bold block text-white">
                  Spaces
                </span>
                <span className="text-5xl lg:text-8xl leading-[1.2em] font-thin text-white">
                  DESIGNED FOR&nbsp;LIFE
                </span>
              </h1>
            </div>
          </div>
        </LandingHero>
         */}
        <LifestyleGallery>
        <h1 className="drop-shadow-lg ">
                <span className="text-5xl lg:text-8xl leading-[1.2em] font-bold block text-white">
                  Spaces
                </span>
                <span className="text-5xl lg:text-8xl leading-[1.2em] font-thin text-white">
                  DESIGNED <br></br>FOR&nbsp;LIFE
                </span>
              </h1>

        </LifestyleGallery>

        <section className="leadp">
          <motion.div
            className="container mx-auto px-5 sectionp "
            initial="hidden"
            whileInView={"enter"}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ staggerChildren: 0.2, staggerDirection: -1 }}
          >
            <motion.p
              className="max-w-[690px]"
              variants={p1}
              transition={{ type: "ease", duration: 1 }}
            >
              At Gable View Homes, we are inspired to build houses and
              communities you'll be proud to call home.
            </motion.p>

            <motion.p
              className="max-w-[800px]"
              variants={p2}
              transition={{ type: "ease", duration: 1 }}
            >
              As a boutique developer with 25 years of experience, our vision
              remains a home that is inviting, desirable, affordable and
              thoughtfully integrated into the fabric of the surrounding
              community.
            </motion.p>

            <Link href="/about">
              <a>
                <Button>WHO WE ARE</Button>
              </a>
            </Link>
          </motion.div>
        </section>

        <section className=" bg-gray-50 flex flex-col gap-20">
          <SeparatorLeft
            bold="Elevated"
            thin=" Living <br/> Experiences"
            svgtext="/img/svg/elevated-experiences.svg"
            image="/img/kitchen_2.jpg"
          />
          <motion.div
            className="md:container md:mx-auto "
            initial="hidden"
            whileInView={"enter"}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ staggerChildren: 0.2, staggerDirection: -1 }}
          >
            <div className="container px-5">
              <motion.div
                variants={p1}
                transition={{ type: "ease", duration: 1 }}
                className="sectionp"
              >
                <h2 variants={p1} transition={{ type: "ease", duration: 1 }}>
                  Our Services
                </h2>

                <ServiceTabs />
                <p className="text-xl soleil max-w-[730px] font-normal mb-6">
                  Gable View Homes is a full-service real estate development
                  firm specializing in new construction residential projects.
                </p>
                <Link href="/services">
                  <a>
                    <Button>WHAT WE DO</Button>
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className=" flex flex-col gap-20">
          <SeparatorRight
            bold="Featured"
            thin=" Community"
            svgtext="/img/svg/featured-community.svg"
            size="max-w-[75%]"
            image="/img/kc-exterior.jpg"
          />
          <motion.div
            className="container mx-auto px-5 sectionp "
            initial="hidden"
            whileInView={"enter"}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ staggerChildren: 0.2, staggerDirection: -1 }}
          >
            <motion.p variants={p1} transition={{ type: "ease", duration: 1 }}>
              The Residences on Kennedy&nbsp;Circle
            </motion.p>
            <motion.p variants={p2} transition={{ type: "ease", duration: 1 }}>
              Gable View Homes is pleased to announce our expansion into the
              Town of Milton with our newest development, The Residences on
              Kennedy Circle.
            </motion.p>
            <a
              href="https://kennedycirclecondo.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Button>VISIT PROJECT SITE</Button>
            </a>
          </motion.div>
        </section>

        <section className=" bg-gray-50">
          <SeparatorLeft
            bold="Simplified"
            thin="Home buying <br/> process"
            svgtext="/img/svg/simplified-process.svg"
            image="/img/kc-suite-e.jpg"
          />
          <div className="container mx-auto px-5 sectionp">
            <motion.p variants={p1} transition={{ type: "ease", duration: 1 }}>
              We make buying a new home easy.
            </motion.p>

            <motion.p variants={p2} transition={{ type: "ease", duration: 1 }}>
              The Gable View Homes experienced team of sales agents, interior
              designers, service coordinators and tradespeople are here to make
              the process of building your home as seamless and efficient as
              possible.
            </motion.p>

            <Link href="/customer-care/home-buyer-resources">
              <a>
                <Button>FIND OUT HOW</Button>
              </a>
            </Link>
          </div>
        </section>
      </Layout>
    </div>
  );
}
