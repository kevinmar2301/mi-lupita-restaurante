import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const items = [
  { id: 1, name: 'Taco', price: 3.00 },
  { id: 2, name: 'Burrito', price: 5.00 },
  { id: 3, name: 'Quesadilla', price: 4.00 },
  { id: 4, name: 'Churro', price: 2.50 },
];

function MenuItem({ item, addToCart }) {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="app">
      <h1>Restaurant Menu</h1>
      <div className="menu">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
        <h3>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);