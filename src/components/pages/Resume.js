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
              <h3 className="title">EXPERIENCE</h3>
            </div>
            <ul className="experience">
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4>Lead UI Designer</h4>
                  <h5>Big Design Company, NY, USA</h5>
                  <p className="info">
                    Sit cupiditate praesentium ex esse nulla Facere fuga
                    perspiciatis eveniet provident neque Ea ratione non minus
                    temporibus ipsum Sunt minima
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
                  <h4>Lead UI Designer</h4>
                  <h5>Big Design Company, NY, USA</h5>
                  <p className="info">
                    Sit cupiditate praesentium ex esse nulla Facere fuga
                    perspiciatis eveniet provident neque Ea ratione non minus
                    temporibus ipsum Sunt minima
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
                  <h4>Lead UI Designer</h4>
                  <h5>Big Design Company, NY, USA</h5>
                  <p className="info">
                    Sit cupiditate praesentium ex esse nulla Facere fuga
                    perspiciatis eveniet provident neque Ea ratione non minus
                    temporibus ipsum Sunt minima
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
                  <h4>Lead UI Designer</h4>
                  <h5>Big Design Company, NY, USA</h5>
                  <p className="info">
                    Sit cupiditate praesentium ex esse nulla Facere fuga
                    perspiciatis eveniet provident neque Ea ratione non minus
                    temporibus ipsum Sunt minima
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
            <SkillBar skill="POWERPOINT" percentage={55} />
            <SkillBar skill="PHOTOSHOP" percentage={40} />
            <SkillBar skill="FIGMA" percentage={85} />
          </div>
          <div className="right">
            <div className="title_wrap">
              <h3 className="title">Coding Skill</h3>
            </div>
            <SkillBar skill="HTML" percentage={90} />
            <SkillBar skill="CSS / SCSS" percentage={95} />
            <SkillBar skill="JavaScript / j-Query" percentage={70} />
            <SkillBar skill="REACT / REDUX" percentage={60} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
