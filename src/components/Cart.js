import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import { GatsbyImage, getImage  } from "gatsby-plugin-image";
import { useShoppingCart } from "use-shopping-cart";

import formatPrice from "../utils/formatPrice";

const Cart = () => {
    const { shouldDisplayCart, totalPrice, currency, removeItem, setItemQuantity, handleCartClick, cartDetails, redirectToCheckout, cartCount } = useShoppingCart();
    const [status, setStatus] = useState('idle');
    // closes cart on page reload
    useEffect(() => {
        return () => {
            handleCartClick();
        }
    }, [])
    const adjustQuantity = (id) => (e) => {
        console.log(e.target.value)
        setItemQuantity(id, parseInt(e.target.value))
    };
    async function handleCheckout(event) {
        event.preventDefault()
    
        if (cartCount > 0) {
          setStatus('loading')
          const error = await redirectToCheckout({...cartDetails})
          if (error) setStatus('redirect-error')
        } else {
          setStatus('missing-items')
        }
      }
    const items = Object.values(cartDetails);
    return (
    <Modal size="xl" show={shouldDisplayCart} onHide={handleCartClick}>
    <Modal.Header closeButton />
    <Modal.Body>
        <div className="row mx-2 justify-content-between fw-bold">
            <div className="col-6">MY CART</div>
            <div className="col-2 small">QTY</div>
            <div className="col-1 small">PRICE</div>
            <div className="col-1 small">SUBTOTAL</div>
            <div className="col-1"></div>
        </div>
        { cartCount > 0 ?
            <div className="cart-products mx-2">
            {items.map((item, index) => {
                return (
                <div className="row border-bottom py-3 align-items-start justify-content-between" key={index}>
                    <div className="col-6 d-flex">
                        <div className="col-4"><GatsbyImage className="mr-3" alt={item.name} image={getImage(item.image)} /></div>
                        <div className="col-8 mt-3 mx-4 px-3">
                            <h6>{item.name}</h6>
                            <p className="fst-italic">{item.product_data.sizes && "Size: " + item.product_data.sizes.join(", ")}</p>
                        </div>
                    </div>
                    <div className="col-2 mt-2">
                        <input className="w-50 text-center" type="number" defaultValue={item.quantity} onChange={adjustQuantity(item.id)} />
                    </div>
                    <div className="col-1 mt-2">{formatPrice(item.price)}</div>
                    <div className="col-1 mt-2 fw-bold">{formatPrice(item.value)}</div>
                    <div className="col-1 mt-2 text-end" onClick={() => removeItem(item.id)}>X</div>
                </div>)
            })}
            </div>
            : <div className="m-2 p-4 border-top border-bottom">Your cart is empty.</div>
        }
        <div className="d-flex py-3 w-50 me-2 ms-auto justify-content-between">
            <h6 className="fw-bold">TOTAL</h6>
            <h6 className="fw-bold">{formatPrice(totalPrice, currency)}</h6>
        </div>
        <div className="d-flex mt-2 justify-content-end">
            <button
                className={`px-4 me-3 btn ${cartCount > 0 ? "btn-primary" : "btn-secondary"} rounded-0`}
                disabled={status === 'loading' || cartCount < 1}
                onClick={handleCheckout}
            >
                {status === 'loading' ? 'LOADING' : 'PROCEED TO CHECKOUT'}
            </button>
            <button className="px-3 btn btn-dark rounded-0" disabled={status === 'loading'} onClick={handleCartClick}>KEEP SHOPPING</button>
      </div>
    </Modal.Body>
    </Modal>
    )
}

export default Cart;