import React, { useState } from "react";
import "./Topics.css";
import {
  topic1,
  topic2,
  topic3,
  topic4,
  topic5,
  topic6,
  bgElement2,
} from "../../assets/images";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(topic1);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(topic1)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(topic2)}>Using the DAW</li>
            <li onMouseEnter={() => setCurrentImage(topic3)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(topic4)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(topic5)}>Mixing Console</li>
            <li onMouseEnter={() => setCurrentImage(topic6)}>Mastering</li>
          </ul>

          <div className="topic-image">
            <img src={currentImage}></img>
          </div>
        </div>
        <img src={bgElement2} className="bg-element-2"></img>
      </div>
    </section>
  );
};

export default Topics;
