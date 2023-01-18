import Accordion from './components/Accordion/Accordion';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Novelties from './components/Novelties/Novelties';
import Shop from './components/Shop/Shop';
import Tabs from './components/Tabs/Tabs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Novelties />
      <Reviews />
      <Accordion />
      <Shop />
      <Tabs />
      <Footer />
    </>
  );
};

export default App;
