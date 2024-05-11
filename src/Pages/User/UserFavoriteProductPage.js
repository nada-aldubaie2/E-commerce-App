import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserFavoriteProduct from '../../Components/User/UserFavoriteProduct';
import UserSideBar from '../../Components/User/UserSideBar';

const UserFavoriteProductPage = () => {
  return (
    <div>
         <Row className="py-3">
        <Col sm="5" xs="3" md="2">
          <UserSideBar />
        </Col>
        <Col sm="7" xs="9" md="10">
          <UserFavoriteProduct/>
        </Col>
      </Row>
    </div>
  );
}

export default UserFavoriteProductPage;
