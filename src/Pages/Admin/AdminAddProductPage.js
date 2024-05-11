import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import AdminAddProduct from '../../Components/Admin/AdminAddProduct';

const AdminAddProductPage = () => {
  return (
    <div>
          <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <AdminSideBar/>
        </Col>
        <Col sm="7" xs="9" md="10">
          <AdminAddProduct/>
        </Col>
      </Row>
    </div>
  );
}

export default AdminAddProductPage;
