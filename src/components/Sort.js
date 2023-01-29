import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = () => {
  const {
    filter_products: products = [],
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <section className="grid md:grid-cols-[auto_auto_1fr_auto] items-center mb-2 gap-x-2 sm:grid-cols-1 sm:row-gap-3 md:column-gap-8">
      <div className="sm:w-[50px] grid grid-cols-2 column-gap-2">
        <button
          type="button"
          className={`${
            grid_view
              ? 'bg-black text-white w-6 flex items-center justify-center pointer'
              : 'bg-transparent border-1 text-black w-6 flex items-center justify-center pointer'
          }`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid_view ? 'bg-black text-white' : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p className="capitalize mb-0">{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort" className="sm:inline-block sm:mr-2 capitalize">
          Sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="border-transparent capitalize py-1 px-2"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </section>
  );
};
export default Sort;
