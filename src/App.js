import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/FoodItemRow.jsx'

function App() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch('https://w2000528-api.azurewebsites.net/api/foodItems')
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(foodItems);

  return (
    <div className="App">
      <header className="App-header">
        
        <ul>
          {foodItems.map((item) => (
            <li key={item.title}>
              {item.title} for {item.price}
            </li>
          ))}
        </ul>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
