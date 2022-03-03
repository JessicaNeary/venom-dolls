import React, {useEffect} from "react";
import Modal from "react-bootstrap/Modal";

const Cart = ({ shouldDisplayCart, handleCartClick, cartDetails }) => {
    useEffect(() => {
        return () => {
            handleCartClick();
        }
    }, [])
    const items = Object.values(cartDetails);
    return (
    <Modal show={shouldDisplayCart} onHide={handleCartClick}>
    <Modal.Header closeButton>
        <Modal.Title>
            This is the cart.
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {items.map(item => <div>{item.name}</div>)}
    </Modal.Body>
    </Modal>
    )
}

export default Cart;