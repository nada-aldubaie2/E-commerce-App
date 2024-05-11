import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductDescription from './ProductDescription';

const ProductDetail = () => {
  return (
    <Row className='py-3 mx-2'>
      <Col lg="4">
        <ProductGallery/>
      </Col>
      <Col lg="8">
        <ProductDescription/>
      </Col>
    </Row>
  );
}

export default ProductDetail;
