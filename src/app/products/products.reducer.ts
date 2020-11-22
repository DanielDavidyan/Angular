import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {updateLimit} from './products.actions';
import {Product} from '../models/stock.model';
import {CartProductsInitialState, getCart} from '../cart/cart.reducer';
import {removeProduct} from '../cart/cart.actions';

export const productsToken = 'products';

export interface ProductsState {
  products: Product[];
}

export const ProductsInitialState: ProductsState = {
  // todo refactor, use effects.ts!
  products: [
    {
      name: 'Oatmeal',
      description: 'Hot and fluffy oatmeal & protein powder cake',
      price: 330.00,
      image: 'assets/photos/oatmeal.jpg'
    },
    {
      name: 'WS license',
      description: 'Rare WS license. No need for military email',
      price: 200.00,
      image: 'assets/photos/ws.png'
    },
    {
      name: 'Coconut oil',
      description: 'Good coconut to make oil for your bread',
      price: 100.00,
      image: 'assets/photos/coconut.png'
    },
    {
      name: 'Beard exempt',
      description: 'Your very own license to grow beard',
      price: 777.00,
      image: 'assets/photos/beard.jpg'
    },
    {
      name: 'A day off',
      description: '1 day off work',
      price: 1000000.00,
      image: 'assets/photos/freedom.png',
      limit: 1
    },
    {
      name: 'JS book for beginners',
      description: 'Digital javascript book to start coding your first js website',
      price: 330.00,
      image: 'assets/photos/js-book.png',
      limit: 30
    }
  ]
};

export const _productsReducer = createReducer(
  ProductsInitialState,
  on(updateLimit, (state, {productName, limit}) => ({
    ...state,
    products: update(state.products, productName, limit)
  }))
);

function update(products, productName, limit): Product[] {
  const newProducts = {...products};
  const productIndex = newProducts.findIndex((prod: Product) => prod.name === productName);
  if (productIndex !== -1 && newProducts[productIndex].limit) {
    newProducts[productIndex].limit -= limit;
    return newProducts;
  }
}

export const getProductsState = createFeatureSelector<ProductsState>(productsToken);
export const getProducts = createSelector(getProductsState,
  state => state.products);

export const getProduct = createSelector(getProducts,
  (products, {productName}: {productName: string}) => {
    return products.find(stockProduct => stockProduct.name === productName);
  });

export function productsReducer(state, action): ProductsState {
  return _productsReducer(state, action);
}
