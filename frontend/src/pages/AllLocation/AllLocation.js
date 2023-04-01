import React, { useCallback } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const AllLocation = ({ locations }) => {
  const navigate = useNavigate();
  const browesLocationHandler = useCallback(
    (location) => {
      navigate(`/location/${location._id}`, {
        state: {
          location,
        },
      });
    },
    [navigate]
  );
  return (
    <>
      {locations?.map((location) => {
        return (
          <Col className="mt-3" md={4} xl={3} sm={6} xs={12} key={location._id}>
            <Card
              style={{ width: "18rem", minHeight: "455px" }}
              className="box"
            >
              <Card.Img variant="top" src={location.image} />
              <Card.Body className="card-body-wrapper">
                <Card.Title>{location.location_name}</Card.Title>
                <Card.Text>{location.content}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => browesLocationHandler(location)}
                >
                  Visit this place
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default AllLocation;
