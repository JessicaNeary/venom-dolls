import { API } from 'aws-amplify';
import axios from 'axios';

export const TOGGLE_CART_OPEN = "TOGGLE_CART_OPEN";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_ITEM_QUANTITY = "ADJUST_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

export const CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
export const CHECKOUT_ERROR = "CHECKOUT_ERROR";

export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
export const GET_EVENTS_ERROR = "GET_EVENTS_ERROR";

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

export const getEventsSuccess = data => {
    return {
        type: GET_EVENTS_SUCCESS,
        payload: {
            data
        }
    }
}

export const getEventsError = error => {
    return {
        type: GET_EVENTS_ERROR,
        error
    }
}


export const checkoutCart = (items, shippingRate) => {
    return (dispatch) => {
        const apiName = 'stripeAPI'
        const apiEndpoint = '/checkout'
        const body = {
            items,
            shippingRate
        };
        API.post(apiName, apiEndpoint, { body })
            .then(response => {
                dispatch(checkoutSuccess(response.id))
            })
            .catch(err => {
                dispatch(checkoutError(err.message))
            });
    }
};

export const getEvents = () => {
    return (dispatch) => {
        axios({
            url:
              `https://graph.facebook.com/v9.0/${process.env.FB_PAGE_ID}/events?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
            method: "get",
         }).then(response => {
                dispatch(getEventsSuccess(response.data.data))
            })
            .catch(err => {
                dispatch(getEventsError(err.message))
            });
    }
};