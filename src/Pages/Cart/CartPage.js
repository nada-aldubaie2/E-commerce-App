import { Col, Row } from "react-bootstrap";
import CartItems from "../../Components/Cart/CartItems";
import CartCheckout from "../../Components/Cart/CartCheckout";

const CartPage = () => {
  return (
    <div className="mx-2">
      <Row>
        <div className="mt-4 text-gray-600 text-xl font-extrabold text-right">عربة التسوق</div>
      </Row>
      <Row className="d-flex justify-center">
        <Col xs="12" md="9">
          <CartItems/>
          <CartItems/> 
        </Col>
        <Col xs="6" md="3">
          <CartCheckout/>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
