import React from "react";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import { useTheme } from "../Themecontext"; // Import the theme context
import "./Testimonial.css";

const Testimonial = () => {
  const { theme } = useTheme(); // Get the current theme (dark or light) from the context

  return (
    <div
      className={`work-section-wrapper ${
        theme === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="work-section-top">
        <br />
        <br />
        <h1 className="primary-heading">What They Are Saying</h1>
        <br />
        <br />
      </div>
      <div className="yert">
        <div className="testimonial-section-bottom">
          <p>
          This tool helped me  change my life in ways I never imagined. It's like having a health coach 24/7. My family and I are now focused on heart health.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar/>
          </div>
          <p>John Doe</p>
        </div>
        <div className="testimonial-section-bottom">
          <p>
          The website is so easy to use! It has given me a clear understanding and guidance on heart health. I finally feel in control of my health.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>Mary Jen</p>
        </div>
        <div className="testimonial-section-bottom">
          <p>
          A platform that changes lives! Risk assessment and appropriate advice helped me reduce my risk of heart disease.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar/>
          </div>
          <p>Charles H</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
