import React, { useEffect } from "react";
import Header from "../../../components/general/Header/Header";
import Footer from "../../../components/general/Footer/Footer";
import "./officestaff.css";

import tom from "../../../assets/Faculty/DeanOffice/tom.jpg";
import drmm from "../../../assets/Faculty/DeanOffice/MrMMaheswaran.png";
import StaffCard from "./StaffCard";

import { officeAdministration, financeSection, studentSection } from "./details";

function OfficeStaff() {

  const officeStaffData = [
    {
      img: drmm,
      name: "Mr. M. Maheswaran",
      designation: "Deputy Registrar",
      email: "tom@gmail.com",
      phno: "044-22516301",
    },
  ];
  return (
    <div className="office-staff-container">

      <div className="section-title">Admin Section</div>
      <div className="staff-card-wrapper">
        {officeAdministration.map((item, index) => {
          return <StaffCard key={`${item}${index}`} data={item} />;
        })}
      </div>

      <div className="section-title">Finance Section</div>
      <div className="staff-card-wrapper">
        {financeSection.map((item, index) => {
          return <StaffCard key={`${item}${index}`} data={item} />;
        })}
      </div>

      <div className="section-title">Student Section</div>
      <div className="staff-card-wrapper">
        {studentSection.map((item, index) => {
          return <StaffCard key={`${item}${index}`} data={item} />;
        })}
      </div>


    </div>
  );
}

export default OfficeStaff;
