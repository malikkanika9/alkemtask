import React from "react";
import { Col, Row } from "react-bootstrap";
import Depot from "./Depot";
import Division from "./Divisionn";
import { ApiiContext } from "../context/Apicontext";
import ProductList from "./ProductList";

const Product = () => {
  const { dataShow } = useContext(ApiiContext);
  return (
    <div className="m-2">
      <Row>
        <Col lg={4} sm={4}>
          <Depot />
        </Col>
        <Col lg={4} sm={4}>
          <Division />
        </Col>
        <Col lg={4} sm={4}>
          <Depot />
        </Col>
      </Row>
      <Row>
        <Col>{dataShow && <ProductList />}</Col>
      </Row>
    </div>
  );
};

export default Product;