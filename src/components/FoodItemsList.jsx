import React, { useState, useEffect } from 'react';
import FoodItemRow from './FoodItemRow.jsx';
import apiClient from '../Services/ApiClient.js';
import AddFoodItemButton from './AddFoodItemButton.jsx';

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

    function handleFoodUpdation(updatedFood) {
        setFoodItems([...foodItems, updatedFood]);
    }

    return (
        <div className="FoodItemsList">
            {
                foodItems.map((item) => (
                    <FoodItemRow key={item.foodItemId} item={item} handleDelete={handleDelete} />
                ))
            }

            <hr />

            <AddFoodItemButton handleUpdatedFood={handleFoodUpdation} />

            <hr />
            

        </div>
    );
}

export default FoodItemsList