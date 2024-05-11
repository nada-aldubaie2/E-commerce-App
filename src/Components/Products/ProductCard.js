import React from "react";
import { Col, Card } from "react-bootstrap";
import productPic from "../../Assets/Images/nada.jpg";
import { Link } from "react-router-dom";

const ProductCard = ({  favoriteIcon, rate }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="3"
    className="d-flex my-2"
    >
      <Card className="w-full h-full rounded-lg border-none bg-white shadow-stone-700 my-2">
      <Link to="/products/:id">
        <Card.Img variant="top" src={productPic} className="w-full h-56" />
          </Link>
        <div className="d-flex justify-end mx-2">
          <img
            src={favoriteIcon}
            alt="favorite"
            className="text-center h-6 w-7"
            />
            
        </div>
        <Card.Body>
          <Card.Title className="text-base sm:text-lg text-slate-500 text-right pb-3 font-normal">ساعة أبل مويل صيف 24 متوفر بأكثر من لون </Card.Title>
          <Card.Text className="">
            <div className="d-flex justify-between">
              <div className="d-flex">
              <img
                src={rate}
                alt="favorite"
                className="w-4 h-4"
                />
                <div className="mx-2 text-yellow-500 text-xs sm:text-sm font-medium ">5.22</div>
                </div>
                <div className="d-flex items-center">
                  <div className=" text-xs sm:text-base text-slate-600 font-bold ">880</div>
                  <div className="card-currency mx-1 text-xs sm:text-base text-slate-500 ">ريال</div>
                </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
