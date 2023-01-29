import { accordionData } from '../../data';
import AccordionQuestion from './AccordionQuestion';
const Accordion = () => {
  return (
    <div>
      <div className="section  section-center my-6 mx-auto pt-0 px-8 gap-x-4 gap-y-8 lg:grid lg:grid-cols-[250px_1fr] ">
        <h3 className="font-semibold text-4xl">
          Questions And Answers About Us
        </h3>
        <section className="max-w-5/12">
          {accordionData.map((item) => (
            <AccordionQuestion key={item.id} {...item} />
          ))}
        </section>
      </div>
    </div>
  );
};
export default Accordion;
