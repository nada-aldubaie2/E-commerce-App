import React from "react";
import { Row } from "react-bootstrap";

const SideFilter = () => {
  return (
    <div className="mt-3 px-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="tex text-base text-gray-500 font-bold text-right">الفئة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="text-gray-500 text-xs text-center me-1">الكل</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="text-gray-500 text-xs text-center me-1">اجهزة </div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div  className="text-gray-500 text-xs text-center me-1">اجهزة منزلية</div>
          </div>
        </div>
        <div className="d-flex flex-column mt-2">
          <div className="tex text-base text-gray-500 font-bold text-right">الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="text-gray-500 text-xs text-center me-1">الكل</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="text-gray-500 text-xs text-center me-1">أبل </div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="text-gray-500 text-xs text-center me-1">سامسونح</div>
          </div>
        </div>
        .<div className="tex text-base text-gray-500 font-bold text-right my-3">السعر</div>
        <div className="d-flex">
          <p className="text-gray-500 text-xs text-center my-2">من:</p>
          <input className="m-2 text-center w-12 h-6" type="number" />
        </div>
        <div className="d-flex">
          <p className="text-gray-500 text-xs text-center my-2">الى:</p>
          <input className="m-2 text-center w-12 h-6" type="number" />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
