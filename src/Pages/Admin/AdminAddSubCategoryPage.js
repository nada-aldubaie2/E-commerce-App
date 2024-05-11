import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import avatar from '../../Assets/Images/avatar.png'
import AdminAddSubCategory from '../../Components/Admin/AdminAddSubCategory';

const AdminAddSubCategoryPage = () => {
  return (
    <div>
         <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <AdminAddSubCategory />
        </Col>
      </Row>
    </div>
  );
}

export default AdminAddSubCategoryPage;
