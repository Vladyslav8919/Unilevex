import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <section>
      <div className="md:sticky md:top-4">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="mb-5">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="p-2 bg-gray-100 rounded tracking-wide placeholder:capitalize"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}
          {/* categories */}
          <div className="mb-5">
            <h5 className="mb-2">Category</h5>
            <div>
              {categories.map((c, i) => {
                return (
                  <button
                    key={i}
                    name="category"
                    type="button"
                    className={`${
                      category === c.toLowerCase()
                        ? 'border-gray-500 opacity-100 capitalize py-1'
                        : 'block my-1 mx-0 py-1 px-0 capitalize bg-transparent border-none border-b-1 tracking-5 text-gray-500 pointer'
                    }`}
                    onClick={updateFilters}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}

          {/* companies */}
          <div className="mb-5">
            <h5 className="mb-2">Company</h5>
            <select
              name="company"
              id="company"
              value={company}
              onChange={updateFilters}
              className="bg-gray-100 p-1"
            >
              {companies.map((c, i) => {
                return (
                  <option key={i} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of companies */}
          {/* colors */}
          <div className="mb-5">
            <h5 className="mb-2">Colors</h5>
            <div className="flex items-center">
              {colors.map((c, i) => {
                if (c === 'all') {
                  return (
                    <button
                      key={i}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === 'all'
                          ? 'flex items-center justify-center mr-2  border-b-2 border-black opacity-100  border-gray-500'
                          : 'flex items-center justify-center mr-2 border-b-2 border-transparent opacity-50'
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={i}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c
                        ? 'inline-block w-4 h-4 rounded bg-[#222] mr-2 border-b-2 border-transparent pointer opacity-100 flex items-center justify-center'
                        : 'inline-block w-4 h-4 rounded bg-[#222] mr-2 border-b-2 border-transparent pointer opacity-50 flex items-center justify-center'
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className="mb-5">
            <h5 className="mb-2">Price</h5>
            <p className="mb-1">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className="mb-5 grid grid-cols-[auto_1fr] items-center capitalize gap-2 text-sm max-w-[200px]">
            <label htmlFor="shipping">Free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button
          type="button"
          className="clear-btn bg-black text-white py-1 px-2"
          onClick={clearFilters}
        >
          Clear filters
        </button>
      </div>
    </section>
  );
};
export default Filters;
