import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <p
      style={{
        fontSize: "28px",
      }}
    >
      저는{" "}
      <span
        style={{
          fontSize: "28px",
          fontWeight: "900",
          display: "inline-block",
          paddingBottom: "6px",
          borderBottom: "2px solid #00A3E1",
        }}
      >
        <TypeAnimation
          sequence={[
            "사용성을 고려하는 화면 개발자입니다.",
            2000,
            "화면 기획이 가능한 화면 개발자입니다.",
            2000,
            "UI 디자인이 가능한 화면 개발자입니다.",
            2000,
          ]}
          wrapper="span"
          speed={180} // 타이핑 속도 증/감
          repeat={Infinity}
        />
      </span>
    </p>
  );
};

export default TypingAnimation;
