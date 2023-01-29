import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './pages/PrivateRoute';
import About from './components/About';
import Home from './components/Home';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import ErrorPage from './components/ErrorPage';
import AuthWrapper from './pages/AuthWrapper';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <AuthWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/checkout" element={<PrivateRoute />}>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
          <Route path="products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AuthWrapper>
  );
};

export default App;
