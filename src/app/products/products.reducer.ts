import {createReducer} from '@ngrx/store';
import {} from './products.actions';
import {Product} from '../models/stock.model';

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
  // on(addProduct, (state , {product}) => ({
  //   ...state,
  //   cart: {
  //     ...state.cart,
  //     [product.name]: 1
  //   }
  // })),
  // on(removeProduct, (state , {cartProductName}) => ({
  //   ...state,
  //   cart: remove(state.cart, cartProductName)
  // })),
  // on(updateProductAmount, (state , {cartProductName, amount}) => ({
  //   ...state,
  //   cart: {
  //     ...state.cart,
  //     [cartProductName]: amount
  //   }
  // }))
);

// function remove(cart, cartProductName): Record<string, number> {
//   const newCart = {...cart};
//   delete newCart[cartProductName];
//   console.log('remove work!!!!!!');
//   return newCart;
// }
//
// export const getCartState = createFeatureSelector<CartProductState>(cartToken);
// export const getCart = createSelector(getCartState, state => state.cart);
// export const isExistInCart = createSelector(getCartStawte, props => state.cart);
//
// export const updat2eProductAmount = createAction('[cart] UpdateProductAmount', props<{cartProductName: string, amount: number}>());
//


export function productsReducer(state, action): ProductsState {
  return _productsReducer(state, action);
}

