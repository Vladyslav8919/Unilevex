import StoreItemsList from './StoreItemsList';
import Title from './Title';

const Store = () => {
  return (
    <section className="section" id="shop">
      <Title>Welcome to our Store</Title>
      <div className="section-center featured-center">
        <StoreItemsList />
      </div>
    </section>
  );
};
export default Store;
