import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CategoryHeader = () => {
  return (
    <div className='h-full'>
      <Container>
        <Row>
          <Col className="d-flex justify-start py-2 flex-wrap">
            <div className="font-bold text-xs pt-3 ml-3 cursor-pointer text-zinc-400 hover:text-stone-700">الكل</div>
            <div className="font-bold text-xs pt-3 ml-3 cursor-pointer text-zinc-400 hover:text-stone-700">الكترونيات</div>
            <div className="font-bold text-xs pt-3 ml-3 cursor-pointer text-zinc-400 hover:text-stone-700">ملابس</div>
            <div className="font-bold text-xs pt-3 ml-3 cursor-pointer text-zinc-400 hover:text-stone-700">حقائب</div>
            <div className="font-bold text-xs pt-3 ml-3 cursor-pointer text-zinc-400 hover:text-stone-700">تخفيضات</div>
            <div className="font-bold text-xs pt-3 ml-3 cursor-pointer text-zinc-400 hover:text-stone-700">تخفيضات</div>
            <div className="font-bold text-xs pt-3 ml-3 cursor-pointer text-zinc-400 hover:text-stone-700">تخفيضات</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CategoryHeader;
