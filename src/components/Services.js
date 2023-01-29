import { services } from '../data';

const Services = () => {
  return (
    <section className="section section-center">
      <article className="header lg:grid grid-cols-2 items-center">
        <h3 className="mb-2 lg:pr-28 font-semibold text-4xl">
          Most modern & fashionable furniture only for you
        </h3>
        <p className="leading-[1.8] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam
          autem tenetur optio? Dolores quas eaque labore? Perferendis, facilis
          quisquam?
        </p>
      </article>
      <div className="mt-16 grid sm:grid-cols-2  lg:grid-cols-3 gap-10 mt-6 grid">
        {services.map(({ id, icon, title, text }) => (
          <article key={id} className="text-center py-10 px-8 ">
            <span className="w-16 h-16 my-0 mx-auto grid place-items-center mb-4 bg-black text-white text-2xl p-1">
              {icon}
            </span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Services;
