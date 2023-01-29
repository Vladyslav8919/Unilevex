import StoreItemsList from './NewArrivalList';
import Title from '../Title';
import { useProductsContext } from '../../context/products_context';
import Loading from '../Loading';
import Error from '../Error';
import Product from './Product';

const NewArrival = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <section className="section">
      <div className="title">
        <Title>New Arrival</Title>
      </div>
      <div className="section-center featured my-16 mx-auto grid gap-10 grid grid-cols-2 sm:grid-cols-3">
        {featured.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );

  // return (
  //   <section className="section section-center" id="shop">
  //     <Title>New Arrival</Title>
  //     <div className="section-center featured-center">
  //       <StoreItemsList />
  //     </div>
  //   </section>
  // );
};
export default NewArrival;
