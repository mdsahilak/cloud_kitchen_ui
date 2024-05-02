import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        console.log(editedFood);
        const updatedFoodItems = foodItems.map((item) => {
            if (item.foodItemId === editedFood.foodItemId) {
                return editedFood;
            } else {
                return item;
            }
        })

        setFoodItems(updatedFoodItems);
    }

    const handleFoodDeletion = () => {

    };

    return (
        <div className="FoodItemsList">
            <Container>
                <Row>
                {
                foodItems.map((item) => (
                    <Col className="m-3">
                        <FoodItemRow key={item.foodItemId} item={item} handleEdit={handleFoodEdit} handleDelete={handleFoodDeletion} />
                    </Col>
                ))
            }
                </Row>
            </Container>
            

            <hr />

            <AddFoodItemButton handleCreation={handleFoodCreation} />

            <hr />


        </div>
    );
}

export default FoodItemsList