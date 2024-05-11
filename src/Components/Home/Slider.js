import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import slide1 from "../../Assets/Images/Slider/slide1.jpg";
import slide2 from "../../Assets/Images/Slider/2.jpg";
import '../HomePage.css';
const Slider = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect} className=" mt-3">
        <Carousel.Item >
          <img src={slide1} alt="first slide" className="object-fit opacity-25" />
          <Carousel.Caption>
            <h3 className="text-base sm:text-2xl">هناك خصم كبير </h3>
            <p className="text-sm sm:text-xl">خصم يصل الى 50% عند شرائك</p>
          </Carousel.Caption>
        </Carousel.Item>
      
        <Carousel.Item >
          <img src={slide1} alt="first slide" className="object-fit opacity-25" />
          <Carousel.Caption>
            <h3 className="text-base sm:text-2xl">هناك خصم كبير </h3>
            <p className="text-sm sm:text-xl">خصم يصل الى 50% عند شرائك</p>
          </Carousel.Caption>
        </Carousel.Item>
      
      
      </Carousel>
  );
};

export default Slider;
