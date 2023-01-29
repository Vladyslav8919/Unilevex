import { accordionData } from '../../data';
import AccordionQuestion from './AccordionQuestion';
const Accordion = () => {
  return (
    <div>
      <div className=" section-center my-5 mx-auto pt-0 px-8 gap-x-4 gap-y-8 lg:grid lg:grid-cols-[1fr_250px] ">
        <section className="max-w-5/12">
          {accordionData.map((item) => (
            <AccordionQuestion key={item.id} {...item} />
          ))}
        </section>
        <h3 className="font-semibold text-4xl">
          Questions And Answers About Us
        </h3>
      </div>
    </div>
  );
};
export default Accordion;
