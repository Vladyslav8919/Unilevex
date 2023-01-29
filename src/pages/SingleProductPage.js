import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ProductImages from '../components/ProductImages';
import Stars from '../components/Stars';
import AddToCart from '../components/AddToCart';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  const classInfo = 'capitalize w-[300px] grid grid-cols-[125px_1fr]';

  return (
    <main>
      <div className="section section-center page">
        <Link
          to="/products"
          className="py-2 px-1.5 uppercase tracking-wider text-sm text-white bg-black"
        >
          Back to products
        </Link>
        <div className="grid gap-16 mt-8 lg:grid-cols-2 lg:align-items:center ">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="text-[var(--clr-primary-5) lg:text-xl">
              {formatPrice(price)}
            </h5>
            <p className="leading-8 mt-4 max-w-2xl">{description}</p>
            <p className={classInfo}>
              <span className="font-bold">Available :</span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className={classInfo}>
              <span className="font-bold">SKU :</span>
              {sku}
            </p>
            <p className={classInfo}>
              <span className="font-bold">Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </main>
  );
};
export default SingleProductPage;
