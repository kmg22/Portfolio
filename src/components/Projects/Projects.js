import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import InSea from "../../Assets/Projects/InSea.png";
import v2xImage from "../../Assets/Projects/v2xImage.png";
import signLanguageImage from "../../Assets/Projects/signLanguageImage.png";
import llmImage from "../../Assets/Projects/llmImage.png";
import cicdImage from "../../Assets/Projects/jenkins_cicd.png";
import serverImage from "../../Assets/Projects/serverImage.png";
import uPCImage from "../../Assets/Projects/uPCImage.png";
import fuzzImage from "../../Assets/Projects/fuzzImage.png";

// CheckTime 상세 팝업 내용
const CheckTimeDetail = () => (
  <div className="modal-detail-body">

    <section className="modal-section">
      <h3 className="modal-section-title">📌 프로젝트 개요</h3>
      <p>
        인기 콘서트 티켓팅이나 대학 수강신청에서 <strong>몇 초 차이로 성패가 갈리는</strong> 상황에서,
        대부분의 사용자는 브라우저 로컬 시간을 기준으로 판단하여 실제 서버 오픈 시간과 오차가 발생합니다.
        CheckTime은 <strong>NTP 기반 서버 시간 동기화</strong>, <strong>RTT 측정을 통한 네트워크 지연 보정</strong>,
        <strong> 최적 새로고침 타이밍 계산</strong>을 핵심 기능으로 제공하는 웹 서비스입니다.
      </p>
    </section>

    <section className="modal-section">
      <h3 className="modal-section-title">🛠 기술 스택</h3>
      <div className="modal-tech-grid">
        <div className="modal-tech-group">
          <span className="modal-tech-label">Frontend</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-blue">Next.js</span>
            <span className="modal-tag tag-blue">TypeScript</span>
          </div>
        </div>
        <div className="modal-tech-group">
          <span className="modal-tech-label">Backend</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-green">Node.js v22</span>
            <span className="modal-tag tag-green">Express</span>
            <span className="modal-tag tag-green">JWT</span>
          </div>
        </div>
        <div className="modal-tech-group">
          <span className="modal-tech-label">Database</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-blue">PostgreSQL 17</span>
          </div>
        </div>
        <div className="modal-tech-group">
          <span className="modal-tech-label">핵심 기술</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-orange">NTP</span>
            <span className="modal-tag tag-orange">Puppeteer</span>
            <span className="modal-tag tag-orange">Cheerio</span>
            <span className="modal-tag tag-orange">Railway</span>
          </div>
        </div>
      </div>
    </section>

    <section className="modal-section">
      <h3 className="modal-section-title">⚙️ 주요 기능 및 기술</h3>
      <div className="modal-features-grid">
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🕐</span>
          <div>
            <strong>NTP 서버 시간 동기화</strong>
            <p>pool.ntp.org 등 3개 서버에 RTT 다중 측정. 크리스티안 알고리즘으로 편도 지연 계산. Web Workers로 백그라운드 자동 재동기화.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">⏱️</span>
          <div>
            <strong>최적 새로고침 타이밍 계산</strong>
            <p>RTT · 네트워크 상태 · 서버 부하 · 과거 성공률을 종합한 동적 알고리즘. "4.5초 전 새로고침" 등 정밀 타이밍 안내.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🔍</span>
          <div>
            <strong>사이트 자동 URL 발견</strong>
            <p>Levenshtein 유사도 검사 후 미등록 사이트는 4단계 자동 발견 (대학 API → 도메인 패턴 → 네이버 스크래핑). 결과를 DB에 자동 등록.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🏆</span>
          <div>
            <strong>인기 사이트 랭킹</strong>
            <p>실시간 / 일간 / 주간 / 전체 기간별 클릭 집계. 대학·티켓팅 카테고리별 조회. WebSocket 기반 실시간 업데이트.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🤖</span>
          <div>
            <strong>매크로 예약 실행</strong>
            <p>특정 시각에 URL 자동 요청(refresh/get/post/form). 크론잡 기반 예약 실행 및 실행 이력 관리.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">⚡</span>
          <div>
            <strong>반응속도 측정 & 랭킹</strong>
            <p>Performance API 기반 클릭 반응속도 측정. 전체 순위 / 내 순위 / TOP 10 조회. 티켓팅 전 훈련 도구로 활용.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="modal-section">
      <h3 className="modal-section-title">👩‍💻 담당 역할 (BE)</h3>
      <ul className="modal-role-list">
        <li>NTP 연동 서버 시간 동기화 및 RTT 기반 네트워크 지연 보정 알고리즘 구현</li>
        <li>동적 적응형 최적 새로고침 인터벌 계산 API 설계 및 구현</li>
        <li>Levenshtein Distance 기반 유사도 검색 + SiteDiscoveryService 4단계 자동 발견 로직 구현</li>
        <li>매크로 예약 실행 시스템 (크론잡, 실행 이력, 모니터링) 구현</li>
        <li>인기 사이트 기간별 집계 API 및 북마크 기능 구현</li>
        <li>PostgreSQL DB 설계 (10개 테이블) 및 Railway 배포</li>
      </ul>
    </section>

    <section className="modal-section">
      <h3 className="modal-section-title">🔥 주요 트러블슈팅</h3>
      <div className="modal-trouble-list">
        <div className="modal-trouble-item">
          <span className="modal-trouble-badge">RTT 정확도</span>
          <p>단일 측정의 오차를 줄이기 위해 3회 다중 샘플링 후 중앙값 채택. 네트워크 지터(jitter) 감지 로직 추가.</p>
        </div>
        <div className="modal-trouble-item">
          <span className="modal-trouble-badge">URL 자동 발견</span>
          <p>한글 검색어("숭실대" 등)의 낮은 인식률 문제를 hipolabs 대학 API + 도메인 패턴 + 네이버 스크래핑 3단계 폴백 전략으로 보완.</p>
        </div>
        <div className="modal-trouble-item">
          <span className="modal-trouble-badge">크론잡 타이밍</span>
          <p>분 단위 크론잡과 예약 시간 불일치 문제를 수동 트리거 API 제공으로 보완. 35초 경과 시 자동 수동 실행 유도.</p>
        </div>
      </div>
    </section>

  </div>
);

// CI/CD 상세 팝업 내용
const CICDDetail = () => (
  <div className="modal-detail-body">

    <section className="modal-section">
      <h3 className="modal-section-title">📌 프로젝트 개요</h3>
      <p>
        Ubuntu 홈서버 환경에서 Kubernetes(K3s) 기반 CI/CD 파이프라인을
        직접 설계하고 구축한 DevOps 실습 프로젝트입니다.
        <strong> Jenkins → SonarQube → Harbor → ArgoCD</strong>로 이어지는
        온프레미스 엔터프라이즈 수준의 DevOps 아키텍처를 재현하였으며,
        Blue/Green 무중단 배포와 Prometheus + Grafana 모니터링까지 구성했습니다.
      </p>
    </section>

    <section className="modal-section">
      <h3 className="modal-section-title">🛠 기술 스택</h3>
      <div className="modal-tech-grid">
        <div className="modal-tech-group">
          <span className="modal-tech-label">Application</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-green">Spring Boot 4.0.2</span>
            <span className="modal-tag tag-green">Java 17</span>
            <span className="modal-tag tag-green">Gradle</span>
            <span className="modal-tag tag-green">MariaDB 11</span>
          </div>
        </div>
        <div className="modal-tech-group">
          <span className="modal-tech-label">Infra / K8s</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-blue">K3s</span>
            <span className="modal-tag tag-blue">Docker</span>
            <span className="modal-tag tag-blue">Helm 3</span>
            <span className="modal-tag tag-blue">Traefik</span>
          </div>
        </div>
        <div className="modal-tech-group">
          <span className="modal-tech-label">CI/CD</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-orange">Jenkins</span>
            <span className="modal-tag tag-orange">SonarQube</span>
            <span className="modal-tag tag-orange">Harbor</span>
            <span className="modal-tag tag-orange">ArgoCD</span>
          </div>
        </div>
        <div className="modal-tech-group">
          <span className="modal-tech-label">Monitoring</span>
          <div className="modal-tech-tags">
            <span className="modal-tag tag-purple">Prometheus</span>
            <span className="modal-tag tag-purple">Grafana</span>
          </div>
        </div>
      </div>
    </section>

    <section className="modal-section">
      <h3 className="modal-section-title">⚙️ 주요 기능</h3>
      <div className="modal-features-grid">
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🔄</span>
          <div>
            <strong>GitOps 기반 자동 배포</strong>
            <p>Git을 Single Source of Truth로 사용. ArgoCD가 GitOps 레포 변경을 감지하여 자동 배포. git revert만으로 즉시 롤백 가능.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🔵</span>
          <div>
            <strong>Blue/Green 무중단 배포</strong>
            <p>두 개의 동일 환경을 항상 유지. activeColor 값 변경만으로 트래픽 즉시 전환. 문제 발생 시 1분 이내 롤백 가능.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🔍</span>
          <div>
            <strong>코드 품질 자동 검사</strong>
            <p>모든 빌드마다 SonarQube 정적 분석 수행. 버그·취약점·코드 스멜 자동 검출. Quality Gate 통과 필수.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🐳</span>
          <div>
            <strong>Private Container Registry</strong>
            <p>Harbor로 Private Registry 구축. 이미지 취약점 스캔 및 접근 제어. Jenkins에서 빌드 후 자동 푸시.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">🧪</span>
          <div>
            <strong>Testcontainers CI 테스트</strong>
            <p>Testcontainers 기반 통합 테스트. 실제 DB 환경에서 테스트 수행. CI 파이프라인에 자동 통합.</p>
          </div>
        </div>
        <div className="modal-feature-card">
          <span className="modal-feature-icon">📊</span>
          <div>
            <strong>실시간 모니터링</strong>
            <p>Prometheus로 JVM·HTTP·DB 메트릭 수집. Grafana 대시보드로 시각화. Spring Boot Actuator 통합.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="modal-section">
      <h3 className="modal-section-title">🏗 CI/CD 파이프라인 흐름</h3>
      <ul className="modal-role-list">
        <li>코드 Push → GitHub Webhook → Jenkins 빌드 트리거</li>
        <li>Gradle 빌드 + Testcontainers 통합 테스트 수행</li>
        <li>SonarQube 정적 분석 → Quality Gate 통과 여부 확인</li>
        <li>Docker 이미지 빌드 → Harbor Private Registry에 Push</li>
        <li>GitOps 레포의 이미지 태그 자동 업데이트</li>
        <li>ArgoCD가 변경 감지 → K3s 클러스터에 자동 배포</li>
        <li>Blue/Green 전환으로 무중단 서비스 유지</li>
      </ul>
    </section>

  </div>
);

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
              imgPath={cicdImage}
              isBlog={false}
              title="Home Server 기반 Kubernetes CI/CD Pipeline 구축"
              description="Ubuntu 홈서버 CICD 프로젝트 - <K3s+Jenkins+Harbor+ArgoCD+GitOps> 기반 CI/CD 파이프라인"
              ghLink="https://github.com/kmg22/CICD"
              award="학습공동체 최우수상"
              detail={<CICDDetail />}
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
              award="IT 프로젝트 공모전 장려상"
              detail={<CheckTimeDetail  />}
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
              primaryLabel="Presentation"
              primaryIcon="website"
              title="한국정보보호학회 2025년 하계학술대회(CISC-S'25)"
              description="PHP기반 웹 취약점 탐지를 위한 Fuzzing 동향 및 향후 연구"
              ghLink="https://www.canva.com/design/DAGpeZCdoZo/8aWsgdyX8w5oQBKRSrnKFw/edit?utm_content=DAGpeZCdoZo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              downloadLink={`${process.env.PUBLIC_URL}/CISC-S_25_paper_144.pdf`}
              award="CISC-S'25 논문 투고"
              detail={
                <div className="modal-detail-body">
                  <section className="modal-section">
                    <h3 className="modal-section-title">논문 요약</h3>
                    <p>
                      이 논문은 PHP 기반 웹 애플리케이션의 취약점 탐지를 위해 제안된
                      <strong> Phuzz, Atropos, FuzzCache</strong>를 비교 분석한
                      연구입니다. 세 도구가 각각 병렬 처리, 상태 스냅샷, 캐시 최적화를
                      통해 탐지 효율을 높였지만, 입력 생성 방식과 상태 처리 측면에서
                      구조적인 한계가 있음을 정리한 논문입니다.
                    </p>
                  </section>
                  <section className="modal-section">
                    <h3 className="modal-section-title">도구별 비교 분석</h3>
                    <div className="fuzzer-compare-list">
                      <div className="fuzzer-compare-card">
                        <h4 className="fuzzer-compare-name">Phuzz</h4>
                        <p className="fuzzer-compare-desc">
                          HAR 기반 시드와 특수 페이로드를 변이해 대규모 엔드포인트를 병렬
                          테스트하고, 후킹 기반 계측으로 서버·클라이언트 취약점을 탐지합니다.
                        </p>
                        <p className="fuzzer-compare-note">
                          단순 변이 중심이라 다단계 상호작용 탐지에 한계가 있고, 후킹 기반
                          계측에 따른 성능 오버헤드와 오탐 가능성이 있습니다.
                        </p>
                      </div>
                      <div className="fuzzer-compare-card">
                        <h4 className="fuzzer-compare-name">Atropos</h4>
                        <p className="fuzzer-compare-desc">
                          키-값 쌍 구조의 입력을 추론하고 NYX 기반 스냅샷으로 시스템 상태를
                          빠르게 복원해, 상태 의존적인 서버 취약점 탐지에 강점을 보입니다.
                        </p>
                        <p className="fuzzer-compare-note">
                          입력 구조 추론과 심층 분석은 강점이지만, 시스템 설계와 구현이
                          복잡하고 자원 소모가 커 경량 환경에는 부적합합니다.
                        </p>
                      </div>
                      <div className="fuzzer-compare-card">
                        <h4 className="fuzzer-compare-name">FuzzCache</h4>
                        <p className="fuzzer-compare-desc">
                          독립 Fuzzer가 아니라 보조 도구로서 데이터베이스·네트워크 요청을
                          캐싱해 처리량을 높이며, 기존 웹 퍼저의 성능 최적화를 지원합니다.
                        </p>
                        <p className="fuzzer-compare-note">
                          처리량 향상에는 효과적이지만 테이블 단위 캐싱으로 불필요한 데이터까지
                          메모리에 적재될 수 있어 정확도와 효율 측면의 한계가 있습니다.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              }
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
