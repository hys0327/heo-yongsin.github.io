//rafce
import React from "react";
import TypingAnimation from "../common/TypingAnimation";
/* // redux test
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../features/counterSlice"; */

const Home = () => {
  /* // 상태 조회
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  // 상태 변경 확인
  // console.log("현재 값", count); */
  return (
    <div className="home-container">
      <div
        className="home-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          filter: "brightness(0.5)",
          // opacity: "0.5",
        }}
      ></div>
      <div className="banner-content">
        <h1>
          안녕하세요.
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
