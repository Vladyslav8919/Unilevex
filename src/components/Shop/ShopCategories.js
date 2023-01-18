const ShopCategories = ({ categories, filterItems }) => {
  return (
    <div className="shop--btn-container">
      {categories.map((category, index) => (
        <button
          key={index}
          className="category--filter-btn"
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default ShopCategories;
