import { useEffect, useState } from "react";
import "./App.css";

import data from "./components/data.jsx";
import Item from "./components/items.jsx"; // Use proper capitalization for the component
import styles from "./components/project.module.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    setProduct(data);
  }, []);

  useEffect(() => {
    let sum = 0;
    let cart_item = 0;
    product.forEach((item) => {
      sum += item.price * item.quantity;
      cart_item += item.quantity;
    });
    setTotal(Math.round(sum * 100) / 100);
    setCart(cart_item);
  }, [product]);

  function increment(index) {
    let temp = [...product];
    temp[index].quantity++;
    setProduct(temp);
  }

  function decrement(index) {
    let temp = [...product];
    if (temp[index].quantity > 1) {
      temp[index].quantity--;
      setProduct(temp);
    } else {
      remove(index);
    }
  }

  function remove(index) {
    let temp = product.filter((item, idx) => idx !== index);
    setProduct(temp);
  }

  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <h1>UseReducer</h1>
        <p>
          <i className="fa-solid fa-cart-plus"></i>
          <span>{cart}</span>
        </p>
      </div>

      {product.length > 0 ? (
        <div>
          <div className={styles.products}>
            <h2>YOUR BAG</h2>
            {product.map((ele, index) => (
              <Item
                key={index} // It's a good practice to add a unique key
                src={ele.src}
                name={ele.name}
                price={ele.price}
                quantity={ele.quantity}
                increment={() => increment(index)}
                decrement={() => decrement(index)}
                remove={() => remove(index)}
              />
            ))}
          </div>


          <div className={styles .btn}>
            <div className={styles.hr}></div>
            <div className={styles.sum}>
              <h3>Total</h3>
              <h3>${total}</h3>
            </div>
            <div className={styles.clear}>
              <button onClick={() => setProduct([])}>Clear Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.error}>
          <p>
            <b>Your Cart is EMPTY!</b>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
