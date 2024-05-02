import React from 'react';
import Button from 'react-bootstrap/Button';
import EditFoodItemButton from './EditFoodItemButton';
import Card from 'react-bootstrap/Card';

const FoodItemRow = ({ item, handleEdit, handleDelete }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R9u5mg0oJ6EGNW3-UFPN_QzFbCNq6FkTpz-fRmYaAg&s" />
            <Card.Body>
                <Card.Title>{item.title} : ${item.price}</Card.Title>
                
                <Card.Text>
                <p> {item.description} </p>
                </Card.Text>

                <div className="button-container">
                    <EditFoodItemButton foodItem={item} handleEdit={handleEdit} />
                    <Button className='m-1' variant="outline-danger" onClick={handleDelete(item.foodItemId)} >Delete</Button>
                </div>
            </Card.Body>
        </Card>
    )



    return (
        <div>
            <a>
                <h5> - {item.title} : ${item.price} </h5>
                <div className="button-container">
                    <EditFoodItemButton foodItem={item} handleEdit={handleEdit} />
                    <Button className='m-1' variant="outline-danger" onClick={handleDelete(item.foodItemId)} >Delete</Button>
                </div>
            </a>

            <p> {item.description} </p>

            <hr />
        </div>
    );
};

export default FoodItemRow