import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import myImage from "../../../images/01.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <>
        <Container>
          <Row className="align-items-center">
            <Col>
              <div>
                <h1>
                  Grow Your Study with <strong>Masum Billah</strong>
                </h1>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, maiores?
                </h2>
                <Link to="/service">
                  <button>Get Started</button>
                </Link>
              </div>
            </Col>
            <Col>
              <div className="card">
                <div className="image-box">
                  <img src={myImage} alt="my-Image" />
                </div>
                <div className="content">
                  <h2>keep smilling</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe architecto placeat voluptates molestiae aliquid
                    quibusdam nisi deleniti doloremque magnam maxime?
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default Home;
