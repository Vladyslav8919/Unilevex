import Accordion from './Accordion/Accordion';
import Tabs from './Tabs/Tabs';
import Slider from './Slider/Slider';
import Services from './Services';

const About = () => {
  return (
    <section className=" section-center">
      <Services />
      <Accordion />
      <Tabs />
      <Slider />
    </section>
  );
};
export default About;
