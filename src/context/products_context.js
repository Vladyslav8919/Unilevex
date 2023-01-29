import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import { useEffect } from 'react';

// utils / constants
const products_url = 'https://course-api.com/react-store-products';

const ProductsContext = React.createContext();

// actions
const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
const GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN';
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
const GET_SINGLE_PRODUCT_BEGIN = 'GET_SINGLE_PRODUCT_BEGIN';
const GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS';
const GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR';

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true };
    case CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false };
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
    case GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products,
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true };
    case GET_SINGLE_PRODUCT_BEGIN: {
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };
    }
    case GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
      };
    }
    case GET_SINGLE_PRODUCT_ERROR: {
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };
    }
    default:
      throw new Error(`No Matching '${action.type}' - action type`);
  }
};

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios(url);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
