/* eslint-disable react/prop-types */
import "./Courses.css";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import ibm from "../../assets/ibm.svg";
import slack from "../../assets/slack.svg";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
import vector from "../../assets/Vector.png";
import star from "../../assets/star.svg";
import half from "../../assets/half-star.svg";
import folder from "../../assets/folder.svg";

const Courses = () => {
  return (
    <div className="courses">
      <div className="top">
        <h2>
          we collaborate with <span>20+ leading companies</span>
        </h2>
        <div className="logos">
          <img src={google} alt="" />
          <img src={facebook} alt="" />
          <img src={ibm} alt="" />
          <img src={slack} alt="" />
          <h2>Zoom</h2>
        </div>
      </div>
      <h1 className="title">
        <span className="mark">
          Our Online 
          <img src={vector} alt="" />
        </span>
        Courses
      </h1>
      <div className="courses_box">
        <Course image={course1} title="UI/UX Designing Training Course" />
        <Course image={course2} title="Full Stack Development course" />
        <Course image={course3} title="Digital Marketing & E-Commerce" />
      </div>
    </div>
  );
};

export default Courses;

const Course = ({ image, title }) => {
  return (
    <div className="course">
      <img src={image} alt="" />
      <div className="content">
        <h2>{title}</h2>

        <h4>
          <img src={folder} alt="" />
          15 Modules
        </h4>
        <p>4.7
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={half} alt="" />
        </p>
      </div>
    </div>
  );
};
