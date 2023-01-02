export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const item = state.cart.find(
        (product) => product._id === action.payload._id
      );
      item && console.log(item);
      if (item) {
        return {
          // ...state,
          // cart: [
          //  ...state.cart,{ ...action.payload, qty: item.qty + 1 },
          // ],

          // totalPrice: state.totalPrice + action.payload.price,
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          ),
          // totalPrice: state.totalPrice + action.payload.price,
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      
      state.cart.filter((c)=>console.log(c._id));

      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.id),
      };
    default:
      return state;
  }
};
