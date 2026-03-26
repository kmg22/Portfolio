import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import MySQL from "../../Assets/TechIcons/MySQL.svg";
import C from "../../Assets/TechIcons/C++.svg";
import SpringBoot from "../../Assets/TechIcons/SpringBoot.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Django from "../../Assets/TechIcons/Django.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "36px" }}>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={SpringBoot} alt="Spring Boot" className="tech-icon-images" />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Django} alt="Django" className="tech-icon-images" />
        <div className="tech-icons-text">Django</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={SQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={MySQL} alt="MySQL" className="tech-icon-images" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiNextdotjs fontSize={"20px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Kubernates} alt="Kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>
    </Row>
  );
}

export default Techstack;
