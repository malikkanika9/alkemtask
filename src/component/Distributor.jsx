import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";

import axios from "axios";

import { ApiiContext } from "../context/Apicontext";

const Distributor = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { token } = useSelector((state) => state.token);
  const [dis_data, setDisData] = useState("");
  const [select_value, setSelectvalue] = useState("");
  const { handleCode ,secondDataremove} = React.useContext(ApiiContext);
  const handleShow = () => {
    setShow(true);
  };
  console.log("select_value", select_value);
  const distribution= () => {
    axios
      .get(
        `https://alkemapi.indusnettechnologies.com/api/distributor/distributor_list/E?dn=&page_no=${1}`,
        { headers: { Authorization: `bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        setDisData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    show && distribution();
  }, [show]);
  const hadnleValue = (value) => {
    handleRemovData()
    setSelectvalue(value.customer_name);
    handleCode(value.customer_code);
    handleClose();
  };

  const handleRemovData = () => {
    setSelectvalue("");
    handleCode("");
    secondDataremove()
  };

  
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Select Distibuter"
        onClick={handleShow}
        style={{ cursor: "pointer" }}
        value={select_value ? select_value : ""}
      />

      {select_value && (
        <div className="position-relative" onClick={() => handleRemovData()}>
          <button className="position-absolute end-0" style={{ top: "-4.7vh" }}>
            <ImCross />
          </button>
        </div>
      )}
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Distibuter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="Search Distributor"
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
                  <Form.Check type="radio" label={item.customer_name} id={`item${item.customer_name}`}
                  defaultChecked={item.customer_name ===select_value}
                  />
                
                </li>
              ))}
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Distributor;