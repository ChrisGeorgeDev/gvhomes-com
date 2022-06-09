import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { debounce } from '../../hooks/debounce';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   const handleScroll = debounce(() => {
//     const currentScrollPos = window.pageYOffset;

//     setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 20) || currentScrollPos < 20);

//     setPrevScrollPos(currentScrollPos);
//   }, 50);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
// console.log(prevScrollPos)


const [show, setShow] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

const controlNavbar = () => {
  if (typeof window !== 'undefined') { 
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  }
};

useEffect(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }
}, [lastScrollY]);







  //   return () => window.removeEventListener('scroll', handleScroll);

  // }, [prevScrollPos, visible, handleScroll]);

  // const navbarStyles = {
  //   position: 'fixed',
  //   height: '60px',
  //   width: '100%',
  //   backgroundColor: 'grey',
  //   textAlign: 'center',
  //   transition: 'top 0.6s'
  // }

  return (
   
<header className={`${ lastScrollY == 0 ? "fadeHov nav" : " nav"  }  ${ show ? "" : "navScroll"  }`}>
  <div className="px-[24px] lg:px-[48px] xl:px-[96px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<Link href="/">
<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg
              width="231"
              height="33"
              viewBox="0 0 231 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.0736 19.328H56.8961V25.6775C56.0698 26.3303 55.1044 26.829 54.0041 27.1777C52.9037 27.5264 51.7706 27.7007 50.6048 27.7007C48.9686 27.7007 47.4918 27.348 46.1747 26.6425C44.8575 25.937 43.8267 24.9639 43.074 23.7191C42.3254 22.4744 41.9491 21.0715 41.9491 19.5105C41.9491 17.9495 42.3254 16.5466 43.074 15.3019C43.8226 14.0571 44.8616 13.084 46.1829 12.3785C47.5082 11.6731 48.9931 11.3203 50.6498 11.3203C51.9956 11.3203 53.2228 11.5393 54.3231 11.9812C55.4235 12.4231 56.3521 13.0678 57.1007 13.9152L55.219 15.7357C53.9959 14.5234 52.5192 13.9152 50.7889 13.9152C49.6558 13.9152 48.6495 14.1504 47.77 14.6207C46.8905 15.091 46.1992 15.7519 45.7043 16.5993C45.2052 17.4508 44.9598 18.4198 44.9598 19.5105C44.9598 20.5728 45.2093 21.5297 45.7043 22.3771C46.2033 23.2285 46.8905 23.8935 47.77 24.38C48.6495 24.8666 49.6476 25.1098 50.7643 25.1098C52.0201 25.1098 53.1205 24.8382 54.0695 24.2908V19.328H54.0736Z"
                fill="black"
              />
              <path
                d="M75.8356 23.7881H67.8016L66.2186 27.4736H63.1425L70.3746 11.5433H73.3117L80.5643 27.4736H77.4432L75.8356 23.7881ZM74.8497 21.4689L71.8186 14.5072L68.812 21.4689H74.8497Z"
                fill="black"
              />
              <path
                d="M100.698 20.6377C101.218 21.3148 101.479 22.15 101.479 23.1515C101.479 24.53 100.944 25.5964 99.8719 26.3465C98.8001 27.0966 97.2375 27.4736 95.1881 27.4736H87.1992V11.5474H94.73C96.628 11.5474 98.0884 11.9163 99.1151 12.6502C100.142 13.3881 100.653 14.3977 100.653 15.6871C100.653 16.4777 100.469 17.1751 100.101 17.7792C99.7328 18.3874 99.2297 18.8577 98.5874 19.1902C99.4751 19.4781 100.179 19.9606 100.698 20.6377ZM90.1854 13.8666V18.2576H94.4109C95.4499 18.2576 96.2517 18.0711 96.808 17.7022C97.3684 17.3292 97.6466 16.7899 97.6466 16.0763C97.6466 15.3465 97.3684 14.7991 96.808 14.4261C96.2476 14.0531 95.4499 13.8706 94.4109 13.8706H90.1854V13.8666ZM98.4729 22.8555C98.4729 21.3229 97.3153 20.5566 95.0082 20.5566H90.1854V25.1544H95.0082C97.3153 25.1544 98.4729 24.3881 98.4729 22.8555Z"
                fill="black"
              />
              <path
                d="M109.26 11.5474H112.246V24.972H120.648V27.4736H109.26V11.5474Z"
                fill="black"
              />
              <path
                d="M139.657 24.9923V27.4736H127.606V11.5474H139.338V14.0287H130.592V18.1684H138.352V20.6052H130.592V24.9963H139.657V24.9923Z"
                fill="black"
              />
              <path
                d="M169.563 11.5474L162.56 27.4777H159.623L152.6 11.5474H155.835L161.186 23.8367L166.581 11.5474H169.563Z"
                fill="black"
              />
              <path
                d="M175.855 11.5474H178.841V27.4777H175.855V11.5474Z"
                fill="black"
              />
              <path
                d="M199.822 24.9923V27.4736H187.771V11.5474H199.502V14.0287H190.757V18.1684H198.517V20.6052H190.757V24.9963H199.822V24.9923Z"
                fill="black"
              />
              <path
                d="M231 11.5474L225.674 27.4777H222.508L218.536 15.6911L214.494 27.4777H211.304L205.978 11.5474H209.078L213.071 23.6543L217.227 11.5474H219.98L224.042 23.7232L228.153 11.5474H231Z"
                fill="black"
              />
              <path
                d="M28.221 33H0V30.101H25.2962V19.9768L14.1126 11.3325L6.10726 17.5157L6.08681 13.8544L14.1126 7.65499L28.2251 18.5617V33H28.221ZM28.221 14.5842L14.1126 3.67748L2.92478 12.3218V24.084H18.8372V18.951L21.762 21.2134V26.979H0V10.9067L14.1126 0L28.2251 10.9067V14.5842H28.221Z"
                fill="black"
              />
              <path
                d="M14.1125 0V3.67748L28.221 14.5842V10.9067L14.1125 0Z"
                fill="black"
              />
              <path
                d="M14.1126 7.65499V11.3325L25.2962 19.9768V30.101H0V33H28.221V18.5617L14.1126 7.65499Z"
                fill="black"
              />
              <path
                d="M25.2962 19.9768L28.221 18.5617V33H0V30.101H25.2962V19.9768Z"
                fill="black"
              />
            </svg>
    </a>
</Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

<Link href="/about">
<a className="mr-5 tracking-[.15em] text-black border-b-2 border-transparent hover:text-gray-600 hover:border-b-2 hover:border-black">ABOUT</a>
</Link>
<Link href="/services">

<a className="mr-5 tracking-[.15em] text-black border-b-2 border-transparent hover:text-gray-600 hover:border-b-2 hover:border-black">SERVICES</a>
</Link>

<Link href="/home-buying-process">

<a className="mr-5 tracking-[.15em] text-black border-b-2 border-transparent hover:text-gray-600 hover:border-b-2 hover:border-black">RESOURCES</a>
</Link>

<Link href="/contact">

<a className="mr-5 tracking-[.15em] text-black border-b-2 border-transparent hover:text-gray-600 hover:border-b-2 hover:border-black">CONTACTS</a>


</Link>

  
    </nav>

  </div>
</header>
  );
};

export default Navbar;



{/* <div style={{ ...navbarStyles, top: visible ? '0' : '-60px', backgroundColor: prevScrollPos > 0 ? 'grey' : 'transparent' }}>
Some Company Inc.
</div> */}