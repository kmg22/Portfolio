import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  const awards = [
    {
      title: "소프트웨어 공모전 금상",
      meta: "(대학) | 기계학습 기반 수어 번역기 개발",
      date: "2023.08",
    },
    {
      title: "2025 IT 프로젝트 공모전 장려상",
      meta: "(대학) | 네트워크 지연시간 반영 서버 시간 웹서비스 개발",
      date: "2026.01",
    },
    {
      title: "창의적공학설계 전시회 장려상",
      meta: "(대학) | Nextion LCD - Arduino 양방향 통신 키오스크 시스템 개발",
      date: "2022.12",
    },
  ];

  const certifications = [
    { title: "정보처리기사", date: "2025.12" },
    { title: "SQLD", date: "2024.09" },
    { title: "TOPCIT Level 3 (564)", date: "2025.11" },
    { title: "TOEIC Speaking IH (140)", date: "2026.03" },
  ];

  return (
    <>
      <Particle />
      <Container fluid className="about-section skills-page">
        <Container className="skills-shell">
          <section className="skills-hero">
            <p className="skills-kicker">skills</p>
            <h1 className="skills-title">Backend & Infrastructure Skills</h1>
            <p className="skills-desc">
              기능 구현에 그치지 않고, 운영 환경에서 안정적으로 동작하는 구조를
              설계하는 데 초점을 두고 있습니다.
              <br />
              백엔드 개발, 인프라 운영, 보안 관점을 함께 가져가며 문제를
              구조적으로 해결해 왔습니다.
            </p>
          </section>

          <Row className="skills-summary-row">
            <Col lg={6}>
              <section className="skills-summary-block">
                <p className="skills-block-kicker">awards</p>
                <h2 className="skills-block-title">Awards</h2>
                <div className="skills-summary-list">
                  {awards.map((item) => (
                    <div className="skills-summary-item" key={item.title}>
                      <div className="skills-summary-body">
                        <span className="skills-summary-name">{item.title}</span>
                        <span className="skills-summary-meta">{item.meta}</span>
                      </div>
                      <span className="skills-summary-date">{item.date}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Col>

            <Col lg={6}>
              <section className="skills-summary-block">
                <p className="skills-block-kicker">certifications</p>
                <h2 className="skills-block-title">Certifications</h2>
                <div className="skills-summary-list">
                  {certifications.map((item) => (
                    <div className="skills-summary-item" key={item.title}>
                      <div className="skills-summary-body">
                        <span className="skills-summary-name">{item.title}</span>
                      </div>
                      <span className="skills-summary-date">{item.date}</span>
                    </div>
                  ))}
                </div>
              </section>
            </Col>
          </Row>

          <section className="skills-stack-section about-stack-heading">
            <p className="skills-block-kicker">tech stack</p>
            <h2 className="skills-section-title">Professional Skillset</h2>
            <Techstack />
          </section>

          <section className="skills-stack-section about-tools-heading">
            <p className="skills-block-kicker">workflow</p>
            <h2 className="skills-section-title">Tools I use</h2>
            <Toolstack />
          </section>
        </Container>
      </Container>
    </>
  );
}

export default About;
