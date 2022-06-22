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
            },
          ],
        }}
      />

      <Navbar />

      <InteriorHero
        image="/img/hero/services-hero.jpg"
        imagePortrait="/img/comm/landing-portrait.jpg"
        desktopPosition="object-top"
        style="text-blue-ggDark flex-col"
      >
                <h1 className="text-center drop-shadow-md text-5xl lg:text-8xl leading-[1.2em] font-bold block text-white">
          Our Services
        </h1>
      </InteriorHero>

      <main id="main" className="mb-auto">
      <section id="real-estate-development" className="border-b">
          <div className="container mx-auto px-5 sectionp">
            <h2>Real Estate Development</h2>
            <p>
              Gable View Homes is a full-service real estate development firm
              specializing in new construction residential projects.
            </p>

            <div className="flex flex-col xl:flex-row xl:gap-24">
              <p>
                As real estate developers, we guide the development process,
                coordinate the development team and serve as the central point
                for communication and decision-making for all projects to
                execute every development project successfully. With our
                experience, knowledge and visionary planning and development,
                Gable View Homes is uniquely positioned to take an
                all-encompassing approach to each and every project.
              </p>

              <div>
                <h3>Areas of expertise</h3>
                <ul className="text-lg ml-[.9em] list-disc list-outside leading-[1.4em]">
                  <li> Site selection</li>
                  <li>Acquisition</li>
                  <li>Securing funding</li>
                  <li>Design</li>
                  <li>Construction management</li>
                  <li>Project management</li>
                  <li>Leasing and sales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="construction-management" className="border-b">
          <div className="container mx-auto px-5 sectionp">
            <h2>Project & Construction Management</h2>
            <p>
              At Gable View Homes, we facilitate the entire construction process
              including design, preconstruction and development, from project
              mobilization to completion.
            </p>

            <div className="flex flex-col xl:flex-row xl:gap-24">
              <p>
                As project and construction managers, we are able to provide
                end-to-end management solutions from pre-construction through
                post-construction phases, to deliver projects successfully on
                time and on budget.{" "}
              </p>

              <div>
                <h3>Areas of expertise</h3>
                <ul className="text-lg ml-[.9em] list-disc list-outside leading-[1.4em]">
                  <li>Pre-construction services</li>
                  <li>Construction Services</li>
                  <li>Post-Construction Services</li>
                  <li>Communication Plan</li>
                  <li>Sustainability and Energy Efficiency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="full-service-marketing" className="border-b">
          <div className="container mx-auto px-5 sectionp">
            <h2>Full-service Marketing</h2>
            <p>
              With our experience in launching real estate development projects
              from concept to launch, Gable View Homes develops custom marketing
              strategies for the new homes industry.
            </p>

            <div className="flex flex-col xl:flex-row xl:gap-24">
              <p>
                Our in-house marketing and sales team take a hands-on approach
                to marketing and selling new development projects. Our services
                include analyzing market conditions, determining competitive
                price points, creating sellable brands and delivering market
                strategies to pricing and marketing & sales operations.{" "}
              </p>

              <div>
                <h3>Areas of expertise</h3>
                <ul className="text-lg ml-[.9em] list-disc list-outside leading-[1.4em]">
                  <li> Advisory</li>
                  <li>Project Planning</li>
                  <li>Communications</li>
                  <li>Sales</li>
                  <li>Marketing</li>
                  <li>Lease up</li>
                  <li>Customer Service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="custom-homes" className="border-b">
          <div className="container mx-auto px-5 sectionp">
            <h2>Custom Homes</h2>
            <p>
              Gable View Homes applies an experienced approach to building
              custom homes, residential additions and large-scale renovations.
            </p>

            <div className="flex flex-col xl:flex-row xl:gap-24">
              <p>
                Regardless of the scale, we work closely and collaboratively
                with each of our clients, including all project stakeholders and
                sub-contractors, to bring their dream project into reality. We
                are dedicated to deliver all projects with quality, integrity
                and superior craftmanship, starting with the design process
                through the final states of construction.
              </p>
              <div>
                <h3>Areas of expertise</h3>
                <ul className="text-lg ml-[.9em] list-disc list-outside leading-[1.4em]">
                  <li> Preliminary Planning</li>
                  <li>Concept and Design </li>
                  <li>Development</li>
                  <li>Cost Evaluation and Budget Planning</li>
                  <li>Construction</li>
                  <li>Construction Management </li>
                  <li>Site Inspections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
