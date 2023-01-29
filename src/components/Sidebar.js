import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { pageLinks } from '../data';
import PageLink from './PageLink';
import PageLinks from './PageLinks';
import NavButtons from './Navbar/NavButtons';
import { useProductsContext } from '../context/products_context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  const sidebar =
    'fixed top-0 left-0 w-full h-full bg-white ease-in-out duration-300  -translate-x-full -z-10 md:hidden';

  return (
    <div className="text-center">
      <aside
        className={`${
          isSidebarOpen ? sidebar + ' translate-x-0 z-10' : sidebar
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <h2
            to="/"
            className="font-semibold tracking-wider justify-self-center"
          >
            Unilevex
          </h2>
          <button
            className="text-sm pointer  text-gray-400 hover:text-gray-300"
            type="button"
            onClick={closeSidebar}
          >
            <AiOutlineClose />
          </button>
        </div>
        <ul className="mb-8">
          {pageLinks.map((link) => (
            <PageLink
              key={link.id}
              {...link}
              itemClass="text-left mx-3 font-normal text-sm tracking-wide block px-6 py-4 ease-in-out duration-300 hover:pl-8 hover:text-grey-500 hover:bg-gray-50"
              onClose={closeSidebar}
            />
          ))}
          <li>
            <Link
              to="/checkout"
              className="text-left mx-3 font-normal text-sm tracking-wide block px-6 py-4 ease-in-out duration-300 hover:pl-8 hover:text-grey-500"
              onClick={closeSidebar}
            >
              Checkout
            </Link>
          </li>
        </ul>
        <NavButtons />
      </aside>
    </div>
  );
};
export default Sidebar;
