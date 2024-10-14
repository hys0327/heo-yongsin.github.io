//rafce
import React from "react";
import SkillBar from "../common/SkillBar";

const Resume = () => {
  return (
    // resume-bg : 배경덮는 목적
    <div className="resume-bg">
      <div className="resume-container">
        <div className="heading">
          <h2>My Resume</h2>
          <span className="icon"></span>
        </div>
        <div className="cont-resume">
          <div className="left">
            <div className="title_wrap">
              <h3 className="title">CAREER</h3>
            </div>
            <ul className="experience">
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>연구 개발부</h4>
                  <h5>(주) 에스에이티정보</h5>
                  <p className="info">
                    자사 소프트웨어 솔루션 개발 과정에서의 UX/UI 디자인과
                    프로토타이핑부터 웹 개발까지 다양한 업무를 진행한 경험이
                    있습니다.
                  </p>
                </div>
                <div className="year">
                  <span className="to">2024</span>
                  <span className="from">2022</span>
                </div>
              </li>
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>촬영 지원부</h4>
                  <h5>(주) 기발한사람들</h5>
                  <p className="info">
                    영상 제작업체를 대상으로 인력 매칭 서비스와 촬영 기자재 납품
                    등의 서비스를 운영하였으며, 서비스 운영의 영역을 확장하기
                    위해 SaaS 제품을 기획하고 운영한 경험이 있습니다.
                  </p>
                </div>
                <div className="year">
                  <span className="to">2021</span>
                  <span className="from">2019</span>
                </div>
              </li>
            </ul>
          </div>
          {/* 교육 */}
          <div className="right">
            <div className="title_wrap">
              <h3 className="title">EDUCATION</h3>
            </div>
            <ul className="experience">
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>그린컴퓨터 아카데미</h4>
                  <h5>UX/UI 기획 & 퍼블리싱</h5>
                  <p className="info">
                    스케치 도구를 활용한 UX/UI 디자인 기술과 웹 퍼블리싱을 위한
                    HTML, CSS, Javascript 언어를 학습했습니다.
                  </p>
                </div>
                <div className="year">
                  <span className="to">2022</span>
                  <span className="from">2022</span>
                </div>
              </li>
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>청운대학교</h4>
                  <h5>영화학과</h5>
                  <p className="info">
                    카메라 전공으로서, 영상 미디어 제작에 대한 전반적인 지식과
                    카메라 활용 기술을 학습했습니다.
                  </p>
                </div>
                <div className="year">
                  <span className="to">2019</span>
                  <span className="from">2014</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="skill">
          <div className="left">
            <div className="title_wrap">
              <h3 className="title">Planning Skill</h3>
            </div>
            <SkillBar skill="EXCEL" percentage={70} />
            <SkillBar skill="POWERPOINT" percentage={70} />
            <SkillBar skill="PHOTOSHOP" percentage={50} />
            <SkillBar skill="FIGMA" percentage={80} />
          </div>
          <div className="right">
            <div className="title_wrap">
              <h3 className="title">Coding Skill</h3>
            </div>
            <SkillBar skill="HTML" percentage={80} />
            <SkillBar skill="CSS / SCSS" percentage={90} />
            <SkillBar skill="JavaScript / j-Query" percentage={80} />
            <SkillBar skill="REACT / REDUX" percentage={80} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
