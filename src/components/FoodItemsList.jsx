import React, { useState, useEffect } from 'react';
import FoodItemRow from './FoodItemRow.jsx';
import axios from "axios";

const FoodItemsList = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        // Fetch data from your API
        // fetch('https://w2000528-api.azurewebsites.net/api/foodItems')
        //   .then((response) => response.json())
        //   .then((data) => setFoodItems(data))
        //   .catch((error) => console.error('Error fetching data:', error));

        const fetchFoodItems = async () => {
            try {
                let respone = await axios.get('https://w2000528-api.azurewebsites.net/api/foodItems');
                setFoodItems(respone.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchFoodItems()
    }, []);

    console.log(foodItems);

    const handleDelete = () => {
    };

    return (
        <div className="FoodItemsList">
            {
                foodItems.map((item) => (
                    <FoodItemRow key={item.foodItemId} item={item} handleDelete={handleDelete} />
                ))
            }
        </div>
    );
}

export default FoodItemsList