import React from 'react';
// import styled from 'styled-components';
import Product from '../components/NewArrival/Product';

const GridView = ({ products }) => {
  return (
    <section className="">
      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

// const Wrapper = styled.section`
//   img {
//     height: 175px;
//   }

//   .products-container {
//     display: grid;
//     gap: 2rem 1.5rem;
//   }

//   @media (min-width: 992px) {
//     .products-container {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }
//   @media (min-width: 1170px) {
//     .products-container {
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }
// `;

export default GridView;
