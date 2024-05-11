import React from "react";
import { Card, Col } from "react-bootstrap";

const BrandCard = ({logo}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="2" className="my-2 sm:my-4 d-flex justify-around">
    <Card className="my-1 w-full h-40 rounded-lg border-none bg-white">
      <Card.Img variant="top" src={logo} className="w-full h-40" />
    </Card>
    </Col>
  );
};

export default BrandCard;
