import React, { useEffect, useContext, useReducer } from 'react';
import { useProductsContext } from './products_context';

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const SET_GRIDVIEW = 'SET_GRIDVIEW';
const SET_LISTVIEW = 'SET_LISTVIEW';
const UPDATE_SORT = 'UPDATE_SORT';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const UPDATE_FILTERS = 'UPDATE_FILTERS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const CLEAR_FILTERS = 'CLEAR_FILTERS';

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filter_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    }
    case SET_GRIDVIEW: {
      return { ...state, grid_view: true };
    }
    case SET_LISTVIEW: {
      return { ...state, grid_view: false };
    }
    case UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }
    case SORT_PRODUCTS: {
      const { sort, filter_products } = state;
      let tempProducts = [...filter_products];
      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filter_products: tempProducts };
    }
    case UPDATE_FILTERS: {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    }
    case FILTER_PRODUCTS: {
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;

      let tempProducts = [...all_products];
      // Filtering
      // Text
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }
      // Category
      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      // Company
      if (company !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        );
      }
      // Colors
      if (color !== 'all') {
        tempProducts = tempProducts.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }
      // Price
      tempProducts = tempProducts.filter((product) => product.price <= price);
      // Shipping
      if (shipping) {
        tempProducts = tempProducts.filter(
          (product) => product.shipping === true
        );
      }
      return { ...state, filter_products: tempProducts };
    }
    case CLEAR_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: state.filters.max_price,
          shipping: false,
        },
      };
    }
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
