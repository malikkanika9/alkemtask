import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
export const Depot = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState("");
  



    return (
        <>
            < Button variant="primary" onClick={handleShow}>
                Serach Depot
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>  ADD Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                </Modal.Body>
            </Modal>
        </>
    )
}