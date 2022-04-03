export const initialState = {
  basket: [],
  user: null,
};

//selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("cant remove product");
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      console.log(state);
      return {
        ...state,
        user: action.user,
      };
    default:
      break;
  }
};

export default reducer;