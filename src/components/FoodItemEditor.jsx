import React from 'react';

const FoodItemEditor = ({ item }) => {
    return (
        <div>
            <a>
                <h3> - {item.title} : ${item.price} </h3>
                <div className="button-container">
                    <button className="controls-btn">Edit</button>
                    <button className="controls-btn">Delete</button>
                </div>
            </a>

            <p> {item.description} </p>
            
            <hr />
        </div>
    );
};

export default FoodItemRow