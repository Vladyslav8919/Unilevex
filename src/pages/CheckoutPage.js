import React from 'react';
import StripeCheckout from '../components/StripeCheckout';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <div className="page flex items-center justify-center">
        {cart.length < 1 ? (
          <div className="text-center">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              Fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </main>
  );
};
export default CheckoutPage;
