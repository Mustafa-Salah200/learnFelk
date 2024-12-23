/* eslint-disable react/prop-types */
import vector from "../../assets/Vector.png";
import man from "../../assets/man.jpg";
import "./Student.css";
const Student = () => {
  return (
    <div className="student_container">
      <div className="student">
        <h1>
          <span className="mark">
            What Our
            <img src={vector} alt="" />
          </span>
          Students Say
        </h1>

        <div className="student_box">
          <Say
            name="Steve Smith "
            skill="Associate UI/UX Designer"
            description="Great UI/UX course! I learned a lot from the knowledgeable instructors and practical exercises. Highly recommend to anyone looking to improve their design skills."
          />
          <Say
            name="Kautuk Mestri "
            skill="Full Stack Developer"
            description="The Full stack development course was amazing! The instrucotrs were knowledgeable and the course material was comprehensive. I Highly recommend this course to anyone looking to jump start their career in web development."
          />
          <Say
            name="Devika Gada "
            skill="Social Media Strategist"
            description="The digital marketing course exceeded my expectation! The instructors were knowledgeable and the course content was highly relevant. I now feel confident in m ability to create effective digital marketing campaigns."
          />
        </div>
      </div>
    </div>
  );
};

export default Student;

const Say = ({ name, skill, description }) => {
  return (
    <div className="say">
      <div className="top">
        <img src={man} alt="" />
        <div className="info">
          <h2>{name}</h2>
          <p>{skill}</p>
        </div>
      </div>
      <p>&quot;{description}&quot;</p>
    </div>
  );
};
