import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserSideBar from '../../Components/User/UserSideBar';
import UserEditAddress from '../../Components/User/UserEditAddress';

const UserEditAddressPage = () => {
  return (
    <div>
          <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserEditAddress />
        </Col>
      </Row>
    </div>
  );
}

export default UserEditAddressPage;
