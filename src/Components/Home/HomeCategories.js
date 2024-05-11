import { Container, Row } from "react-bootstrap";
import Subtitle from "../Utility/Subtitle";
import CategoryCard from "../Categories/CategoryCard";
import nada from "../../Assets/Images/nada.jpg";

const HomeCategories = () => {
  return (
    <Container fluid className="p-0">
      <Subtitle title={"التصنيفات"} btnTitle={"المزيد"} pathlink="/allcategories" />
      <Row classNmae="d-flex justify-between sm:my-2 my-1 ">
        <CategoryCard
          title={"أجهزة منزلية"}
          background="#c35c5c"
          image={nada}
        />
        <CategoryCard
          title={"أجهزة منزلية"}
          background="#c35c5c"
          image={nada}
        />
        <CategoryCard
          title={"أجهزة منزلية"}
          background="#0034FF"
          image={nada}
        />
        <CategoryCard
          title={"أجهزة منزلية"}
          background="#c35c5c"
          image={nada}
        />
        <CategoryCard
          title={"أجهزة منزلية"}
          background="#0034FF"
          image={nada}
        />
        <CategoryCard
          title={"أجهزة منزلية"}
          background="#c35c5c"
          image={nada}
        />
        <CategoryCard
          title={"أجهزة منزلية"}
          background="#0034FF"
          image={nada}
        />
        <CategoryCard
          title={"أجهزة منزلية"}
          background="#c35c5c"
          image={nada}
        />
      </Row>
    </Container>
  );
};

export default HomeCategories;
