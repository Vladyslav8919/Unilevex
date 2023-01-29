import React from 'react';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <section className="mt-12 flex justify-center md:justify-end">
      <div>
        <article className="border border-grey-800 py-6 px-12">
          <h5 className="text-sm grid grid-cols-[200px_1fr]">
            Subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p className="text-sm grid grid-cols-[200px_1fr] capitalize">
            Shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <p className="mt-8 text-sm font-bold grid grid-cols-[200px_1fr]">
            Order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </p>
        </article>
        {myUser ? (
          <Link
            to="/checkout"
            className="inline-block w-full mt-4 text-center font-bold border border-gray-200"
          >
            Proceed to checkout
          </Link>
        ) : (
          <button
            type="button"
            className="w-full mt-4 text-center font-bold"
            onClick={loginWithRedirect}
          >
            Login
          </button>
        )}
      </div>
    </section>
  );
};
export default CartTotals;
