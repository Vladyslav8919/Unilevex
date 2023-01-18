import StoreItemsList from './NoveltiesItemsList';
import Title from '../Title';

const Store = () => {
  return (
    <section className="section" id="shop">
      <Title>Novelties</Title>
      <div className="section-center featured-center">
        <StoreItemsList />
      </div>
    </section>
  );
};
export default Store;
