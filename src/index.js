import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import { ProductsProvider } from './context/products_context';
import { CartProvider } from './context/cart_context';
import { FilterProvider } from './context/filter_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <BrowserRouter>
          <ProductsProvider>
            <FilterProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FilterProvider>
          </ProductsProvider>
        </BrowserRouter>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
