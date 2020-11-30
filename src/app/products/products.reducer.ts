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

export const _productsReducer = createReducer(
  ProductsInitialState,
  on(updateLimit, (state, {productName, limit}) => ({
    ...state,
    products: update(state.products, productName, limit)
  })),
  on(loadProductsSuccess, (state, {products}) => ({
    ...state,
  products
  }))
);

function update(products, productName, limit): Product[] {
  const currentProducts: Product[] = [...products];
  const productIndex = currentProducts.findIndex((prod: Product) => prod.name === productName);
  if (productIndex !== -1 && currentProducts[productIndex].limit) {
    currentProducts[productIndex] = {
      ...currentProducts[productIndex],
      limit: currentProducts[productIndex].limit - limit,
    };
  }
  return [...currentProducts];
}

export const getProductsState = createFeatureSelector<ProductsState>(productsToken);
export const getProducts = createSelector(getProductsState,
  state => state.products);

export const getProduct = createSelector(getProducts,
  (products, {productName}: { productName: string }) => {
    return products.find(stockProduct => stockProduct.name === productName);
  });

export function productsReducer(state, action): ProductsState {
  return _productsReducer(state, action);
}
