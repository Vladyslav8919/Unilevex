import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Shop from './components/Shop/Shop';
import About from './components/About';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
