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

export default function Login() {
  return (
    <div className="flex w-full h-screen">
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
            },
          ],
        }}
      />

<div className="h-screen hidden md:block md:w-4/12 lg:w-5/12 bg-[url('/img/portal/kc-bg.jpg')] bg-center bg-cover">
    
</div>

      <div className="h-screen md:max-w-md mx-auto px-10 flex justify-center items-center w-12/12 md:w-8/12 lg:w-7/12">
      <div className=" mx-auto w-full space-y-8">
    <div>
      <img className="mx-auto w-[300px] h-auto mb-12" src="/img/svg/gvh-logo.svg" alt="Workflow"/>
      <h2 className="mt-6 text-center text-2xl font-[600] text-gray-900">Sign in for portal access</h2>
     
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px">
        {/* <div>
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div> */}
        <div>
          <label for="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>



      <div>
        {/* <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">

            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button> */}


       <Link href="/resources">

       <a
         
            >
              <Button>LOGIN</Button>
            </a>
         
       </Link>

      </div>
    </form>
  </div>
      </div>

    </div>
  );
}

