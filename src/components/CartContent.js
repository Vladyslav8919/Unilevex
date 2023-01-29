import React from 'react';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <section className="section section-center">
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="flex justify-between mt-8">
        <Link
          to="/products"
          className="bg-transparent border-transparent capitalize py-1 px-2 bg-black text-white tracking-wide font-normal pointer"
        >
          Continue shopping
        </Link>
        <button
          type="button"
          className="bg-transparent border-transparent capitalize py-1 px-2 bg-black text-white tracking-wide font-normal pointer clear-btn"
          onClick={clearCart}
        >
          Clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};
export default CartContent;
