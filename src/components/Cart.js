import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import { GatsbyImage, getImage  } from "gatsby-plugin-image";
import { useSelector, useDispatch } from 'react-redux';

import getStripe from "../utils/stripejs";

import { removeFromCart, adjustItemQuantity, checkoutCart, toggleCartOpen } from "../actions";

import getShipping from "../utils/getShipping";
import formatPrice from "../utils/formatPrice";

const Cart = () => {
    const [status, setStatus] = useState('idle');
    const items = useSelector(store => store.cart)
    const sessionId = useSelector(store => store.sessionId)
    const cartOpen = useSelector(store => store.cartOpen)
    const dispatch = useDispatch();

    let totalPrice = 0;
    items.forEach(item => {
        totalPrice += (item.quantity * item.price);
    })

    // closes cart on page reload
    useEffect(() => {
        return () => {
            toggleCart();
        }
    }, [])

    useEffect(()=> {
        if (sessionId) redirectToCheckout();
    }, [sessionId]);

    const toggleCart = () => dispatch(toggleCartOpen());

    const adjustQuantity = (item) => (e) => {
        dispatch(adjustItemQuantity(item, parseInt(e.target.value)))
    };

    const redirectToCheckout = async (id) => {
        const stripe = await getStripe()
        stripe.redirectToCheckout({ sessionId: sessionId });
    }

    // dispatches create session call
    async function handleCheckout(event) {
        event.preventDefault()
    
        if (items[0]) {
          setStatus('loading')
          const shippingRate = getShipping(items);
          dispatch(checkoutCart(items, shippingRate));
        } else {
          setStatus('missing-items')
        }
    }

    return (
    <Modal size="xl" show={cartOpen} onHide={toggleCart}>
    <Modal.Header closeButton />
    <Modal.Body>
        <div className="row mx-2 justify-content-between fw-bold">
            <div className="col-6">MY CART</div>
            <div className="col-2 small">QTY</div>
            <div className="col-1 small">PRICE</div>
            <div className="col-1 small">SUBTOTAL</div>
            <div className="col-1"></div>
        </div>
        { items[0] ?
            <div className="cart-products mx-2">
            {items.map((item, index) => {
                return (
                <div className="row border-bottom py-3 align-items-start justify-content-between" key={index}>
                    <div className="col-6 d-flex">
                        <div className="col-4"><GatsbyImage className="mr-3" alt={item.name} image={getImage(item.image)} /></div>
                        <div className="col-8 mt-3 mx-4 px-3">
                            <h6>{item.name}</h6>
                            <p className="fst-italic">{item.size && "Size: " + item.size}</p>
                        </div>
                    </div>
                    <div className="col-2 mt-2">
                        <input className="w-50 text-center" type="number" min={1} defaultValue={item.quantity} onChange={adjustQuantity(item)} />
                    </div>
                    <div className="col-1 mt-2">{formatPrice(item.price)}</div>
                    <div className="col-1 mt-2 fw-bold">{formatPrice(item.value)}</div>
                    <div className="col-1 mt-2 text-end" role="button" onClick={() => dispatch(removeFromCart(item))}>X</div>
                </div>)
            })}
            </div>
            : <div className="m-2 p-4 border-top border-bottom">Your cart is empty.</div>
        }
        <div className="d-flex py-3 w-50 me-2 ms-auto justify-content-between">
            <h6 className="fw-bold">TOTAL</h6>
            <h6 className="fw-bold">{formatPrice(totalPrice, "NZD")}</h6>
        </div>
        <div className="d-flex mt-2 justify-content-end">
            <button
                className={`px-4 me-3 btn ${items[0] ? "btn-primary" : "btn-secondary"} rounded-0`}
                disabled={status === 'loading' || !items[0]}
                onClick={handleCheckout}
            >
                {status === 'loading' ? 'LOADING' : 'PROCEED TO CHECKOUT'}
            </button>
            <button className="px-3 btn btn-dark rounded-0" disabled={status === 'loading'} onClick={toggleCart}>KEEP SHOPPING</button>
      </div>
    </Modal.Body>
    </Modal>
    )
}

export default Cart;