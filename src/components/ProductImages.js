import React, { useState } from 'react';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <section>
      <img
        src={main.url}
        alt="main"
        className="h-[300px] lg:h-[500px]  w-full object-cover block "
      />
      <div className="mt-1 grid grid-cols-5 gap-4 ">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${
                image.url === main.url ? 'shadow-sm shadow-black' : null
              } w-full block object-cover h-[50px] lg:h-[75px] h-[100px] pointer`}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ProductImages;
