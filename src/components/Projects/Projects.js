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

// InSea 상세 팝업 내용
const InSeaDetail = () => (
  <div className="modal-detail-body">

    {/* 개요 */}
    <section className="modal-section">
      <h3 className="modal-section-title">📌 프로젝트 개요</h3>
      <p>
        인천의 낚시 정보(날씨, 해양, 낚시터, 어종 등)가 온라인상에 산발적으로 흩어져 있어
        필요한 정보를 한번에 찾기 어려운 문제를 해결하기 위해 기획한 서비스입니다.
        <strong> 2025 관광데이터 활용 공모전 출품작</strong>으로, 낚시 초보자부터 전문가까지
        인천 낚시 여행에 필요한 모든 정보를 One-Stop으로 제공합니다.
      </p>
    </section>

    {/* 기술 스택 */}
    <section className="modal-section">
      <h3 className="modal-section-title">🛠 기술 스택</h3>
      <div className="modal-tech-grid">
        <div className="modal-tech-group">
          <span className="modal-tech-label">Backend</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-green">Java 17</span>
            <span className="modal-tag tag-green">Spring Boot 3</span>
            <span className="modal-tag tag-green">Spring Security</span>
            <span className="modal-tag tag-green">OAuth2</span>
            <span className="modal-tag tag-green">JWT</span>
            <span className="modal-tag tag-green">JPA</span>
          </div>
        </div>
        <div className="modal-tech-group">
          <span className="modal-tech-label">Database</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-blue">PostgreSQL 17</span>
            <span className="modal-tag tag-blue">PostGIS 3.5</span>
          </div>
        </div>
        <div className="modal-tech-group">
          <span className="modal-tech-label">Storage / Infra</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-purple">Cloudinary</span>
            <span className="modal-tag tag-purple">Railway</span>
          </div>
        </div>
        <div className="modal-tech-group">
          <span className="modal-tech-label">External API</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-orange">기상청 단기예보</span>
            <span className="modal-tag tag-orange">국립해양조사원</span>
            <span className="modal-tag tag-orange">한국천문연구원</span>
            <span className="modal-tag tag-orange">한국관광공사</span>
            <span className="modal-tag tag-orange">국립해양생물자원관</span>
            <span className="modal-tag tag-orange">Kakao Map</span>
          </div>
        </div>
      </div>
    </section>

    {/* 주요 기능 */}
    <section className="modal-section">
      <h3 className="modal-section-title">⚙️ 주요 기능</h3>
      <div className="modal-features-grid">
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🌤️</span>
          <div>
            <strong>날씨 · 해양 정보</strong>
            <p>인천 25개 지역의 날씨(기온·풍향·강수확률·파고), 조석(만조·간조), 일출·일몰, 실시간 수온 제공. 매일 2회 자동 업데이트.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🗾</span>
          <div>
            <strong>지도 기반 장소 탐색</strong>
            <p>PostGIS 공간 쿼리로 사용자 위치 기반 주변 낚시터·식당·숙소 검색. 한국관광공사 API 연동.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">⭐</span>
          <div>
            <strong>리뷰 · 평점</strong>
            <p>장소별 리뷰 작성·수정·삭제, 이미지 업로드(Cloudinary), 좋아요 토글, 별점 통계 제공.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🐟</span>
          <div>
            <strong>물고기 백과사전</strong>
            <p>국립해양생물자원관 API 기반 해양생물 22,000여 종 데이터. 학명·한국명·서식지 검색 지원.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🚫</span>
          <div>
            <strong>금어기 정보</strong>
            <p>2025년 개정 국립수산과학원 금어기 규정 반영. 날짜·지역별 포획 가능/금지 어종 조회.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🔐</span>
          <div>
            <strong>회원 인증</strong>
            <p>이메일 일반 로그인 및 카카오 소셜 로그인(OAuth2). JWT Access/Refresh Token 발급.</p>
          </div>
        </div>
      </div>
    </section>

    {/* 담당 역할 */}
    <section className="modal-section">
      <h3 className="modal-section-title">👩‍💻 담당 역할 (BE)</h3>
      <ul className="modal-role-list">
        <li>Spring Security + OAuth2 + JWT 기반 인증/인가 시스템 설계 및 구현</li>
        <li>날씨·해양 정보 스케줄러 구현 (공공 API 4종 연동, 매일 자동 업데이트)</li>
        <li>PostGIS 도입으로 위치 기반 반경 검색 기능 구현</li>
        <li>한국관광공사 API 연동 및 장소 데이터(낚시터·식당·숙소) 동기화</li>
        <li>Railway를 통한 backend 코드 및 DB 연동, 배포</li>
        <li>PostgreSQL DB 설계</li>
      </ul>
    </section>

    {/* 트러블슈팅 */}
    <section className="modal-section">
      <h3 className="modal-section-title">🔥 주요 트러블슈팅</h3>
      <div className="modal-trouble-list">
        <div className="modal-trouble-item">
          <span className="modal-trouble-badge">PostGIS</span>
          <p>단순 위도/경도 비교 대신 PostGIS <code>ST_DWithin</code>으로 정확한 반경 검색 및 거리 정렬 구현</p>
        </div>
        <div className="modal-trouble-item">
          <span className="modal-trouble-badge">API 장애</span>
          <p>공공데이터포털 간헐적 장애 대응을 위한 업데이트 이력 관리 및 기존 캐시 데이터 유지 로직 구현</p>
        </div>
        <div className="modal-trouble-item">
          <span className="modal-trouble-badge">리뷰 재작성</span>
          <p>소프트 삭제 후 UNIQUE 충돌 문제를 삭제 레코드 재활용 방식으로 해결</p>
        </div>
        <div className="modal-trouble-item">
          <span className="modal-trouble-badge">카카오 로그인</span>
          <p>이메일 권한 부재 문제를 비즈앱 개인 개발자 등록으로 해결</p>
        </div>
      </div>
    </section>

  </div>
);

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
              detail={<InSeaDetail />}
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