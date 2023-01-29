import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';
import { useProductsContext } from '../../context/products_context';
import { useCartContext } from '../../context/cart_context';

const NavButtons = ({ children, href }) => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  // const isSidebarOpen = true;

  let navBtnsClass = 'nav-item hidden md:flex  ';
  if (isSidebarOpen)
    navBtnsClass = 'nav-item flex items-center justify-center ';

  return (
    <div className={navBtnsClass}>
      <Link
        to="/cart"
        className="px-3 py-2 flex items-center text-sm leading-snug text-black hover:opacity-75 mr-1 "
      >
        <span
          className={
            isSidebarOpen
              ? "relative before:content-['Cart'] before:m-1 block text-sm font-bold  hover:text-black"
              : 'relative'
          }
          onClick={closeSidebar}
        >
          <FiShoppingCart />
          <span className="absolute -top-2 -right-1 text-[10px] font-light">
            {total_items}
          </span>
        </span>
      </Link>
      <button
        type="button"
        className={
          isSidebarOpen
            ? "before:content-['Login'] before:m-1 block text-sm font-bold hover:text-gray-600"
            : ''
        }
      >
        <RxPerson />
      </button>
    </div>
  );
};
export default NavButtons;
