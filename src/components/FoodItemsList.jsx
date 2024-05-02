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

    function handleFoodCreation(createdFood) {
        setFoodItems([...foodItems, createdFood]);
    }
    
    function handleFoodEdit(editedFood) {
        
    }

    const handleFoodDeletion = () => {

    };

    return (
        <div className="FoodItemsList">
            {
                foodItems.map((item) => (
                    <FoodItemRow key={item.foodItemId} item={item} handleDelete={handleFoodDeletion} />
                ))
            }

            <hr />

            <AddFoodItemButton handleCreatedFood={handleFoodCreation} />

            <hr />
            

        </div>
    );
}

export default FoodItemsList