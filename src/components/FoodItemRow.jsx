import React from 'react';

const FoodItemRow = ({ item }) => {
    return (
        <div>
            <h3> {item.title} : { item.price } </h3>
            <p> { item.description } </p>
        </div>
    );
};

export default FoodItemRow