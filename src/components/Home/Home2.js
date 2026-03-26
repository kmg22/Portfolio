import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-woman.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  const experiences = [
    {
      title: "관광데이터 활용공모전",
      role: "Backend Development",
      period: "2025.05 - 2025.10",
    },
    {
      title: "홈서버 기반 서비스 운영 및 네트워크 트러블슈팅",
      role: "System Operation & Troubleshooting",
      period: "2025.09 - current",
    },
    {
      title: "쿠버네티스 기반 CI/CD 및 배포 환경 구축",
      role: "Infrastructure & Deployment",
      period: "2026.01 - current",
    },
    {
      title: "한국대학생IT경영학회 KUSITMS 33기 운영진",
      role: "Backend Architecture, (LG전자) 기업 연계 프로젝트",
      period: "2026.02 - 2026.06",
    },
    {
      title: "COMMSEC Lab 학부연구생",
      role: "Security Research & (CISC-S'25) Fuzzing 논문 투고",
      period: "2024.07 - 2025.06",
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="home-about-description">
            <p className="home-about-kicker">ABOUT ME</p>
            <h1 className="home-about-heading">
              Backend Developer
            </h1>
            <p className="home-about-subtitle">
              focused on <span className="purple">reliable systems and operational stability</span>
            </p>

            <div className="home-about-body">
              <h2 className="home-about-section-title">Experiences</h2>
              <div className="home-about-experience-list">
                {experiences.map((experience) => (
                  <div className="home-about-experience-item" key={experience.title}>
                    <div className="home-about-experience-main">
                      <strong>{experience.title}</strong>
                      <span>{experience.role}</span>
                    </div>
                    <div className="home-about-experience-period">
                      {experience.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{width:"48%"}}/>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
