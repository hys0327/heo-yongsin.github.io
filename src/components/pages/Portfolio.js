import React, { useState, useEffect } from "react";
import NewWindowPortal from "../common/NewWindowPortal"; // 새 창을 띄우는 포탈 컴포넌트
// 실제 프로젝트의 컴포넌트를 import
import KKST from "../../portfolio-work/responsive/project-A/KKST";
import AppNetflix from "../../portfolio-work/responsive/project-B/AppNetflix";
import "../../styles/scss/responsive_portfolio.scss";

const Portfolio = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [showMobileView, setShowMobileView] = useState(false);
  const [showDesktopView, setShowDesktopView] = useState(false);
  const [filter, setFilter] = useState("all");

  // 창을 닫을 때 상태를 리셋하는 함수
  const handleWindowClose = () => {
    setShowMobileView(false);
    setShowDesktopView(false);
  };

  // 새 창에 띄울 작업물 결정 (Mobile View)
  const renderMobileComponent = () => {
    switch (selectedWork) {
      case "KKST":
        return <KKST viewType="mobile" />;
      case "Netflix":
        return <AppNetflix viewType="mobile" />;
      default:
        return null;
    }
  };

  // 새 창에 띄울 작업물 결정 (Desktop View)
  const renderDesktopComponent = () => {
    switch (selectedWork) {
      case "KKST":
        return <KKST viewType="desktop" />;
      case "Netflix":
        return <AppNetflix viewType="desktop" />;
      default:
        return null;
    }
  };

  const projects = [
    {
      id: "KKST",
      type: "personal",
      label: "KKST 화면 개선",
      description: [
        "지그재그, 무신사등의 타사 제품을 벤치마킹하여 리디자인 및 기능을 접목한 프로젝트입니다.",
        "지그재그의 상품 구매 팝업, 무신사의 구매 내역 선택 기능 등을 적용하여 사용성을 높이고자 했습니다.",
      ],
      stack: "HTML, CSS, SCSS, JavaScript, React, Redux",
    },
    {
      id: "Netflix",
      type: "personal",
      label: "Netflix 리디자인",
      description: [
        "세로로 이어지는 무한 스크롤 방식은 콘텐츠가 화면 하단에 배치될수록 사용자에게 불편함을 초래할 수 있습니다.",
        "또한, 화면의 명확한 섹션 구분이 없어, 가독성이 떨어진다고 판단하였습니다.",
      ],
      stack: "HTML, CSS, SCSS, JavaScript, React, Redux",
    },
    {
      id: "DocuGuard",
      type: "collaborative",
      label: "DocuGuard",
      description: [
        "2023.11 ~ 2023.05",
        // "전자문서의 민감정보와 일반정보를 식별하고, 문서 뷰어를 통해 식별된 내용을 편집하는 문서뷰어 솔루션 프로젝트",
        "로그인, 문서 관리, 사용자 관리, 문서 뷰어 편집 등의 화면을 react 프로젝트로 개발",
      ],
      stack: "HTML, CSS, SCSS, JavaScript, React, Redux",
      images: [
        "DocuGuard1",
        "DocuGuard2",
        "DocuGuard3",
        "DocuGuard4",
        "DocuGuard5",
        "DocuGuard6",
        "DocuGuard7",
      ],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  console.log("filteredProjects", filteredProjects);

  const [currentSlide, setCurrentSlide] = useState({});

  // 각 프로젝트의 첫 번째 이미지 인덱스 설정
  const initializeSlides = () => {
    const initialSlides = {};
    projects.forEach((project) => {
      if (project.images && project.images.length > 0) {
        initialSlides[project.id] = 0; // 첫 번째 이미지 인덱스
      }
    });
    setCurrentSlide(initialSlides);
  };

  // 컴포넌트가 마운트될 때 초기 상태 설정
  useEffect(() => {
    initializeSlides();
  }, []);

  const prevSlide = (projectId) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [projectId]:
        prev[projectId] === 0
          ? projects.find((p) => p.id === projectId).images.length - 1
          : prev[projectId] - 1,
    }));
  };

  const nextSlide = (projectId) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] + 1) %
        projects.find((p) => p.id === projectId).images.length,
    }));
  };

  return (
    <div className="portfolio-container">
      <div className="heading">
        <h2>My Work</h2>
        <span className="icon"></span>
      </div>
      <div className="menu">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          전체 ({projects.length})
        </button>
        <button
          className={filter === "personal" ? "active" : ""}
          onClick={() => setFilter("personal")}
        >
          개인 프로젝트 ({projects.filter((p) => p.type === "personal").length})
        </button>
        <button
          className={filter === "collaborative" ? "active" : ""}
          onClick={() => setFilter("collaborative")}
        >
          참여 프로젝트 (
          {projects.filter((p) => p.type === "collaborative").length})
        </button>
      </div>
      {filteredProjects.map((project) => (
        <div className="work-item" key={project.id}>
          <div className="left">
            {project.type === "collaborative" ? (
              <div className="slider-container">
                <div className="img-wrap">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className={`img ${project.id}${index + 1} ${
                        currentSlide[project.id] === index ? "active" : ""
                      }`}
                    ></div>
                  ))}
                </div>
                <button
                  // className="prev-btn"
                  className={`prev-btn ${
                    currentSlide[project.id] === 0 && "disabled"
                  }`}
                  onClick={() => prevSlide(project.id)}
                >
                  <span className="icon icon_prev"></span>
                </button>
                <button
                  className={`next-btn ${
                    currentSlide[project.id] ===
                      projects.find((p) => p.id === project.id).images.length -
                        1 && "disabled"
                  }`}
                  onClick={() => nextSlide(project.id)}
                >
                  <span className="icon icon_next"></span>
                </button>
              </div>
            ) : (
              <div className={`img ${project.id}`}></div>
            )}
          </div>
          <div className="right">
            <div className="project-info">
              <div className="title-wrap">
                <span className="text">프로젝트 명</span>
                <span className="text">:</span>
                <span className="text">{project.label}</span>
              </div>
              <div className="category">
                <span className="text">프로젝트 구분</span>
                <span className="text">:</span>
                <span className="text">
                  {project.type === "personal"
                    ? "개인 프로젝트"
                    : "참여 프로젝트"}
                </span>
              </div>
              <div className="desc">
                <h4 className="title">프로젝트 내용</h4>
                <div className="text-wrap">
                  <p className="text">
                    {project.description.map((line, index) => (
                      <p key={index} className="text">
                        {line}
                      </p>
                    ))}
                  </p>
                </div>
              </div>
              <div className="skill">
                <h4 className="title">사용 스택</h4>
                <p className="text">{project.stack}</p>
              </div>
            </div>
            {project.type !== "collaborative" && (
              <div className="submenu">
                <button
                  className="submenu-btn"
                  onClick={() => {
                    setSelectedWork(project.id);
                    setShowMobileView(true);
                  }}
                >
                  Mobile View
                </button>
                <button
                  className="submenu-btn"
                  onClick={() => {
                    if (window.innerWidth <= 932) {
                      alert("데스크탑 환경에서만 가능합니다.");
                    } else {
                      setSelectedWork(project.id);
                      setShowDesktopView(true);
                    }
                  }}
                >
                  Desktop View
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      {/* MobileView를 새 창에 띄우기 */}
      {showMobileView && (
        <NewWindowPortal
          title={`${selectedWork} Mobile View`}
          width={430}
          height={932}
          onClose={handleWindowClose} // 창을 닫을 때 상태 초기화
          selectedWork={selectedWork}
        >
          {renderMobileComponent()}
        </NewWindowPortal>
      )}

      {/* DesktopView를 새 창에 띄우기 */}
      {showDesktopView && (
        <NewWindowPortal
          title={`${selectedWork} Desktop View`}
          width={1920}
          height={1080}
          onClose={handleWindowClose} // 창을 닫을 때 상태 초기화
          selectedWork={selectedWork}
        >
          {renderDesktopComponent()}
        </NewWindowPortal>
      )}
    </div>
  );
};

export default Portfolio;
