import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
export const Product = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState("");
  

    const { token } = useSelector(state => state.token);
    
    useEffect(() => {

        axios.get(`https://alkemapi.indusnettechnologies.com/api/distributor/distributor_list/E?dn=&page_no=${1}`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data)
            }).catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <>
            < Button variant="primary" onClick={handleShow}>
                Serach Distributor
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
                <input
            type="text"
            placeholder="Search Your Distributor"
            style={{ width: "100%" }}
          />
          {data &&
         data.map((item, i) => (
              <div>
                <input  type="checkbox" id="distributor"name="distributor" value={item.customer_name} />
                <label for="distributor" >
                  {item.customer_name}&nbsp; &nbsp;{item.customer_code}&nbsp; &nbsp;
                  <span>({item.location})</span>
                </label>
          
              </div>

            
            ))}
                   
                </Modal.Body>

            </Modal>
        </>
    )
}