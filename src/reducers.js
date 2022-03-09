import { CHECKOUT_ERROR, TOGGLE_CART_OPEN, ADD_TO_CART, REMOVE_FROM_CART, ADJUST_ITEM_QUANTITY, CLEAR_CART } from "./actions";

const INITIAL_STATE = {
    cart: [],
    cartError: null,
    cartOpen: false
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
            console.log('here')
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
            console.log(actions)
            const updatedCart = state.cart;
            const itemId = updatedCart.findIndex(item => {
                return (
                    item.id === actions.payload.item.id &&
                    item.size === actions.payload.item.size
                );
            });
            console.log(itemId, actions.payload.item.id, actions.payload.item.size)
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
            return {
                ...state,
                cart: []
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