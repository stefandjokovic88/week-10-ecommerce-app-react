import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, clearCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  
  return (
    <div className="cart-modal">
      <p className="cart-caption">Cart Items</p>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="cart-row">
            <div className="cart-name">{item.name}</div>
            <div className="cart-right">
            <div className="cart-buttons">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="quantity">
              {item.qty} x {item.price} EUR
            </div>
          </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div>
              <div className="text-right">Total Price</div>
              <div className="text-right">{itemsPrice} EUR</div>
            </div>
            <hr />
            <div className="text-right">
              <button onClick={() => clearCart()}>
                Clear Chart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
