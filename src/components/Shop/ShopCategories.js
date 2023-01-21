import { useState } from 'react';
const ShopCategories = ({ categories, filterItems }) => {
  const [value, setValue] = useState(0);

  return (
    <div className="shop--btn-container">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category--filter-btn decoration-white underline underline-offset-8  ${
            index === value && 'underline underline-offset-8 decoration-black'
          }`}
          onClick={(e) => {
            filterItems(category);
            setValue(index);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default ShopCategories;
// border-2 border-transparent
// border border-transparent border-b-black
