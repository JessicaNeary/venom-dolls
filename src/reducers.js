import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  CHECKOUT_ERROR,
  TOGGLE_CART_OPEN,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_ITEM_QUANTITY,
  CLEAR_CART,
  CHECKOUT_SUCCESS,
} from "./actions";
import eventInPast from "./utils/eventInPast";

const INITIAL_STATE = {
  cart: {
    items: [],
    total: 0,
  },
  cartError: null,
  cartOpen: false,
  sessionId: null,
  events: {
    past: [],
    current: [],
  },
  eventsLoading: false,
  eventsError: null,
};
/*
item = { id: {
    id
    name
    images
    size
    quantity
}}
*/

const getTotal = (items) => {
  return items.reduce(
    (prevValue, item) => prevValue + item.quantity * item.price,
    0
  );
};

export const reducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case TOGGLE_CART_OPEN: {
      const newCartState = !state.cartOpen;
      return {
        ...state,
        cartOpen: newCartState,
      };
    }
    case ADD_TO_CART: {
      const updatedCart = state.cart.items;
      const itemId = updatedCart.findIndex((item) => {
        return (
          item.id === actions.payload.item.id &&
          item.size === actions.payload.item.size
        );
      });
      if (itemId !== -1) {
        updatedCart[itemId].quantity++;
      } else updatedCart.push({ ...actions.payload.item, quantity: 1 });
      const total = getTotal(updatedCart);
      return {
        ...state,
        cart: {
          items: updatedCart,
          total,
        },
      };
    }
    case ADJUST_ITEM_QUANTITY: {
      const updatedCart = state.cart.items;
      const itemId = updatedCart.findIndex((item) => {
        return (
          item.id === actions.payload.item.id &&
          item.size === actions.payload.item.size
        );
      });
      updatedCart[itemId].quantity = actions.payload.quantity;
      const total = getTotal(updatedCart);
      return {
        ...state,
        cart: {
          items: updatedCart,
          total,
        },
      };
    }
    case REMOVE_FROM_CART: {
      let updatedCart = state.cart.items;
      updatedCart = updatedCart.filter((item) => {
        return (
          item.id !== actions.payload.item.id ||
          item.size !== actions.payload.item.size
        );
      });
      const total = getTotal(updatedCart);
      return {
        ...state,
        cart: {
          items: updatedCart,
          total,
        },
      };
    }
    case CLEAR_CART: {
      return INITIAL_STATE;
    }
    case CHECKOUT_SUCCESS: {
      return {
        ...state,
        sessionId: actions.payload.sessionId,
      };
    }
    case CHECKOUT_ERROR: {
      return {
        ...state,
        cartError: actions.error,
      };
    }
    case GET_EVENTS: {
      return {
        ...state,
        eventsLoading: true,
      };
    }
    case GET_EVENTS_SUCCESS: {
      const past = actions.payload.data.filter((event) => eventInPast(event));
      const current = actions.payload.data.filter(
        (event) => !eventInPast(event)
      );
      return {
        ...state,
        events: {
          current,
          past,
        },
        eventsLoading: false,
      };
    }
    case GET_EVENTS_ERROR: {
      return {
        ...state,
        eventsError: actions.error,
        eventsLoading: false,
      };
    }
    default:
      return state;
  }
};
