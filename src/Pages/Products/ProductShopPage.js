import React from "react";
import CategoryHeader from "../../Components/Categories/CategoryHeader";
import SearchFilter from "../../Components/Utility/SortFilter";
import SideFilter from "../../Components/Utility/SideFilter";
import ProductCardComponent from "../../Components/Products/ProductCardComponent";
import Pagination from "../../Components/Utility/Pagination";
import { Col, Row } from "react-bootstrap";

const ProductShopPage = () => {
  return (
    <div className="mx-2">
      <CategoryHeader />
      <SearchFilter title={"300 منتج متوفر"} />
      <Row className="d-flex flex-row">
        <Col xs="2" sm="2" md="1" className="d-flex ">
          <SideFilter />
        </Col>
        <Col xs="10" sm="10" md="11">
        <ProductCardComponent/>
        </Col>
      </Row>
      <Pagination/>
    </div>
  );
};

export default ProductShopPage;
