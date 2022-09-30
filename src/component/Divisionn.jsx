import React, { useState } from "react";
import {  Form, Modal } from "react-bootstrap";
import { useEffect,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { ApiiContext } from "../context/Apicontext";
import {ImCross} from "react-icons/im"
const Division = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { token } = useSelector((state) => state.token);
  const [dis_data,setDisData]=useState("")
  const [select_value, setSelectvalue]= useState("")
  const {code,handledivision,thirdDataRemove,divisionDataRemove} = useContext(ApiiContext)
  const handleShow = () => {
    setShow(true);
  };
  console.log("select_value",select_value)
  const distributionCall = () => {
    axios
      .get(
        `https://alkemapi.indusnettechnologies.com/api/feed/dist_divisions/E?dist_id=${Number(code)}`,
        { headers: { Authorization: `bearer ${token}` } }
      )
      .then((res) => {
        console.log(res);
        setDisData(res.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    show && distributionCall();
  }, [show,code]);
  const hadnleValue=(value)=>{
    handleRemovData()
    setSelectvalue(value.division_name)
    console.log(value);
    handledivision(value.division_code)
    handleClose()
  }
  useEffect(()=>{
    handleRemovData()
  },[divisionDataRemove])

  const handleRemovData=()=>{
    setSelectvalue("")
    handledivision("")
    thirdDataRemove()
  }
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Select Division"
        onClick={handleShow}
        style={{ cursor: "pointer" }}
        value={select_value?select_value:""}
        disabled={code?false:true}
      />
      {
        select_value && <div className="position-relative" onClick={()=>handleRemovData()} >
        <button className="position-absolute end-0" style={{top:"-4.7vh"}} >
          <ImCross/>
        </button>
      </div>
      }


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Division</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control placeholder="Select Division" type="text" value={select_value?select_value:""} onChange= {(e)=>setSelectvalue(e.target.value)}/>
        
        <ul style={{listStyle:" none",display:"block"} }>

          {
            dis_data && dis_data.map((item)=>
                <li key={Date.now()+Math.random()} onClick={()=>hadnleValue(item)} >
                    <Form.Check type="radio" label={item.division_name}
                  defaultChecked={item.division_name ===select_value}
                    
                    />
                </li>
            )
          }
        </ul>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default  Division