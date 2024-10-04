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
          <p className="desc">
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </p>
          <p className="desc">
            Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis
            unde aliquid excepturi laudantium? Illo architecto aliquam velit
            illo magnam neque perferendis sint Incidunt eius ipsa inventore
            labore eos velit. Minus hic magni reiciendis necessitatibus ex
            Quidem officia deleniti accusamus obcaecati dolores. Porro culpa
            quibusdam impedit porro praesentium excepturi. Alias ab consequatur?
          </p>
        </div>
        <div className="right">
          <h3 className="title">Personal Information</h3>
          <ul>
            <li className="r_item">
              <span>Name</span>
              <span>:</span>
              <span> Philip Watson</span>
            </li>
            <li className="r_item">
              <span>Age</span>
              <span>:</span>
              <span>26</span>
            </li>
            <li className="r_item">
              <span>Residence</span>
              <span>:</span>
              <span>New York, USA</span>
            </li>
            <li className="r_item">
              <span>Address</span>
              <span>:</span>
              <span>123 Lorem Ipsum</span>
            </li>
            <li className="r_item">
              <span>Email</span>
              <span>:</span>
              <span>example@example.com</span>
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
          <h2 className="title">job performance</h2>
        </div>
        <div className="cont-wrap">
          <div className="item">
            <span className="icon"></span>
            <h4 className="role_name">Web Development</h4>
            <p className="desc">
              Minus hic magni reiciendis necessitatibus ex Quidem officia
              deleniti accusamus obcaecati dolores. Porro culpa quibusdam
              impedit porro praesentium excepturi. Alias ab consequatur?
            </p>
          </div>
          <div className="item">
            <span className="icon"></span>
            <h4 className="role_name">UX/UI Design</h4>
            <p className="desc">
              Minus hic magni reiciendis necessitatibus ex Quidem officia
              deleniti accusamus obcaecati dolores. Porro culpa quibusdam
              impedit porro praesentium excepturi. Alias ab consequatur?
            </p>
          </div>
          <div className="item">
            <span className="icon"></span>
            <h4 className="role_name">Service Planning</h4>
            <p className="desc">
              Minus hic magni reiciendis necessitatibus ex Quidem officia
              deleniti accusamus obcaecati dolores. Porro culpa quibusdam
              impedit porro praesentium excepturi. Alias ab consequatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
