import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews';
import Store from './components/Store';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Store />
      <Reviews />
      <Accordion />
      <Footer />
    </>
  );
};

export default App;
