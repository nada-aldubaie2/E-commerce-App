import rate from '../../Assets/Images/rate.png';
import { Col, Container, Row } from 'react-bootstrap';
import PostRate from './PostRate';
import RateItem from './RateItem';

const RateComponent = () => {
  return (
    <Container className="h-full w-full pb-3 bg-white shadow-sm shadow-gray-500 ">
    <Row>
      <Col className="d-flex">
        <div className="d-inline p-1 text-zinc-800 text-xl font-bold">التقيمات</div>
        <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
        <div className="d-inline p-1 pt-2 text-yellow-500 text-xs font-bold text-right">4.3</div>
        <div className="d-inline p-1 pt-2 text-gray-400 text-xs">(160 تقييم)</div>
      </Col>
    </Row>
    <PostRate />
    <RateItem />
    <RateItem />
    <RateItem />
    <RateItem />
    {/* <PaginationCompontent /> */}
  </Container>
  );
}

export default RateComponent;
