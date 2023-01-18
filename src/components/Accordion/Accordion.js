import { accordionData } from '../../data';
import AccordionQuestion from './AccordionQuestion';
const Accordion = () => {
  return (
    <div id="questions-accordion">
      <div className="accordion-container">
        <h3>Questions And Answers About Us</h3>
        <section className="accordion-info">
          {accordionData.map((item) => (
            <AccordionQuestion key={item.id} {...item} />
          ))}
        </section>
      </div>
    </div>
  );
};
export default Accordion;
