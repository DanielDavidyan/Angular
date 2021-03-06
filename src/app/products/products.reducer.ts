import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {loadProductsSuccess, updateLimit} from './products.actions';
import {Product} from '../models/stock.model';

export const productsToken = 'productsToken';

export interface ProductsState {
  products: Product[];
}

export const ProductsInitialState: ProductsState = {
  products: []
};

export const productsReducer = createReducer(
  ProductsInitialState,
  on(updateLimit, (state, {productName, limit}) => ({
    ...state,
    products: update([...state.products], productName, limit)
  })),
  on(loadProductsSuccess, (state, {products}) => ({
    ...state,
    products
  }))
);

function update(products, productName, limit): Product[] {
  const productIndex = products.findIndex((stockProduct: Product) => stockProduct.name === productName);
  if (productIndex !== -1 && products[productIndex].limit) {
    products[productIndex] = {
      ...products[productIndex],
      limit: products[productIndex].limit - limit,
    };
  }
  return [...products];
}

export const getProductsState = createFeatureSelector<ProductsState>(productsToken);
export const getProducts = createSelector(getProductsState,
  state => state.products);

export const getProduct = createSelector(getProducts,
  (products, {productName}: { productName: string }) => {
    return products.find(stockProduct => stockProduct.name === productName);
  });
