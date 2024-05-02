import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import apiClient from '../Services/ApiClient';

const EditFoodItemButton = ({ foodItem, handleUpdatedFood }) => {
    const [title, setTitle] = useState(foodItem.title);
    const [description, setDescription] = useState(foodItem.description);
    const [price, setPrice] = useState(foodItem.price);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSave() {
        editAndSaveFoodItem();
    }

    async function editAndSaveFoodItem() {
        const foodItemData = {
            foodItemId: foodItem.foodItemId,
            title: title,
            description: description,
            price: price
        };
        
        try {
            let respone = await apiClient.put('fooditems/' + foodItem.foodItemId, foodItemData);
            console.log(respone.data);

            // handleUpdatedFood(respone.data);
            window.location = '/fooditems'

            setTitle('');
            setDescription('');
            setPrice(0);

            setShow(false);
        } catch (error) {
            window.alert("Error updating Food Item")
            console.log(error);
        }
    }

    return (
        <>
            <Button className='m-1' variant="outline-secondary" onClick={handleShow} >Edit</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        Edit Food Item
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Please enter the title, description and price of the food item you would like to edit.</p>

                    <Form>
                        <Form.Group className="mb-3">
                            {/* <Form.Label>Title</Form.Label> */}
                            <Form.Control placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Discard</Button>
                    <Button variant="success" onClick={handleSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditFoodItemButton;