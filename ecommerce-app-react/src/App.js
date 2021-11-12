import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';

//local storage
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]') ;
const cartNumberFromLocalStorage = JSON.parse(localStorage.getItem('cartNumber') || '[]') ;

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  //local storage for items in cart
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  //add item in cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      setcounter(counter + 1);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      setcounter(counter + 1);
    }
  };

  //remove item from cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      setcounter(counter - 1);
    } else {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          
        )
      );
      setcounter(counter - 1);
    }
  };

  //clear cart
  const clearCart = () => {
    setCartItems([]);
    setBasket(false);
    setcounter(0);
  };

  //toggle cart on click
  const [basket, setBasket] = useState(false);
  const showBasket = () => {
    setBasket(true);
    if (basket === true) {
      setBasket(false);
    }
  }

  // number of items in cart
  const [counter, setcounter] = useState(cartNumberFromLocalStorage);
  function counterNumber() {
        setcounter(counter + 1);
  }

  //local storage for cart number
  useEffect(() => {
    localStorage.setItem('cartNumber', counter);
  }, [counter]);

  return (
    <div className="container">
      <Header countCartItems={counter} showBasket={showBasket}></Header>
      <Main products={products} onAdd={onAdd} cartCounter={counterNumber}></Main>
        {/* cart modal */}
        {basket ? <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          clearCart={clearCart}
        ></Basket> : null}
      <Footer />
    </div>
  );
}

export default App;
