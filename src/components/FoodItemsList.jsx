import React, { useState, useEffect } from 'react';
import FoodItemRow from './FoodItemRow.jsx';
import apiClient from '../Services/ApiClient.js';

const FoodItemsList = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                let respone = await apiClient.get('foodItems');
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