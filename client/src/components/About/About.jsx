import React from "react";
import AboutBackground from "../../assets/Aboutme.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./About.css";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-content">
        <div className="about-section-text-container">
          <p className="primary-subheading">About Us</p>
          <h1 className="primary-heading">Transforming Heart Health with AI</h1>
          <strong><p className="primary-text">
            Our app leverages cutting-edge AI technology to analyze ECG data,
            detect anomalies in real-time, and provide actionable insights for
            continuous heart health monitoring. With a focus on accuracy,
            accessibility, and empowerment, we aim to redefine how people
            monitor and care for their heart health.
          </p>
          <p className="primary-text">
            Whether you're at home or on the go, our software helps you stay
            connected to your heart's well-being, providing peace of mind and
            proactive care.
          </p></strong>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </div>
        </div>
        <div className="about-image-container">
          <img
            className="imageabout"
            src={AboutBackground}
            alt="Heart Background"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
