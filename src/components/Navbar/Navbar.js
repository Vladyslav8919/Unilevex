import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products_context';
import PageLinks from '../PageLinks';
import NavButtons from './NavButtons';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = React.createRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;
  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainerRef.current.style.height = '0px';
  //   }
  // }, [showLinks, linksRef]);

  const { openSidebar } = useProductsContext();

  return (
    <>
      <nav className="flex justify-center items-center h-[10vh]">
        <div className="flex justify-between w-[90vw] h-16 mx-auto my-0 max-w-[1170px] md:grid grid-cols-[auto_1fr_auto] items-center">
          <div className="flex grow items-center justify-between">
            <Link to="/" className=" font-bold tracking-wider">
              Unilevex
            </Link>
            <button
              className="pointer md:hidden"
              type="button"
              onClick={openSidebar}
            >
              <AiOutlineMenu />
            </button>
          </div>
          <div className="">
            <PageLinks
              ref={linksRef}
              parentClass="hidden md:flex md:justify-center"
              itemClass="mx-3 lg:mx-4 text-gray-800 text-sm font-light lg:text-base  tracking-wide"
            />
          </div>
          <NavButtons className="hidden md:grid" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
