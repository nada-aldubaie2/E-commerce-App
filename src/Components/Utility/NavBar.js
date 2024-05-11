import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "../HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      expand="lg"
      className="d-flex justify-between sticky-top mx-0 sm:mx-8"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex text-lg font-extrabold logo ">
          <a href="/">
            {/* <img src={logo} alt="profile" className="rounded logo" />  */}
            تسوق
          </a>
        </Navbar.Brand>
        <div className="flex items-center justify-end nav-in">
          ={" "}
          <Nav className=" d-flex justify-between me-2 text-sm" navbarScroll>
            <Nav.Link className=" text-slate-300  cursor-pointer" href="/">
              الرئيسية
            </Nav.Link>
            <Nav.Link
              className=" text-slate-300  cursor-pointer"
              href="/allcategories"
            >
              {" "}
              الفئات
            </Nav.Link>
          </Nav>
          <div className="search xs:w-full sm:w-3/6 px-2  cursor-pointer">
            <FontAwesomeIcon
              className="text-slate-400"
              icon={faMagnifyingGlass}
            />

            <input
              type="search"
              placeholder="ابحث"
              className="me-2 outline-none w-4/5 text-slate-200 bg-transparent text-sm   cursor-pointer "
              aria-label="Search"
            />
          </div>
          <Nav className=" d-flex justify-between me-2 text-sm" navbarScroll>
            <Nav.Link href="/cart" className=" text-slate-300  cursor-pointer">
              <FontAwesomeIcon icon={faCartShopping} />
            </Nav.Link>
            <Nav.Link
              href="/user/favoriteproduct"
              className=" text-slate-300  cursor-pointer"
            >
              <FontAwesomeIcon icon={faHeart} />
            </Nav.Link>
            <Nav.Link href="/login" className=" text-slate-300">
              تسجيل الدخول
            </Nav.Link>
          </Nav>
        </div>
        <Button
          variant=""
          onClick={handleShow}
          className="bar text-xl cursor-pointer text-slate-50"
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {" "}
              <Navbar.Brand
                href="/"
                className="d-flex text-lg font-extrabold logo "
              >
                <a href="/">
                  {/* <img src={logo} alt="profile" className="rounded logo" />  */}
                  تسوق
                </a>
              </Navbar.Brand>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="flex items-center navbar flex-col">
              <Nav className=" d-flex justify-between me-2 text-sm">
                <Nav.Link
                  className=" text-slate-300 mb-1  cursor-pointer"
                  href="/"
                >
                  الرئيسية
                </Nav.Link>
                <Nav.Link
                  className=" text-slate-300 mb-1  cursor-pointer"
                  href="/login"
                >
                  الفئات
                </Nav.Link>
                <Nav.Link
                  href="/cart"
                  className=" text-slate-300 text-sm  mb-1  cursor-pointer"
                >
                  <FontAwesomeIcon
                    className="ml-2 mb-1"
                    icon={faCartShopping}
                  />
                  العربة
                </Nav.Link>
                <Nav.Link
                  href="/user/favoriteproduct"
                  className=" text-slate-300 text-sm mb-1  cursor-pointer"
                >
                  <FontAwesomeIcon className="ml-2" icon={faHeart} />
                  المفضلة
                </Nav.Link>
                <Nav.Link
                  href="/login"
                  className="text-xs text-slate-300  mb-1  cursor-pointer"
                >
                  <FontAwesomeIcon className="ml-2" icon={faUser} /> تسجيل
                  الدخول
                </Nav.Link>
              </Nav>
            </div>
            <div className="search w-auto px-2 mx-5 mt-2">
              <FontAwesomeIcon
                className="text-slate-400"
                icon={faMagnifyingGlass}
              />

              <input
                type="search"
                placeholder="ابحث"
                className="mx-2 outline-none text-slate-200 bg-transparent text-sm  cursor-pointer"
                aria-label="Search"
              />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
