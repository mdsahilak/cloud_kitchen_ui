import React, { useState, useEffect } from 'react';
import apiClient from '../Services/ApiClient.js';

const KitchensList = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                let respone = await apiClient.get('kitchens');
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
                    <p key={item.kitchenId}>{item.address}</p>
                ))
            }
        </div>
    );
}

export default KitchensList