import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useEffect,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { ApiiContext } from "../context/Apicontext";
import { ImCross } from "react-icons/im";

const Depot = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { token } = useSelector((state) => state.token);
  const [dis_data, setDisData] = useState("");
  const [select_value, setSelectvalue] = useState("");
  const { code, handleDepot,divisionCode ,depotDataRemove,productList } =
    useContext(ApiiContext);
  const handleShow = () => {
    setShow(true);
  };
  console.log("select_value", select_value);
  const distribution = () => {
    axios
      .get(
        `https://alkemapi.indusnettechnologies.com/api/feed/dist_depot/E?dist_id=${Number(
          code
        )}&dc=${Number(divisionCode)}`,
        { headers: { Authorization: `bearer ${token}` } }
      )
      .then((res) => {
        console.log(res.data.data);
        setDisData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(code);
  };
  useEffect(() => {
    show && distribution();
  }, [show, code, divisionCode]);
  useEffect(()=>{
     handleRemoveData()
  },[depotDataRemove])
  const hadnleValue = (value) => {
    setSelectvalue(value.location_name);
    console.log(value);
    handleDepot(value.cfa_code);
    handleClose();
  };
  const handleRemoveData = () => {
    setSelectvalue("");
    handleDepot("");
    productList()
  };
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Select Depot"
        onClick={handleShow}
        style={{ cursor: "pointer" }}
        value={select_value ? select_value : ""}
        disabled={divisionCode ? false : true}
      />

      {select_value && (
        <div className="position-relative" onClick={() => handleRemoveData()}>
          <button className="position-absolute end-0" style={{ top: "-4.7vh" }}>
            <ImCross />
          </button>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Depot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="Select Depot"
            type="text"
            value={select_value ? select_value : ""}
            onChange={(e) => setSelectvalue(e.target.value)}
          />

          <ul style={{ listStyle: " none", display: "block" }}>
            {dis_data &&
              dis_data.map((item) => (
                <li
                  key={Date.now() + Math.random()}
                  onClick={() => hadnleValue(item)}
                >
                  <Form.Check type="radio" label={item.location_name} 
                  defaultChecked={item.location_name ===select_value}
                  
                  />
                </li>
              ))}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Depot;