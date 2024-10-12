//rafce
import React from "react";
import TypingAnimation from "../common/TypingAnimation";
import "../../styles/scss/responsive_home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div
        className="home-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "calc(100vh - 68px)",
          filter: "brightness(0.5)",
          // opacity: "0.5",
        }}
      ></div>
      <div className="banner-content">
        <h1>
          <span className="text">안녕하세요.</span>
          <span
            style={{
              fontWeight: "900",
              color: "#00A3E1",
            }}
          >
            허용신입니다.
          </span>
        </h1>
        <TypingAnimation />
      </div>
      {/* <div className="test">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div> */}
    </div>
  );
};

export default Home;
