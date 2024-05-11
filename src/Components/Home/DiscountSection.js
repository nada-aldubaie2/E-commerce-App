import { Container, Row, Col } from "react-bootstrap";
import laptop from '../../Assets/Images/0x0.jpg';
const DiscountSection = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="discount-backcolor h-36 rounded-lg my-3 mx-2 d-flex justify-between items-center">
        <Col sm="6">
          <div className="text-white text-base sm:text-xl">
            خصم يصل حتى 30% على اجهزة اللابتوب
          </div>
        </Col>
        <Col sm="6">
          <img src={laptop} alt="discount" className="sm:max-h-32 sm:max-w-4/5 max-h-16 max-w-3/4" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
