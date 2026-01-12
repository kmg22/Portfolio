import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-woman.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am currently studying at the <b className="purple">School of Computer Science</b>(Software/Information Security Convergence) at <b className="purple">Soongsil University</b>.
              <br />
              <br />
              I focus on backend development using 
              <i>
                <b className="purple"> Spring Boot, Node.js, MySQL, and PostgreSQL</b>
              </i>
              , aiming to build <b className="purple">stable and scalable</b> server architectures.
              <br />
              <br />
              I have accumulated diverse project experience, ranging from 
              <i>
                <b className="purple"> Web/App development</b>
              </i>
              &nbsp;to&nbsp;
              <i>
                <b className="purple"> Cloud infrastructure configuration</b>
              </i>
              &nbsp;and&nbsp;
              <i>
                <b className="purple"> Web security vulnerability research</b>.
              </i>
              <br />
              <br />
              I am additionally interested in &nbsp;
              <i>
                <b className="purple">Kubernetes-based orchestration</b>
              </i>
              , 
              <i>
                <b className="purple"> Home server setup</b>
              </i>
              , and 
              <i>
                <b className="purple"> Web security</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{width:"70%"}}/>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
