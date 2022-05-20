import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useSelector, useDispatch } from "react-redux";

import getStripe from "../utils/stripejs/pure";

import {
  removeFromCart,
  adjustItemQuantity,
  checkoutCart,
  toggleCartOpen,
} from "../actions";

import getShipping from "../utils/getShipping";
import formatPrice from "../utils/formatPrice";

const Cart = ({ cartOpen }) => {
  const [status, setStatus] = useState("idle");
  const sessionId = useSelector((store) => store.sessionId);
  const { items, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionId) {
      const redirect = async () => {
        const stripe = await getStripe();
        stripe.redirectToCheckout({ sessionId: sessionId });
      };
      redirect();
    }
  }, [sessionId]);

  const toggleCart = () => dispatch(toggleCartOpen());

  const adjustQuantity = (item) => (e) => {
    dispatch(adjustItemQuantity(item, parseInt(e.target.value)));
  };

  // dispatches create session call
  async function handleCheckout(event) {
    event.preventDefault();

    if (items[0]) {
      setStatus("loading");
      const shippingRate = getShipping(items);
      dispatch(checkoutCart(items, shippingRate));
    } else {
      setStatus("missing-items");
    }
  }

  return (
    <Modal size="xl" show={cartOpen} onHide={toggleCart}>
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="row mx-2 justify-content-between align-items-center fw-bold">
          <div className="col-4 col-md-6">MY CART</div>
          <div className="col-2 small">QTY</div>
          <div className="col-2 col-md-1 small">PRICE</div>
          <div className="d-none d-md-block col-1 small">SUBTOTAL</div>
          <div className="col-1"></div>
        </div>
        {items[0] ? (
          <div className="cart-products">
            {items.map((item, index) => {
              return (
                <div
                  className="row mx-2 border-bottom py-3 align-items-start justify-content-between"
                  key={index}
                >
                  <div className="col-4 col-md-6 d-flex">
                    <div className="d-none d-md-block col-4">
                      <GatsbyImage
                        className="mr-3"
                        alt={item.name}
                        image={getImage(item.image)}
                      />
                    </div>
                    <div className="col-md-8 mt-2 mt-md-3 ms-md-4 ps-md-3">
                      <h6>{item.name}</h6>
                      <p className="fst-italic">
                        {item.size && "Size: " + item.size}
                      </p>
                    </div>
                  </div>
                  <div className="col-2 mt-2">
                    <input
                      className="w-100 w-md-50 text-center"
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      onChange={adjustQuantity(item)}
                    />
                  </div>
                  <div className="d-none d-md-block col-1 mt-2">
                    {formatPrice(item.price, "NZD")}
                  </div>
                  <div className="col-2 col-md-1 mt-2 fw-bold">
                    {formatPrice(item.price * item.quantity, "NZD")}
                  </div>
                  <div className="col-1 mt-2">
                    <button
                      className="text-end btn btn-outline-dark border-0"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="m-2 p-4 border-top border-bottom">
            Your cart is empty.
          </div>
        )}
        {items[0] && (
          <p className="small fst-italic mt-2">
            Please note: As our merch is all hand printed by a local business,
            please allow up to 2-3 weeks for your purchase to be dispatched.
          </p>
        )}
        <div className="d-flex py-3 w-50 me-2 ms-auto justify-content-between">
          <h6 className="fw-bold">TOTAL</h6>
          <h6 className="fw-bold">{formatPrice(total, "NZD")}</h6>
        </div>
        <div className="d-flex mt-2 justify-content-end">
          <button
            className={`px-4 me-3 btn ${
              items[0] ? "btn-danger" : "btn-secondary"
            } rounded-0`}
            disabled={status === "loading" || !items[0]}
            onClick={handleCheckout}
          >
            {status === "loading" ? "LOADING" : "PROCEED TO CHECKOUT"}
          </button>
          <button
            className="px-3 btn btn-dark rounded-0"
            disabled={status === "loading"}
            onClick={toggleCart}
          >
            KEEP SHOPPING
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
