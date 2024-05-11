import { Container, Row, Col } from "react-bootstrap";
import facebook from "../../Assets/Images/footer/facebook.png";
import linkedin from "../../Assets/Images/footer/linkedin.png";
import x from "../../Assets/Images/footer/X.png";
import phone from "../../Assets/Images/footer/discord.png";

const Footer = () => {
  return (
    <Footer className="h-20 mt-3 pt-2 m-auto">
      <Container className="d-flex justify-between m-0">
        <Row className="d-flex justify-between items-center">
          <Col sm="6" className="d-flex items-center">
            <div className="text-slate-400 text-xs cursor-pointer">
              الشروط والاحكام
            </div>
            <div className="mx-2 text-slate-400 text-xs cursor-pointer">
              سياسة الخصوصية
            </div>
            <div className="mx-2 text-slate-400 text-xs cursor-pointer">
              اتصل بنا
            </div>
          </Col>
          <Col sm="6" className="d-flex justify-end items-center">
            <div className="d-flex pt-3 mx-2">
              <img src={phone} alt="phone" className="w-5 h-5" />
              <p className="footer-phone">777888999</p>
            </div>
            <div className=" cursor-pointer">
              <img src={facebook} alt="facebook" className="w-5 h-5" />
            </div>
            <div className=" cursor-pointer">
              <img src={linkedin} alt="linkedin" className="w-5 h-5" />
            </div>
            <div className=" cursor-pointer">
              <img src={x} alt="x" className="w-5 h-5" />
            </div>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default Footer;
