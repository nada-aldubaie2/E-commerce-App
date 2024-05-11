import { Container, Row } from "react-bootstrap";
import Subtitle from "../Utility/Subtitle";
import ProductCard from "./ProductCard";

const ProductCardComponent = ({title, btnTitle, pathlink}) => {
  return (
    <Container fluid className="p-0 my-4">
      <Subtitle title={title} btnTitle={btnTitle} pathlink={`${pathlink}`} />
      <Row classNmae="d-flex justify-between sm:my-4 my-3 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default ProductCardComponent;
