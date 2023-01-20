import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import PageLinks from '../PageLinks';
import NavMenuItemsList from './NavMenuItemsList';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = React.createRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <>
      <nav className="flex sticky top-0  px-2 py-3 bg-white mb-0 z-10">
        <div className=" grow max-w-screen-xl px-4 mx-auto flex  items-center justify-between">
          <div className="grow md:grow-0 flex justify-between items-center">
            <a
              className=" 
              text-sm font-bold flex items-center tracking-wider leading-relaxed inline-block  py-2  whitespace-nowrap uppercase text-black"
              href="#placeholder"
            >
              Unilevex
            </a>
          </div>
          <div
            ref={linksContainerRef}
            className="h-0 md:!h-auto overflow-hidden ease-in-out duration-300 mr-6 md:mr-0"
          >
            <PageLinks
              ref={linksRef}
              parentClass="md:flex gap-3 "
              itemClass="text-sm px-2 block  items-center leading-relaxed py-2 whitespace-nowrap  text-black hover:bg-black hover:text-white md:hover:bg-white md:hover:text-gray-600 ease-in-out duration-150"
            />
          </div>
          <ul className="hidden md:flex">
            <NavMenuItemsList navbarOpen={toggleLinks} />
          </ul>
          <button
            className="text-black cursor-pointer text-base leading-none py-1 border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={toggleLinks}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
