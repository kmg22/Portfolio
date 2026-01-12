import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import InSea from "../../Assets/Projects/InSea.png";
import v2xImage from "../../Assets/Projects/v2xImage.png";
import signLanguageImage from "../../Assets/Projects/signLanguageImage.png";
import llmImage from "../../Assets/Projects/llmImage.png";
import serverImage from "../../Assets/Projects/serverImage.png";
import uPCImage from "../../Assets/Projects/uPCImage.png";
import fuzzImage from "../../Assets/Projects/fuzzImage.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          지금까지 진행한 주요 프로젝트들입니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InSea}
              isBlog={false}
              title="InSea : 인천 낚시 정보 플랫폼(앱)"
              description="Spring Boot와 PostgreSQL을 활용한 인천 지역 특화 낚시 정보 및 소통 플랫폼 <2025 관광데이터 활용 공모전 출품작>"
              ghLink="https://github.com/The-CheckMate/InSea-BE"
              demoLink="https://www.canva.com/design/DAGxME2-Ufg/wPFBrReywY_cPr-BT1ZHGA/edit?utm_content=DAGxME2-Ufg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serverImage}
              isBlog={false}
              title="CheckTime : 네트워크 지연시간 측정 웹 서비스"
              description="Node.js와 PostgreSQL을 활용한 사용자 네트워크 지연시간을 고려한 서버시간 측정 웹 서비스 <IT 프로젝트 공모전 장려상>"
              ghLink="https://github.com/The-CheckMate/CheckTime-BE"
              demoLink="https://www.canva.com/design/DAG1lbYuGms/ef-ptOwY3Hx_4kYhfvGvZw/edit?utm_content=DAG1lbYuGms&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uPCImage}
              isBlog={false}
              title="u.PC : 중고 컴퓨터 부품 통합 검색 웹 서비스"
              description="Django와 MySQL을 활용한 중고 사이트(당근마켓, 번개장터, 중고나라)의 컴퓨터 부품 통합 크롤링 <소프트웨어프로젝트>"
              ghLink="https://github.com/2024-SoftwareProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llmImage}
              isBlog={false}
              title="LLM 공급망 공격 연구"
              description="패키지 환각 기반 LLM 공급망 공격 탐구 <융합보안프로젝트2>"
              ghLink="https://github.com/llm-package-hallucination-detection/llm-package-hallucination-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={v2xImage}
              isBlog={false}
              title="V2X 기반 긴급차량 피양 시스템"
              description="SUMO와 Veins를 활용한 긴급차량 이동시간 최적화 시뮬레이션 <캡스톤디자인프로젝트1>"
              ghLink="https://github.com/ssuSW-Capstone-Emergency/V2X-SumoSimulation"
              // demoLink="데모링크"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signLanguageImage}
              isBlog={false}
              title="수화 번역기"
              description="sklearn과 TensorFlow를 활용한 기계학습 기반 수화 번역 시스템 <2023 소프트웨어공모전 금상 수상>"
              ghLink="https://github.com/kmg22/23Summer_SoftProject/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fuzzImage}
              isBlog={true}
              title="한국정보보호학회 2025년 하계학술대회(CISC-S'25)"
              description="PHP기반 웹 취약점 탐지를 위한 Fuzzing 동향 및 향후 연구"
              ghLink="https://www.canva.com/design/DAGpeZCdoZo/8aWsgdyX8w5oQBKRSrnKFw/edit?utm_content=DAGpeZCdoZo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
