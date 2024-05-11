import { Container, Row } from "react-bootstrap";
import logo from "../../Assets/Images/logo.png";
import BrandCard from "./BrandCard";
import Subtitle from "../Utility/Subtitle";
const BrandComponent = () => {
  return (
    <Container fluid className="p-0 ">
      <Row classNmae="d-flex justify-between sm:my-2 my-1 ">
        <BrandCard logo={logo} />
        <BrandCard logo={logo} />
        <BrandCard logo={logo} />
        <BrandCard logo={logo} />
        <BrandCard logo={logo} />
      </Row>
    </Container>
  );
};

export default BrandComponent;
