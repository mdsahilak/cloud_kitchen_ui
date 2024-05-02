import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import apiClient from '../Services/ApiClient';

const AddFoodItemButton = ({ handleCreation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSave() {
        if (title === '' || description === '' || price === 0) {
            window.alert("Invalid input values. Please try again with the correct inputs.")
        } else {
            createAndSaveFoodItem();
        }
    }

    async function createAndSaveFoodItem() {
        const foodItemData = {
            title: title,
            description: description,
            price: price
        };
        
        try {
            let respone = await apiClient.post('fooditems', foodItemData);
            console.log(respone.data);

            handleCreation(respone.data);

            setTitle('');
            setDescription('');
            setPrice(0);

            setShow(false);
        } catch (error) {
            window.alert("Error creating Food Item")
            console.log(error);
        }
    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                + Add New Food Item
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        Create New Food Item
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Please enter the title, description and price of the food item you would like to add.</p>

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

export default AddFoodItemButton;