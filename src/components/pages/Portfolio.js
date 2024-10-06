import React, { useState } from "react";
import NewWindowPortal from "../common/NewWindowPortal"; // 새 창을 띄우는 포탈 컴포넌트
// 실제 프로젝트의 컴포넌트를 import
import KKST from "../../portfolio-work/responsive/project-A/KKST";
// 만약 다른 프로젝트가 있으면 여기서 추가로 import

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
      return <KKST />;
    }
    return null;
  };

  // 새 창에 띄울 작업물 결정 (Desktop View)
  const renderDesktopComponent = () => {
    if (selectedWork === "ProjectA") {
      return <KKST />; // Project A의 DesktopView 컴포넌트
    }
    return null;
  };

  return (
    <div className="portfolio-container">
      <div className="heading">
        <h2>My Works</h2>
      </div>
      <div className="work-item">
        <h3>Project A</h3>
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
              setSelectedWork("ProjectA");
              setShowDesktopView(true);
            }}
          >
            Desktop View
          </button>
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
          width={1440}
          height={720}
          onClose={handleWindowClose} // 창을 닫을 때 상태 초기화
        >
          {renderDesktopComponent()}
        </NewWindowPortal>
      )}
    </div>
  );
};

export default Portfolio;
