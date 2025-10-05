import "./personaldetails.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import {
  DataObject,
  QualificationDetail,
} from "../../../pages/public/Departments/common/StaffPage/StaffPage";

interface PDProps {
  personalData: DataObject;
  qualData: QualificationDetail[];
}

function PersonalDetails({ personalData, qualData }: PDProps) {
  console.log(qualData);

  return (
    personalData && (
      <div className="inner-box-content page-content">
        <div className="image-name-wrapper">
          <div className="image">
            <img
              crossOrigin="anonymous"
              className="img-item"
              src={personalData.image}
            />
          </div>
          <div className="name">
            {personalData.prefix}
            {personalData.name}
          </div>
        </div>

        <div className="designation-contact-wrapper">
          <div className="staff-name-container">
            <div className="usertitle">{personalData.title}</div>
          </div>

          <div className="dept">Department of {personalData.department}</div>
          <div className="uni">Anna Universty</div>

          <div className="contact">
            {personalData.phoneNo.length > 0 &&
              personalData.phoneNo.map(
                (item, index) =>
                  item && (
                    <div key={`${item}${index}`} className="phno-container">
                      <div className="phone-icon">
                        <BsFillTelephoneFill />
                      </div>
                      <div className="phone-number">{item}</div>
                    </div>
                  )
              )}
            {personalData.email.length > 0 &&
              personalData.email.map((item, index) => (
                <div key={`${item}${index}`} className="email-container">
                  <div className="email-icon">
                    <AiOutlineMail />
                  </div>
                  <div className="email-id">{item}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="aoi-container">
          <div className="aoi-title">
            {personalData.areasOfInterest.length > 0 && "Areas of Interest:"}
          </div>
          <div className="aoi-content">
            {personalData.areasOfInterest.length > 0 &&
              personalData.areasOfInterest.map((item, index) => (
                <div key={`${item}${index}`} className="aoi-item">
                  {item && "> " + item}
                </div>
              ))}
          </div>
        </div>

        <div className="educational-inPersonal-container">
          <div className="edu-title">Highest Qualification:</div>
          <div className="educational-body">

            <div className="program">{qualData[0].program}</div>
            <div className="course">{qualData[0].course}</div>
            <div className="uni">{qualData[0].university}</div>
          </div>
        </div>
      </div>
    )
  );
}

export default PersonalDetails;
