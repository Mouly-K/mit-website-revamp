// import React from "react";
// import {  useState } from "react";
import "./mission.css";

export default function Mission() {
  const viewMore = true; // usestate  but change bcz of BTS
  const MissionContent = [
    "Producing students who are intellectually and technically equipped with well defined knowledge, skills and ethics who are creative thinkers, inspiring leaders and contributing citizens",
    "Introducing high quality academic and research programmes and providing extension services in cutting edge technologies",
    "Ensuring a supportive campus climate with dynamic leadership and development opportunities to meet the needs of the students, faculty and staff",
    "Enhancing academic productivity through induction of quality faculty, accelerated graduation, credit banking, augmented continuing education opportunities and adoption of current technology",
    "Sharing the intellectual resources and the infrastructural facilities among the academia from other institutions and among the industrial society, funding agencies and government",
    "Enhancing the collaborative partnership between Industry and Institute for commercializing and transferring the latest technological know-how towards societal development",
    "Setting up a Global University Network Campus that embodies the ideals of an open, democratic and global society catering to the needs of the global community and satisfying cultural, ethnic and racial diversity",
    "Expanding global participation spread across continents with the aid of interactive satellite based education and the usage of digital library",
    "Enriching the national and international character of the University",
    "Ensuring efficient administrative coordination and effective decision making through necessary reforms and by strategically allocating resources",
    "Benchmarking against technologically sound global leaders with a view towards continuous improvement",
  ];
  return (
    <div className="mission-main-card noselect">
      <div className="heading">Mission</div>
      <div className="intro">
        Anna University shall contribute to the educational, economic and social
        development by
      </div>
      <ul
        className="mi-content"
        style={viewMore ? { overflow: "auto", scrollbarColor: "inherit" } : {}}
      >
        {MissionContent.map((item, index: number) => {
          if (!viewMore && index < 4) return <li key={index}>{item}</li>;
          else if (viewMore) return <li key={index}>{item}</li>;
        })}
      </ul>
      <div className={`login-container ${viewMore ? "open" : ""}`}>
        {/* <button
          className="login-button"
          onClick={() => {
            setViewMore(!viewMore);
          }}
        >
          {viewMore ? "View Less" : "View More"}
        </button> */}
      </div>
    </div>
  );
}
