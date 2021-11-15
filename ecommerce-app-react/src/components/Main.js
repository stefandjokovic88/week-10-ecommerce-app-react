import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd, cartCounter } = props;
  return (
    <main>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} cartCounter={cartCounter}></Product>
        ))}
    </main>
  );
}
