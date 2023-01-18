import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import PageLinks from '../PageLinks';
import NavMenuItemsList from './NavMenuItemsList';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className=" sticky top-0 flex items-center justify-between px-2 py-3 bg-white mb-0 z-10">
        <div className="container px-4 mx-auto flex  items-center justify-between">
          <div className="flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold flex items-center tracking-wider leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#placeholder"
            >
              Unilevex
            </a>
          </div>
          <div className="relative flex flex-row ">
            <PageLinks
              parentClass="flex"
              itemClass="text-sm   items-center leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:opacity-75 text-black"
            />
          </div>

          <div
            className={
              'lg:flex items-center' + (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavMenuItemsList navbarOpen={navbarOpen} />
            </ul>
          </div>
          <button
            className="text-black cursor-pointer text-base leading-none px-3 py-1 border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
