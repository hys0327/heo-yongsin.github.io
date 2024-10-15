import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

const NewWindowPortal = ({ children, title, width, height, onClose }) => {
  const newWindow = useRef(null); // useRef로 창을 관리 (상태가 아님)

  useEffect(() => {
    // 새 창 열기
    newWindow.current = window.open(
      "",
      "_blank",
      `width=${width},height=${height},toolbar=no,menubar=no,scrollbars=no,resizable=no`
    );

    // 새 창의 기본 HTML 작성
    const doc = newWindow.current.document;
    doc.write(`
      <!DOCTYPE html>
      <html lang="ko">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
          <link rel="stylesheet" href="${process.env.PUBLIC_URL}/styles/reset.css" />
          <link rel="stylesheet" href="${process.env.PUBLIC_URL}/styles/kkst.css" />
          <link rel="stylesheet" href="${process.env.PUBLIC_URL}/styles/responsive_kkst.css" />
        </head>
        <body>
          <div id="project"></div>
        </body>
      </html>
    `);
    doc.close();

    // React 컴포넌트를 새 창에 렌더링
    const container = doc.getElementById("project");
    const root = createRoot(container);
    root.render(children);

    // 새 창이 닫힐 때 정리 작업 수행
    const cleanup = () => {
      root.unmount(); // 컴포넌트 언마운트
      if (newWindow.current) {
        newWindow.current.close(); // 새 창 닫기
      }
      if (onClose) {
        onClose(); // 창이 닫힐 때 부모 컴포넌트에 알림
      }
    };

    newWindow.current.addEventListener("beforeunload", cleanup);

    // useEffect가 종료될 때 창을 닫고 정리 작업을 수행
    return () => {
      newWindow.current.removeEventListener("beforeunload", cleanup);
      cleanup();
    };
  }, [children, title, width, height, onClose]); // 창을 한 번만 열고 관리

  return null;
};

export default NewWindowPortal;
