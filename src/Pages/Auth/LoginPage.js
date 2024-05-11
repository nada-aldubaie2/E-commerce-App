import { Button, Form, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <Row className="py-6 d-flex justify-center height-center">
        <Col sm="12" className="m-auto px-3 my-4 max-w-96 ">
          <Form>
            <p className="mb-3 text-center font-bold text-2xl">
              {" "}
              تسجيل الدخول{" "}
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="focus:border-slate-400 focus:shadow-none border-slate-400 placeholder:text-gray-400 font-normal"
                placeholder="البريد الالكتروني "
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                className="focus:border-slate-400 border-slate-400 focus:shadow-none placeholder:text-gray-400 font-normal"
                placeholder="كلمة السر"
              />
            </Form.Group>
            <Button
              type="submit"
              className="btn w-full bg-zinc-900 outline-none border-none hover:bg-zinc-700 "
            >
              تسجيل الدخول
            </Button>
            <p className=" my-2 text-center font-normal text-base text-slate-600">
              {" "}
              ليس لديك حساب؟{" "}
              <Link to="/register">
                <span className="text-red-500 cursor-pointer"> اضغط هنا</span>
              </Link>
            </p>
          </Form>
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <label className="mx-auto text-center">الدخول بحساب الادمن</label>
          </Link>
          <Link to="/user/allOrders" style={{ textDecoration: "none" }}>
            <label className="mx-auto text-center">الدخول بحساب المستخدم</label>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginPage;
