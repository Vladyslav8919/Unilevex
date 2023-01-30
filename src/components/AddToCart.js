import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((curAmount) => {
      let tempAmount = curAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((curAmount) => {
      let tempAmount = curAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  const colorBtnClass =
    'inline-block w-6 h-6 rounded-full bg-[#222] mr-2 border-none pointer opacity-50 flex items-center justify-center';

  return (
    <section className="mt-8">
      <div className="grid grid-cols-[125px_1fr] items-center mb-4  section-center">
        <span className="font-bold capitalize">colors :</span>
        <div className="flex">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color
                    ? `${colorBtnClass} opacity-100`
                    : `${colorBtnClass}`
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <IoCheckmarkOutline /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link
          to="/cart"
          className="mt-6 block py-1.5 uppercase tracking-wider text-sm w-[140px] text-center bg-black text-white"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          Add to Cart
        </Link>
      </div>
    </section>
  );
};
export default AddToCart;
