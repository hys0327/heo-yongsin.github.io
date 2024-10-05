import React, { useState } from "react";
import ReactDOM from "react-dom";
import MobileView from "../../portfolio-work/responsive/project-A/mobileView";
import DesktopView from "../../portfolio-work/responsive/project-A/DesktopView";

const Portfolio = () => {
  const data = [
    { id: 1, category: "Planning Doc", title: "Project Planning Document 1" },
    { id: 2, category: "Planning Doc", title: "Project Planning Document 2" },
    { id: 3, category: "Responsive Publishing", title: "Responsive Page 1" },
    { id: 4, category: "Responsive Publishing", title: "Responsive Page 2" },
    { id: 5, category: "ALL", title: "General Work 1" },
    { id: 6, category: "ALL", title: "General Work 2" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // 카테고리에 따라 작업물을 필터링하는 함수
  const filteredData =
    selectedCategory === "ALL"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  // 새 창을 열고 React 컴포넌트를 렌더링하는 함수
  const openComponentInNewTab = (component, width, height) => {
    const win = window.open(
      "",
      "_blank",
      `width=${width},height=${height},toolbar=no,menubar=no,scrollbars=no,resizable=no`
    );

    // 새 창의 기본 HTML 작성
    win.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Window</title>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    `);
    win.document.close();

    // React 컴포넌트 렌더링
    const renderComponent =
      component === "Mobile" ? <MobileView /> : <DesktopView />;

    ReactDOM.render(renderComponent, win.document.getElementById("app"));
  };

  return (
    <div className="portfolio-container">
      <div className="heading">
        <h2>My Work</h2>
      </div>
      <div className="menu-nav">
        <ul>
          <li className="menu" onClick={() => setSelectedCategory("ALL")}>
            ALL
          </li>
          <li
            className="menu"
            onClick={() => setSelectedCategory("Planning Doc")}
          >
            Planning Doc
          </li>
          <li
            className="menu"
            onClick={() => setSelectedCategory("Responsive Publishing")}
          >
            Responsive Publishing
          </li>
        </ul>
      </div>

      <div className="work-items">
        {filteredData.map((item) => (
          <div key={item.id} className="work-item">
            <h3>{item.title}</h3>

            {/* Responsive Publishing 작업물에만 서브 버튼 표시 */}
            {item.category === "Responsive Publishing" && (
              <div className="submenu">
                <button
                  className="submenu-btn"
                  onClick={() => openComponentInNewTab("Mobile", 400, 920)}
                >
                  Mobile View
                </button>
                <button
                  className="submenu-btn"
                  onClick={() => openComponentInNewTab("Desktop", 1440, 720)}
                >
                  Desktop View
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
