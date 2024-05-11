import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserSideBar from '../../Components/User/UserSideBar';
import UserAddAdress from '../../Components/User/UserAddAdress';

const UserAddAdressPage = () => {
  return (
    <div>
           <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserAddAdress />
        </Col>
      </Row>
    </div>
  );
}

export default UserAddAdressPage;
