import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import apiClient from '../Services/ApiClient';

const EditFoodItemButton = ({ foodItem, handleDelete }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSave() {
        deleteFoodItem();
    }

    async function deleteFoodItem() {
        const foodItemData = foodItem
        
        try {
            await apiClient.delete('fooditems/' + foodItem.foodItemId);
            
            handleDelete(foodItemData);

            setShow(false);
        } catch (error) {
            window.alert("Error deleting Food Item")
            console.log(error);
        }
    }

    return (
        <>
            <Button className='m-1' variant="outline-danger" onClick={handleShow} >Delete</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        Delete Food Item
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure? This action cannot be undone!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="danger" onClick={handleSave}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditFoodItemButton;