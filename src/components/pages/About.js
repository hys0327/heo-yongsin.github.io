//rafce
import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="heading">
        <h2>About Me.</h2>
        <span className="icon"></span>
      </div>
      <div className="cont-about">
        <div className="left">
          <h3 className="title">Publishing & Frontend Developer</h3>
          <p className="desc intro">
            안녕하세요! 저는 프론트엔드 개발자로 활동하고 있는 허용신입니다.
          </p>
          <p className="desc">
            웹 개발 분야에서 약 2년간 경험을 쌓으며, 항상 사용자에게 더 나은
            경험을 제공하는 것을 목표로 하고 있습니다.
          </p>
          <p className="desc">
            특히, 다양한 기기와 화면 크기에 맞춰 최적화된 반응형 웹을 개발하는
            데 큰 관심이 있습니다.
          </p>
          <p className="desc">
            저의 목표는 언제나 사용자가 만족할 수 있는 서비스와 화면을 만드는
            것이며, 이를 위해 지속적으로 성장하고 도전해 나가고 있습니다.
          </p>
        </div>
        <div className="right">
          <h3 className="title">Personal Information</h3>
          <ul>
            <li className="r_item">
              <span>Name</span>
              <span>:</span>
              <span>허용신</span>
            </li>
            <li className="r_item">
              <span>Age</span>
              <span>:</span>
              <span>30</span>
            </li>
            <li className="r_item">
              <span>Residence</span>
              <span>:</span>
              <span>서울</span>
            </li>
            <li className="r_item">
              <span>Email</span>
              <span>:</span>
              <span>dbtlawleh@gmail.com</span>
            </li>
            <li className="r_item">
              <span>Phone</span>
              <span>:</span>
              <span>010-5143-3541</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="job-about">
        <div className="title_wrap">
          <h2 className="title">Job Experience</h2>
        </div>
        <div className="cont-wrap">
          <div className="item">
            <span className="icon"></span>
            <h4 className="role_name">Web Development</h4>
            <p className="desc">DMS 솔루션, 퍼블리싱 및 화면 개발</p>
            <p className="desc">
              전자문서 비식별화 솔루션, 퍼블리싱 및 화면 개발
            </p>
          </div>
          <div className="item">
            <span className="icon"></span>
            <h4 className="role_name">UX/UI Design</h4>
            <p className="desc">
              DMS 솔루션, 와이어프레임 및 프로토타이핑 작성
            </p>
            <p className="desc">문서 뷰어 솔루션, UX/UI 디자인</p>
            <p className="desc">전자문서 비식별화 솔루션, UX/UI 디자인</p>
          </div>
          <div className="item">
            <span className="icon"></span>
            <h4 className="role_name">Service Planning</h4>
            <p className="desc">SaaS 제품 서비스 기획 및 운영</p>
            <p className="desc">전자문서 비식별화 솔루션, 화면설계서 작성</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
