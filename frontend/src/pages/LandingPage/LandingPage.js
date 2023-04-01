import React from "react";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="main">
        <div className="intro-text">
          <h1 className="title">
            Explore your <strong>FAVORITE</strong> places
          </h1>
          <p className="subtitle">
            lets you keep track of all your favorite places around the world,
            tag them, and find them on your very own map!
          </p>
          <div className="btnContainer">
            <Link to="/login">
              <Button variant="primary" size="lg">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="secondary" size="lg">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_wrapper"></div>
    </>
  );
};

export default LandingPage;
