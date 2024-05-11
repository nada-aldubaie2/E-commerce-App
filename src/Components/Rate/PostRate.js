import { Col, Row, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const PostRate = () => {
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 0.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="fa-regular fa-star" />,
    halfIcon: <i className="fa-solid fa-star-half-stroke" />,
    filledIcon: <i className="fa-solid fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };
  return (
    <>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5  d-flex">
          <div className="d-inline ms-3 mt-1 text-gray-500 text-sm font-bold">
            علي محمد
          </div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2">
          <textarea
            className="p-2 mt-3 ml-2 w-full border-gray-400 rounded-lg bg-slate-200 outline-none"
            rows="1"
            cols="20"
            placeholder="اكتب تعليقك...."
          />
          <div className=" d-flex justify-content-end items-center">
            <Button variant="dark" className="font-thin text-xs w-20">اضف تعليق</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PostRate;
