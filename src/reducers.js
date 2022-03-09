import { CHECKOUT_ERROR, TOGGLE_CART_OPEN, ADD_TO_CART, REMOVE_FROM_CART, ADJUST_ITEM_QUANTITY, CLEAR_CART, CHECKOUT_SUCCESS } from "./actions";

const INITIAL_STATE = {
    cart: [],
    cartError: null,
    cartOpen: false,
    sessionId: null,
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

export const reducer = (state = INITIAL_STATE, actions ) => {
    switch(actions.type) {
        case(TOGGLE_CART_OPEN): {
            const newCartState = !state.cartOpen
            return {
                ...state,
                cartOpen: newCartState
            }
        }
        case(ADD_TO_CART): {
            const updatedCart = state.cart;
            const itemId = updatedCart.findIndex(item => {
                return (
                    item.id === actions.payload.item.id &&
                    item.size === actions.payload.item.size
                );
            });
            if (itemId !== -1) {
                updatedCart[itemId].quantity++
            }
            else updatedCart.push({ ...actions.payload.item, quantity: 1 });
            return {
                ...state,
                cart: updatedCart
            };
        }
        case(ADJUST_ITEM_QUANTITY): {
            const updatedCart = state.cart;
            const itemId = updatedCart.findIndex(item => {
                return (
                    item.id === actions.payload.item.id &&
                    item.size === actions.payload.item.size
                );
            });
            updatedCart[itemId].quantity = actions.payload.quantity
            return {
                ...state,
                cart: updatedCart
            }
        }
        case(REMOVE_FROM_CART): {
            let updatedCart = state.cart;
            updatedCart = updatedCart.filter(item => {
                return (
                    item.id !== actions.payload.item.id &&
                    item.size !== actions.payload.item.size
                );
            })
            return {
                ...state,
                cart: updatedCart
            };
        }
        case(CLEAR_CART): {
            return INITIAL_STATE;
        }
        case(CHECKOUT_SUCCESS): {
            return {
                ...state,
                sessionId: actions.payload.sessionId
            }
        }
        case(CHECKOUT_ERROR): {
            return {
                ...state,
                cartError: actions.error
            }
        }
        default: return state;
    }
}