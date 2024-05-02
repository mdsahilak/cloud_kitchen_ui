import React from 'react';
import Button from 'react-bootstrap/Button';
import EditFoodItemButton from './EditFoodItemButton';

const FoodItemRow = ({ item, handleUpdate, handleDelete }) => {
    return (
        <div>
            <a>
                <h5> - {item.title} : ${item.price} </h5>
                <div className="button-container">
                    <EditFoodItemButton foodItem={item} />
                    <Button className='m-1' variant="outline-danger" onClick={handleDelete(item.foodItemId)} >Delete</Button>
                </div>
            </a>

            <p> {item.description} </p>

            <hr />
        </div>
    );
};

export default FoodItemRow