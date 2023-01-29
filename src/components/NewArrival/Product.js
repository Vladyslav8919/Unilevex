import { Link } from 'react-router-dom';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { formatPrice } from '../../utils/helpers';

const Product = ({ image, name, price, id }) => {
  return (
    <article>
      <div className="group relative mb-2">
        <img
          src={image}
          alt={name}
          className="w-full block object-cover ease-in-out duration-300 group-hover:opacity-50 h-[225px] shadow-sm"
        />
        <Link
          to={`/products/${id}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 ease-in-out duration-300  opacity-0 group-hover:opacity-100 cursor:pointer "
        >
          <CgArrowsExpandUpRight className="text-2xl  text-white" />
        </Link>
      </div>
      <footer className="mt-1 flex  justify-between items-center">
        <h5 className="mb-0 font-normal capitalize">{name}</h5>
        <p className="text-sm text-[#aaa] mb-0 ">{formatPrice(price)}</p>
      </footer>
    </article>
  );
};
export default Product;
