import React from "react";
import CategoryHeader from "../Categories/CategoryHeader";
import ProductDetail from "./ProductDetail";
import RateComponent from "../Rate/RateComponent";
import ProductCardComponent from "./ProductCardComponent";

const ProducDetailsPage = () => {
  return (
    <div className="mx-2">
      <CategoryHeader />
      <ProductDetail />
      <RateComponent />
      <ProductCardComponent title={"منتجات قد تعجبك"} />
    </div>
  );
};

export default ProducDetailsPage;
