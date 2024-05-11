import { Col } from "react-bootstrap";

const CategoryCard = ({title,image, background}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-2 sm:my-3 d-flex justify-around">
      <div className=" w-full h-full relative mb-0 sm:mb-1 ">
        <div className="h-52 w-full bg-white rounded-sm d-flex justify-center items-center" >
          <img src={image} alt="" className="category-card-img"/>
        </div>
          <p className="category-card-text my-2 sm:text-base sm:font-bold text-sm">{title}</p>
      </div>
    </Col>
  );
}

export default CategoryCard;
