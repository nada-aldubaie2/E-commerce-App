import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminAddBrand from '../../Components/Admin/AdminAddBrand';
import AdminSidedBar from '../../Components/Admin/AdminSideBar';

const AdminAddBrandPage = () => {
  return (
    <div>
           <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <AdminSidedBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <AdminAddBrand />
        </Col>
      </Row>
    </div>
  );
}

export default AdminAddBrandPage;
