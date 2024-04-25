import React, { useState, useEffect } from 'react';
import './components/FoodItemRow.jsx'
import FoodItemRow from './components/FoodItemRow.jsx';

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
      <h1> The Cloud Kitchen </h1>

      <hr />
      <p>Welcome to the Cloud Kitchen of the Future. Browse our menu below:</p>
      <hr />

      {
        foodItems.map((item) => (
          <FoodItemRow key={item.foodItemId} item={item} />
        ))
      }
    </div>
  );
}

export default App;
