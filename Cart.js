function Cart(props) {
  
  let total = 0;
  for (let i = 0; i < props.cart.length; i++) {
    total = total + props.cart[i].price;
  }

  return (
    <div className="cart-section">
      <h2>Your Order ({props.cart.length})</h2>

      {props.orderConfirmed && (
        <div className="confirmation-box">
          <h3>Order Confirmed!</h3>
          <p>Thank you! Your family meal is being prepared in our kitchen.</p>
        </div>
      )}

      {props.cart.length === 0 ? (
        <p className="empty-cart">Your order list is empty. Add meals from the menu!</p>
      ) : (
        <div>
          <ul className="cart-list">
            {props.cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <div className="cart-item-right">
                  <span>${item.price}</span>
                  <button
                    className="remove-btn"
                    onClick={() => props.onRemove(index)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <strong>Total:</strong>
            <strong>${total}</strong>
          </div>

          <button className="confirm-btn" onClick={props.onConfirm}>
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}


export default Cart;
