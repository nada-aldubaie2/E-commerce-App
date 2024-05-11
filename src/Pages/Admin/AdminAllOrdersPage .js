import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminSideBar from '../../Components/Admin/AdminSideBar';
import Pagination from '../../Components/Utility/Pagination';
import AdminAllOrder from '../../Components/Admin/AdminAllOrder';

const AdminAllOrdersPage = () => {
  return (
    <div>
          <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllOrder />
          <Pagination />
        </Col>
      </Row>
    </div>
  );
}

export default AdminAllOrdersPage;
