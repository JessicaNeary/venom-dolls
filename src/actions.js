import axios from 'axios';

export const TOGGLE_CART_OPEN = "TOGGLE_CART_OPEN";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_ITEM_QUANTITY = "ADJUST_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

export const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
export const CHECKOUT_ERROR = "CHECKOUT_ERROR";

export const toggleCartOpen = () => {
    return {
        type: TOGGLE_CART_OPEN
    }
}

export const addToCart = item => {
    return {
        type: ADD_TO_CART,
        payload: {
            item
        }
    }
};

export const adjustItemQuantity = (item, quantity) => {
    return {
        type: ADJUST_ITEM_QUANTITY,
        payload: {
            item,
            quantity
        }
    }
};

export const removeFromCart = item => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            item
        }
    }
};

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
};

export const checkoutSuccess = sessionId => {
    return {
        type: CHECKOUT_SUCCESS,
        payload: {
            sessionId
        }
    }
}

export const checkoutError = error => {
    return {
        type: CHECKOUT_ERROR,
        error
    }
};


export const checkoutCart = (items, shippingRate) => {
    return async (dispatch) => {
        axios.post('/api/create-session', { items: items, shippingRate: shippingRate })
            .then(response => {
                dispatch(checkoutSuccess(response.data.id))
            })
            .catch(err => {
                dispatch(checkoutError(err))
            });
    }
};