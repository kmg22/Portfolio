import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Kim Mingyeong</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>School of Software, Soongsil University</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/kmg22"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://velog.io/@kmg22/about"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiVelog />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:ssukmg22@gmail.com"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
          <p className="footer-meta">
            Information Security Convergence Major · Copyright © {year}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
