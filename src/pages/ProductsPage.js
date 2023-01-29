import Filters from '../components/Filters';
import Sort from '../components/Sort';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  return (
    <main>
      <div className="page">
        <div className="section section-center products grid grid-cols-[auto_1fr] gap-x-6">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductsPage;
