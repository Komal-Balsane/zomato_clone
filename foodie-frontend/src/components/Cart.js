
import React, { useState } from "react";

export default function Cart({ cart, removeFromCart }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  const handlePayment = () => {
    if (!address || !paymentMethod) {
      alert("Please enter delivery address and select payment method.");
      return;
    }

    setOrderPlaced(true);
    setShowCheckout(false);
  };

  return (
    <div className="container mt-5" id="cart-section">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  ₹{item.price}
                </div>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <h4>Total Amount: ₹{totalAmount}</h4>
          </div>

          <button
            className="btn btn-success mt-3 w-100"
            onClick={() => setShowCheckout(true)}
          >
            Place Order
          </button>

          {showCheckout && (
            <div className="card mt-4 p-3">
              <h4>Checkout</h4>

              <h5 className="mt-3">Order Summary</h5>

              <ul className="list-group mb-3">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>

              <h5>Total Bill: ₹{totalAmount}</h5>

              <input
                type="text"
                className="form-control mb-3 mt-3"
                placeholder="Enter Delivery Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <select
                className="form-control mb-3"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Select Payment Method</option>
                <option value="Cash on Delivery">
                  Cash on Delivery
                </option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">
                  Credit/Debit Card
                </option>
              </select>

              <button
                className="btn btn-primary"
                onClick={handlePayment}
              >
                Proceed to Payment
              </button>
            </div>
          )}

          {orderPlaced && (
            <div className="alert alert-success mt-4">
              <h4>🎉 Order Placed Successfully!</h4>

              <p>
                <strong>Items Ordered:</strong>
              </p>

              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ₹{item.price}
                  </li>
                ))}
              </ul>

              <p>
                <strong>Total Paid:</strong> ₹{totalAmount}
              </p>

              <p>
                <strong>Delivery Address:</strong>
                <br />
                {address}
              </p>

              <p>
                <strong>Payment Method:</strong>
                <br />
                {paymentMethod}
              </p>

              <p>Your food is being prepared. 🍽️</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

