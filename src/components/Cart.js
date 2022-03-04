import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import { useShoppingCart } from "use-shopping-cart";

const Cart = () => {
    const { shouldDisplayCart, handleCartClick, cartDetails, redirectToCheckout, cartCount } = useShoppingCart();
    const [status, setStatus] = useState('idle');
    // closes cart on page reload
    useEffect(() => {
        return () => {
            handleCartClick();
        }
    }, [])
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
    <Modal show={shouldDisplayCart} onHide={handleCartClick}>
    <Modal.Header closeButton>
        <Modal.Title>
            This is the cart.
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {items.map((item, index) => (
            <div key={index}>{item.name}</div>)
        )}
        <button
        disabled={status === 'loading'}
        onClick={handleCheckout}
      >
        {status === 'loading' ? 'Loading...' : 'Checkout'}
      </button>
    </Modal.Body>
    </Modal>
    )
}

export default Cart;