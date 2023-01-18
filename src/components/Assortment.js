import { assortment } from '../data';

const Assortment = () => {
  const renderedAssortment = assortment.map(({ id, cost, image, title }) => (
    <div key={id}>
      <div
        className="bg-cover bg-no-repeat p-20 h-[100%]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="text-white bg-black text-center"></p>
      </div>
      <div>
        <span>{title}</span>
        <span>${cost}</span>
      </div>
    </div>
  ));
  return <>{renderedAssortment}</>;
};
export default Assortment;
