import React from 'react';

export default function Product(props) {
  const { product, onAdd, cartCounter } = props;
  return (
    <div className="item">
      <img src={product.image} alt={product.name} />
      <p className="name">{product.name}</p>
      <p className="price">{product.price} EUR</p>
      <div>
        <button className="add-to-cart" onClick={() => {onAdd(product); cartCounter()}} >Add To Cart</button>
      </div>
    </div>
  );
}
