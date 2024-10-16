import React, { useState } from "react";
import NewWindowPortal from "../common/NewWindowPortal"; // 새 창을 띄우는 포탈 컴포넌트
// 실제 프로젝트의 컴포넌트를 import
import KKST from "../../portfolio-work/responsive/project-A/KKST";
import "../../styles/scss/responsive_portfolio.scss";

const Portfolio = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const [showMobileView, setShowMobileView] = useState(false);
  const [showDesktopView, setShowDesktopView] = useState(false);

  // 창을 닫을 때 상태를 리셋하는 함수
  const handleWindowClose = () => {
    setShowMobileView(false);
    setShowDesktopView(false);
  };

  // 새 창에 띄울 작업물 결정 (Mobile View)
  const renderMobileComponent = () => {
    if (selectedWork === "ProjectA") {
      // Project A의 MobileView 컴포넌트
      return <KKST viewType="mobile" />;
    }
    return null;
  };

  // 새 창에 띄울 작업물 결정 (Desktop View)
  const renderDesktopComponent = () => {
    if (selectedWork === "ProjectA") {
      return <KKST viewType="desktop" />; // Project A의 DesktopView 컴포넌트
    }
    return null;
  };

  // 데스크탑 뷰 접근 제한 로직
  const handleDesktopClick = () => {
    const isMobile = window.innerWidth <= 932; // 모바일 환경 판별 (768px 이하를 모바일로 간주)
    if (isMobile) {
      alert("데스크탑 환경에서만 가능합니다.");
    } else {
      setSelectedWork("ProjectA");
      setShowDesktopView(true);
    }
  };

  return (
    <div className="portfolio-container">
      <div className="heading">
        <h2>My Work</h2>
        <span className="icon"></span>
      </div>
      <div className="work-item">
        <div className="left">
          <div className="img"></div>
        </div>
        <div className="right">
          <div className="project-info">
            <div className="title-wrap">
              <span className="text">프로젝트 명</span>
              <span className="text">:</span>
              <span className="text">KKST 화면 개선</span>
            </div>
            <div className="category">
              <span className="text">프로젝트 구분</span>
              <span className="text">:</span>
              <span className="text">개인 프로젝트</span>
            </div>
            <div className="desc">
              <h4 className="title">프로젝트 내용</h4>
              <div className="text-wrap">
                <p className="text">
                  이 프로젝트는 지그재그, 무신사등의 타사 제품을 벤치마킹하여
                  리디자인 및 기능을 접목한 프로젝트입니다.
                </p>
                <p className="text">
                  지그재그의 상품 구매 팝업, 무신사의 구매 내역 선택 기능 등을
                  적용하여 사용성을 높이고자 했습니다.
                </p>
              </div>
            </div>
            <div className="skill">
              <h4 className="title">사용 스택</h4>
              <p className="text">HTML, CSS, SCSS, JavaScript, React, Redux</p>
            </div>
          </div>
          <div className="submenu">
            <button
              className="submenu-btn"
              onClick={() => {
                setSelectedWork("ProjectA");
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
                  setSelectedWork("ProjectA");
                  setShowDesktopView(true);
                }
              }}
            >
              Desktop View
            </button>
          </div>
        </div>
      </div>
      <div className="work-item">
        <div className="left">
          <div className="img"></div>
        </div>
        <div className="right">
          <div className="project-info">
            <div className="title-wrap">
              <span className="text">프로젝트 명</span>
              <span className="text">:</span>
              <span className="text">KKST 화면 개선</span>
            </div>
            <div className="category">
              <span className="text">프로젝트 구분</span>
              <span className="text">:</span>
              <span className="text">개인 프로젝트</span>
            </div>
            <div className="desc">
              <h4 className="title">프로젝트 내용</h4>
              <div className="text-wrap">
                <p className="text">
                  이 프로젝트는 지그재그, 무신사등의 타사 제품을 벤치마킹하여
                  리디자인 및 기능을 접목한 프로젝트입니다.
                </p>
                <p className="text">
                  지그재그의 상품 구매 팝업, 무신사의 구매 내역 선택 기능 등을
                  적용하여 사용성을 높이고자 했습니다.
                </p>
              </div>
            </div>
            <div className="skill">
              <h4 className="title">사용 스택</h4>
              <p className="text">HTML, CSS, SCSS, JavaScript, React, Redux</p>
            </div>
          </div>
          <div className="submenu">
            <button
              className="submenu-btn"
              onClick={() => {
                setSelectedWork("ProjectA");
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
                  setSelectedWork("ProjectA");
                  setShowDesktopView(true);
                }
              }}
            >
              Desktop View
            </button>
          </div>
        </div>
      </div>
      <div className="work-item">
        <div className="left">
          <div className="img"></div>
        </div>
        <div className="right">
          <div className="project-info">
            <div className="title-wrap">
              <span className="text">프로젝트 명</span>
              <span className="text">:</span>
              <span className="text">KKST 화면 개선</span>
            </div>
            <div className="category">
              <span className="text">프로젝트 구분</span>
              <span className="text">:</span>
              <span className="text">개인 프로젝트</span>
            </div>
            <div className="desc">
              <h4 className="title">프로젝트 내용</h4>
              <div className="text-wrap">
                <p className="text">
                  이 프로젝트는 지그재그, 무신사등의 타사 제품을 벤치마킹하여
                  리디자인 및 기능을 접목한 프로젝트입니다.
                </p>
                <p className="text">
                  지그재그의 상품 구매 팝업, 무신사의 구매 내역 선택 기능 등을
                  적용하여 사용성을 높이고자 했습니다.
                </p>
              </div>
            </div>
            <div className="skill">
              <h4 className="title">사용 스택</h4>
              <p className="text">HTML, CSS, SCSS, JavaScript, React, Redux</p>
            </div>
          </div>
          <div className="submenu">
            <button
              className="submenu-btn"
              onClick={() => {
                setSelectedWork("ProjectA");
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
                  setSelectedWork("ProjectA");
                  setShowDesktopView(true);
                }
              }}
            >
              Desktop View
            </button>
          </div>
        </div>
      </div>
      <div className="work-item">
        <div className="left">
          <div className="img"></div>
        </div>
        <div className="right">
          <div className="project-info">
            <div className="title-wrap">
              <span className="text">프로젝트 명</span>
              <span className="text">:</span>
              <span className="text">KKST 화면 개선</span>
            </div>
            <div className="category">
              <span className="text">프로젝트 구분</span>
              <span className="text">:</span>
              <span className="text">개인 프로젝트</span>
            </div>
            <div className="desc">
              <h4 className="title">프로젝트 내용</h4>
              <div className="text-wrap">
                <p className="text">
                  이 프로젝트는 지그재그, 무신사등의 타사 제품을 벤치마킹하여
                  리디자인 및 기능을 접목한 프로젝트입니다.
                </p>
                <p className="text">
                  지그재그의 상품 구매 팝업, 무신사의 구매 내역 선택 기능 등을
                  적용하여 사용성을 높이고자 했습니다.
                </p>
              </div>
            </div>
            <div className="skill">
              <h4 className="title">사용 스택</h4>
              <p className="text">HTML, CSS, SCSS, JavaScript, React, Redux</p>
            </div>
          </div>
          <div className="submenu">
            <button
              className="submenu-btn"
              onClick={() => {
                setSelectedWork("ProjectA");
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
                  setSelectedWork("ProjectA");
                  setShowDesktopView(true);
                }
              }}
            >
              Desktop View
            </button>
          </div>
        </div>
      </div>

      {/* MobileView를 새 창에 띄우기 */}
      {showMobileView && (
        <NewWindowPortal
          title={`${selectedWork} Mobile View`}
          width={430}
          height={932}
          onClose={handleWindowClose} // 창을 닫을 때 상태 초기화
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
        >
          {renderDesktopComponent()}
        </NewWindowPortal>
      )}
    </div>
  );
};

export default Portfolio;
