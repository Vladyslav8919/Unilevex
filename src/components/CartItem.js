import React from 'react';
import { formatPrice } from '../utils/helpers';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };
  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <article className="grid grid-cols-[200px_auto_auto] grid-rows-[75px] gap-y-12 gap-x-4 justify-center items-center md:grid-cols-[1fr_1fr_1fr_1fr_auto] md:items-center md:grid-rows-[75px]">
      <div className="grid grid-rows-[75px] grid-cols-[75px_125px] items-center text-left gap-4 md:h-full md:grid md:grid-cols-[100px_200px] ">
        <img
          src={image}
          alt={name}
          className="w-full h-full block object-cover"
        />
        <div>
          <h5 className="text-xs md:text-sm mb-0">{name}</h5>
          <p className=" text-gray-500 text-xs md:text-sm tracking-wide capitalize mb-0 flex items-center justify-start">
            color :{' '}
            <span
              className="text-xs md:text-sm inline-block border border-gray-100 w-2 h-2 ml-2 w-3 h-3"
              style={{ background: color }}
            ></span>
          </p>
          <h5 className="price-small text-black md:hidden">
            {formatPrice(price)}
          </h5>
        </div>
      </div>
      <h5 className="hidden md:block mb-0 text-gray-500">
        {formatPrice(price)}
      </h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="hidden md:block md:text-grey-500 md:mb-0">
        {formatPrice(price * amount)}
      </h5>
      <button
        type="button"
        className="text-black bg-transparent border-transparent tracking-wide w-6 h-6 flex items-center justify-center text-xs pointer"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};
export default CartItem;
