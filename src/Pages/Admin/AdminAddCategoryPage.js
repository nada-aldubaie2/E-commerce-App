import React from "react";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import { Col, Row } from "react-bootstrap";
import AdminAddCategory from "../../Components/Admin/AdminAddCategory";

const AdminAddCategoryPage = () => {
  return (
    <div>
      <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <AdminAddCategory />
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddCategoryPage;
