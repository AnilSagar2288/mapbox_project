import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/action/userAction";
import logoImg from "../assets/images/logo.png";

const Header = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    if (userInfo) {
      navigate("/");
    }
  };
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
    } else {
      setName("");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        style={{ zIndex: 2 }}
      >
        <Container>
          <Navbar.Brand>
            <NavLink className="navLogo" to={userInfo ? "/dashboard" : "/"}>
              <img src={logoImg} alt="logo" width="40" height="50" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto"></Nav>
            <Nav>
              {userInfo ? (
                <>
                  <NavLink
                    to="/login"
                    className={"navlink-btn"}
                    onClick={() => logoutHandler()}
                  >
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    Logout
                  </NavLink>
                </>
              ) : (
                <NavLink to="/login" className={"navlink-btn"}>
                  <i class="fa-solid fa-right-to-bracket"></i>
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
