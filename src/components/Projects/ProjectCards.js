import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsXLg } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  // 모달 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const hasDetail = !!props.detail;

  return (
    <>
      {/* 프로젝트 카드 */}
      <Card
        className="project-card-view"
        onClick={() => hasDetail && setShowModal(true)}
        style={{ cursor: hasDetail ? "pointer" : "default" }}
      >
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {hasDetail && (
            <p className="project-card-detail-hint">🔍 클릭해서 자세히 보기</p>
          )}
          {/* 버튼 클릭은 카드 클릭과 분리 */}
          <div onClick={(e) => e.stopPropagation()}>
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {"\n"}
            {"\n"}
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: "10px" }}
              >
                <CgWebsite /> &nbsp;Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* 모달 팝업 */}
      {showModal && hasDetail && (
        <div
          className="project-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="project-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              className="project-modal-close"
              onClick={() => setShowModal(false)}
            >
              <BsXLg />
            </button>

            {/* 상단 헤더 영역 */}
            <div className="project-modal-header">
              <img
                src={props.imgPath}
                alt={props.title}
                className="project-modal-img"
              />
              <div className="project-modal-title-area">
                <h2 className="project-modal-title">{props.title}</h2>
                <p className="project-modal-desc">{props.description}</p>
                <div className="project-modal-buttons">
                  <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub /> &nbsp;GitHub
                  </Button>
                  {!props.isBlog && props.demoLink && (
                    <Button
                      variant="primary"
                      href={props.demoLink}
                      target="_blank"
                      style={{ marginLeft: "10px" }}
                    >
                      <CgWebsite /> &nbsp;Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* 상세 내용 */}
            <div className="project-modal-content">{props.detail}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCards;