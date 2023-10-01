import React from "react";
import "./staffcard.css";
import { IoCall, IoMailOutline } from "react-icons/io5";

function StaffCard(props: any) {
  return (
    <div className="staff-card-container">
      <div className="image-wrapper">
        <div
          className="image-cover"
          style={{
            backgroundImage: `url(${props.data.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "contain",
          }}
        ></div>
      </div>
      <div className="staff-details">
        <div className="name">{props.data.name}</div>
        <div className="designation">{props.data.designation}</div>
        {props.data.extension.length > 1 && (
          <div className="phno">
            <div className="icon">
              <IoCall />
            </div>
            <div className="text">{props.data.extension}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StaffCard;
