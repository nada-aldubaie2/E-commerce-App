import { Container, Row } from "react-bootstrap";
import Subtitle from "../Utility/Subtitle";
import BrandCard from "./BrandCard";
import logo from "../../Assets/Images/logo.png"
const BrandFeatures = ({title, btnTitle}) => {
  return (
    <Container fluid className="p-0 my-4">
      <Subtitle title={title} btnTitle={btnTitle} pathlink={"/allbrands"} />
      <Row classNmae="d-flex justify-between sm:my-2 my-1 ">
        <BrandCard logo={logo}/>
        <BrandCard logo={logo}/>
        <BrandCard logo={logo}/>
        <BrandCard logo={logo}/>
        <BrandCard logo={logo}/>
      </Row>
    </Container>
  );
};

export default BrandFeatures;
