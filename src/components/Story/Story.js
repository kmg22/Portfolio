import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Story() {
  return (
    <>
      <Particle />
      <Container fluid className="story-page">
        <Container className="story-shell">
          <section className="story-hero">
            <p className="story-kicker">growth story</p>
            <h1 className="story-title">장애를 겪으며 성장한 기록</h1>
            <p className="story-desc">
              수많은 시행착오 속에서 최선의 해답을 도출하며 인프라와 서비스의 안정성을 구축해왔습니다.
            </p>
          </section>

          <div className="story-timeline">
            <article className="story-item amber">
              <div className="story-dot amber"></div>
              <div className="story-date">
                2025.05 - 10 · 관광데이터 활용 공모전
              </div>
              <div className="story-card amber">
                <span className="story-tag amber">Backend</span>
                <h2 className="story-card-title">
                  API 장애 경험 - 배포/운영 설계의 중요성 인식
                </h2>
                <p className="story-card-body">
                  Spring Boot + PostgreSQL를 기반으로 인천 지역 특화 낚시 정보 플랫폼을 개발했습니다. 
                </p>
                <p className="story-card-body">
                  관광데이터 및 공공데이터, 카카오 로그인과 지도 API를 연동해 기능을 완성하던 중,{" "}
                  <span className="story-highlight">
                    최종 심사를 앞두고 국가정보자원관리원 데이터센터 화재
                  </span>
                  로 핵심 기능들이 정상적으로 동작하지 않았습니다.
                </p>
                <div className="story-flow">
                  <span className="story-flow-step">API 전면 중단</span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">급히 대체 API 적용</span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">
                    수정마다 연동 전체 재점검
                  </span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">배포도 불안정</span>
                </div>
                <p className="story-card-body">
                  기능을 복구하는 과정에서 수정할 때마다 다른 연동 기능까지 다시
                  확인해야 했고 배포 과정 자체도 흔들렸습니다.{" "} 
                </p>
                <p className="story-card-body">
                  <span className="story-emphasis">기능이 동작하는 것</span>과{" "}
                  <span className="story-emphasis">
                    서비스가 중단 없이 운영되는 것
                  </span>
                  이 전혀 다른 문제라는 점을 체감했습니다.
                </p>
                <div className="story-insight amber">
                  이후 <span className="story-inline-highlight">k3s 기반 CI/CD 파이프라인</span>과{" "}
                  <span className="story-inline-highlight">
                    Blue/Green 무중단 배포
                  </span>
                  를 직접 구성하며, 안정성은 배포 직전이 아닌 설계 단계부터
                  고려해야 한다는 기준을 갖게 됐습니다.
                </div>
              </div>
            </article>

            <article className="story-item green">
              <div className="story-dot green"></div>
              <div className="story-date">
                2025.09 - 12 · 홈서버 학습공동체 (최우수상)
              </div>
              <div className="story-card green">
                <span className="story-tag green">Infra</span>
                <h2 className="story-card-title">
                  홈서버 스터디 & 네트워크 흐름 추적을 통한 문제 해결
                </h2>
                <p className="story-card-body">
                  AWS, Railway 등 클라우드 기반 서비스를 사용하며 그 기반이 되는 서버와 네트워크 구조가 실제로 어떻게 동작하는지 직접 확인해보고 싶었습니다.
                </p>
                <p className="story-card-body">
                  FIREBAT N100 미니PC 직접 구매해 
                  <span className="story-highlight"> 홈서버</span>
                  를 구성하고, Ubuntu, SSH, Docker, Nginx 리버스 프록시, 도메인 및
                  HTTPS까지 단계별로 실습했습니다. 같은 고민을 하던 동기들과
                  함께 
                  <span className="story-highlight"> 학습공동체를 운영해 최우수상</span>으로 마무리했습니다.
                </p>
                <p className="story-card-body">
                  이후 프로젝트에 쿠버네티스 환경을 적용해보고자 k3s를 새로 설치했고, 
                  기존 Nginx Proxy Manager 기반 서비스가 갑자기 접속 불가 상태가 되는 문제가 발생했습니다.
                </p>
                <p className="story-card-body">
                  처음에는 K3s와 무관한 문제라고 생각했습니다.
                  그러나 <span className="story-highlight">컨테이너와 백엔드 상태는 정상이나 프록시 로그가 기록되지 않는 비정상적 흐름</span> 확인하게 되었습니다.
                </p>
                <div className="story-flow">
                  <span className="story-flow-step">SSL 인증서 확인</span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">
                    기존 설정값이 아닌 K3s 기본 인증서 반환
                  </span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">요청 가로채기 현상 포착</span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">NAT 규칙 추적</span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">
                    k3s ingress가 80/443 선점
                  </span>
                </div>
                <p className="story-card-body">
                  k3s 설치와 함께 생성된 ingress와 포트 포워딩 규칙이 기존
                  트래픽을 가로채고 있었습니다. 
                </p>
                <p className="story-card-body">
                  포트 구조를 재정리해 두 환경의
                  역할을 분리하고, 요청이 의도한 서비스로 전달되도록
                  수정했습니다.
                </p>
                <div className="story-insight green">
                  새 도구 도입 시 {" "}
                  <span className="story-inline-highlight">
                    기존 구조와의 충돌 가능성
                  </span>
                  을 먼저 점검해야 하고, {" "}
                  <span className="story-inline-highlight">요청 흐름 전체</span>를
                  이해해야 문제를 예방할 수 있다는 점을 배웠습니다.
                </div>
              </div>
            </article>

            <article className="story-item blue">
              <div className="story-dot blue"></div>
              <div className="story-date">
                2026.02 - 06 · 큐시즘 33기 X LG전자 기업연계 프로젝트
              </div>
              <div className="story-card blue">
                <span className="story-tag blue">Backend + Infra</span>
                <h2 className="story-card-title">
                  AI 기능 구현 & 핵심 응답을 지키는 구조 설계
                </h2>
                <p className="story-card-body">
                  LG닷컴 홈페이지 개선 과제에서 제품 후기 AI 요약 기능을
                  구현했습니다. 그 과정에서 요약 기능 자체보다,{" "}
                  <span className="story-highlight">
                    AI 처리가 핵심 서비스를 흔들지 않도록
                  </span>{" "}
                  구조를 설계하는 데 집중했습니다.
                </p>

                <table className="story-info-table">
                  <thead>
                    <tr>
                      <th>문제</th>
                      <th>해결</th>
                      <th>원칙</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AI 응답 지연으로 전체 페이지가 느려짐</td>
                      <td>AI 요약을 별도 API로 분리</td>
                      <td>관심사 분리</td>
                    </tr>
                    <tr>
                      <td>반복 요청마다 AI가 재호출됨</td>
                      <td>TTL 기반 캐시 적용</td>
                      <td>응답 속도</td>
                    </tr>
                    <tr>
                      <td>AI 실패 시 빈 화면이 노출됨</td>
                      <td>평점 기반 정량 요약 fallback</td>
                      <td>서비스 연속성</td>
                    </tr>
                    <tr>
                      <td>동일 요청에 AI가 중복 호출됨</td>
                      <td>동시 요청 1회 처리</td>
                      <td>자원 효율</td>
                    </tr>
                  </tbody>
                </table>

                <p className="story-card-body">
                  배포 환경은 지속 실행이 필요한 도구는 홈서버, 외부 접근이
                  필요한 서비스는 AWS로 분리하는 <span className="story-highlight"> 하이브리드 구조</span>로 설계했습니다.
                  인프라를 서비스 특성에 맞게 역할을
                  나누는 설계가 중요하다는 점을 배웠습니다.
                </p>
                <div className="story-insight blue">
                  <span className="story-inline-highlight">
                    전체 서비스 품질이 흔들리지 않도록 구조를 설계하는 것
                  </span>
                  의 중요성을 배울 수 있었습니다.
                </div>
              </div>
            </article>

            <article className="story-item purple">
              <div className="story-dot purple"></div>
              <div className="story-date">
                2025.09 - 12 · 융합보안프로젝트2
              </div>
              <div className="story-card purple">
                <span className="story-tag purple">Security Research</span>
                <h2 className="story-card-title">
                  LLM의 환각 응답 문제 분석
                </h2>
                <p className="story-card-body">
                  생성형 AI가 실제 존재하지 않는 패키지를 추천하는{" "}
                  <span className="story-highlight">패키지 환각</span> 현상이
                  소프트웨어 공급망 공격의 새로운 진입점이 될 수 있다는 가설에서
                  출발했습니다.
                </p>
                <div className="story-flow">
                  <span className="story-flow-step">
                    질문 유형 / 프롬프트 설계
                  </span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">8개 모델 자동 수집</span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">64만 건 응답 분석</span>
                  <span className="story-flow-arrow">→</span>
                  <span className="story-flow-step">
                    최대 18% 환각 패키지 확인
                  </span>
                </div>
                <p className="story-card-body">
                  Gemini, CodeLlama 등 8개 모델에서 일부 최대 18%의 환각
                  패키지가 생성되는 현상을 확인했습니다. 통제된 범위에서 환각
                  패키지명의 실제 등록 가능성도 점검하며 RDD 공급망 공격에 대한 실증 연구까지 이어갔습니다.
                </p>
                <div className="story-insight purple">
                  이후 AI 응답을 그대로 신뢰하지 않고,{" "}
                  <span className="story-inline-highlight">
                    공식 레지스트리 확인
                  </span>
                  과 <span className="story-inline-highlight">가상환경 분리</span>,
                  fuzzing 및 테스트 커버리지 도구를 실제 프로젝트에 활용해 코드 안정성을 높이는 노력을 했습니다.
                </div>
              </div>
            </article>

            <article className="story-item cyan">
              <div className="story-dot cyan"></div>
              <div className="story-date">2024 - 2026 · 다수 팀 프로젝트</div>
              <div className="story-card cyan">
                <span className="story-tag cyan">Collaboration</span>
                <h2 className="story-card-title">
                  혼선을 줄이는 협업 기준 정립
                </h2>
                <p className="story-card-body">
                  팀 프로젝트에서 역할만 나눈 채 개발을 시작하자 변수명, 응답
                  형식, 브랜치 사용 방식이 제각각이어서 병합 과정에서 불필요한
                  충돌이 반복됐습니다. 이후에는 개발 전에 Git 브랜치 네이밍
                  규칙, 커밋 메시지 형식, PR 작성 방식을 먼저 정리해
                  공유했습니다.
                </p>
                <p className="story-card-body">
                  또한 기능 단위로 도메인 용어를 먼저 합의하고 API 명세를
                  선작성해 프론트엔드와 백엔드가 API 명세서 기준으로 병렬
                  진행할 수 있도록 문서화했습니다. 결과적으로 서로를 기다리는
                  병목 시간이 줄었고 연동 시점의 수정도 크게 감소했습니다.
                </p>
                <div className="story-insight cyan">
                  개발 실력만큼 중요한 것은{" "}
                  <span className="story-inline-highlight">
                    함께 일하는 사람들이 같은 기준 위에서 움직이게 만드는 기준
                  </span>
                  이라는 점을 배웠습니다.
                </div>
              </div>
            </article>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Story;
