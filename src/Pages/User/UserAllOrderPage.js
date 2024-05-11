import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserSideBar from '../../Components/User/UserSideBar';
import UserAllOrder from '../../Components/User/UserAllOrder';

const UserAllOrderPage = () => {
  return (
    <div>
           <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <UserSideBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <UserAllOrder />
        </Col>
      </Row>
    </div>
  );
}

export default UserAllOrderPage;
