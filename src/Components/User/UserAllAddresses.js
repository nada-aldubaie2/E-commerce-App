import React from 'react';
import { Col, Row } from 'react-bootstrap';
import UserAddressCard from './UserAddressCard';
import { Link } from 'react-router-dom';

const UserAllAddresses = () => {
  return (
    <div>
       <Row className="">
        <div className="admin-content-text">دفتر العنوانين</div>
        <UserAddressCard />
        <UserAddressCard />
        <Row className="justify-content-center">
          <Col sm="5" className="d-flex justify-content-center">
            <Link to="/user/add-address" style={{ textDecoration: "none" }}>
              <button className="btn-add-address">اضافه عنوان جديد</button>
            </Link>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default UserAllAddresses;
