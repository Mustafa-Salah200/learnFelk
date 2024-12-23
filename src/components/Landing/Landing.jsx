import image from "./../../assets/landing.png";
import './Landing.css'
const Landing = () => {
  return (
    <section className="landing-container">
    <div className="landing">

      <div className="left">
        <h1>Unlock Your <span>Potential</span> Online Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos
          tempore dicta voluptatem sequi optio dolores praesentium sint rerum
          itaque.
        </p>
        <button className="btn-primary">Explore Our Courses</button>
      </div>
      <div className="right">
        <img src={image} alt="" />
      </div>
    </div>
    </section>

  );
};

export default Landing;
