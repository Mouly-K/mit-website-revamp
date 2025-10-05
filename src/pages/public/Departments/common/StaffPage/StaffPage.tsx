import "./staffpage.css";

import PersonalDetails from "../../../../../components/StaffPage/PersonalDetails/PersonalDetails";
import EducationalQualifications from "../../../../../components/StaffPage/EducationalQualification/EducationalQualifications";
import ProfessionalExperience from "../../../../../components/StaffPage/ProfessionalExperience/ProfessionalExperience";
import APIService from "../../../../../api/Service";
import PublicationCard from "../../../../../components/StaffPage/PublicationCard/PublicationCard";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StaffSidebar from "./Sidebar/StaffSidebar";

import { BsFilePerson, BsFillTrophyFill } from "react-icons/bs";
import { FaGraduationCap, FaSuitcase } from "react-icons/fa6";
import { BiSolidReport, BiNetworkChart } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { paperDetails } from "../ResearchPublications/PublicationsPage/PublicationsPage";
import SupervisorCard from "../../../../../components/StaffPage/SupervisorCard/SupervisorCard";

export interface DataObject {
  prefix: string;
  name: string;
  title: string;
  department: string;
  image: string;
  phoneNo: string[];
  email: string[];
  areasOfInterest: string[];
}

export interface QualificationDetail {
  program: string;
  course: string;
  university: string;
}

export interface ProfessionalDetail {
  start: string;
  end: string;
  title: string;
  department: string;
  university: string;
}

function StaffPage() {
  // const [dept, setDept] = useState();
  // const [staffName, setStaffName] = useState();
  // const [staffTitle, setStaff]

  const [personalDetails, setPersonalDetails] = useState<DataObject>();
  const [educationalQualification, setEducationalQualification] =
    useState<QualificationDetail>();
  const [professionalExperience, setProfessionalExperience] =
    useState<ProfessionalDetail>();
  const [papers, setPapers] = useState<paperDetails[]>();

  const moveToElement = (item: string) => {
    const element = document.getElementById(item);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  let username = useParams();

  useEffect(() => {
    const deconstructProps = (username: string) => {
      let arr = username.split("#");
      if (arr.length === 2) {
        moveToElement(arr[1]);
      }
      return arr[0]?.split("_").pop();
    };

    const staffId = deconstructProps(username.id);
    const fetchQualifications = async () => {
      try {
        const qualificationsBody = {
          tag: "getStaffQualifications",
          param: staffId,
        };
        const res = await APIService.PostData(qualificationsBody, "/DB/Query");
        const data = res.data;

        const QDetails: QualificationDetail[] = data.map((item) => ({
          program: item.Degree,
          course: item.Course,
          university: item.University,
        }));
        setEducationalQualification(QDetails);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPersonalDetails = async () => {
      try {
        const personalDetailsBody = { tag: "getStaffDetails", param: staffId };
        const res = await APIService.PostData(personalDetailsBody, "/DB/Query");
        const data = res.data[0];

        const PDetails: DataObject = {
          prefix: data.Prefix,
          name: data["Last Name"][0] + ". " + data["First Name"],
          title: data.Designation,
          department: data.Department,
          image: `http://localhost:3000/staffPic/${staffId}.jpg`,
          phoneNo: [data.Phno1, data.Phno2, data.Intercom_Phno],
          email: [data.Email1, data.Email2],
          areasOfInterest: [
            data.AoI1,
            data.AoI2,
            data.AoI3,
            data.AoI4,
            data.AoI5,
          ],
        };
        setPersonalDetails(PDetails);
        // setDept(data.Department);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchExperience = async () => {
      try {
        const experienceBody = {
          tag: "getStaffExperience",
          param: staffId,
        };
        const res = await APIService.PostData(experienceBody, "/DB/Query");
        const data = res.data;

        const EDetails: ProfessionalDetail[] = data.map((item) => ({
          start: item.StartYear + "",
          end: item.EndYear,
          title: item.Designation,
          department: item.Course,
          university: item.University,
        }));
        setProfessionalExperience(EDetails);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPublications = async () => {
      try {
        const qualificationsBody = {
          tag: "getPublicationsByID",
          param: staffId,
        };
        const res = await APIService.PostData(qualificationsBody, "/DB/Query");
        const data = res.data;

        const pData: paperDetails[] = data.map((item) => ({
          title: item.PaperTitle,
          year: item.Year + "",
          members: item.Members,
          publicationName: item.PublicationName,
          url: item.URL,
        }));
        console.log("PAPERS: ", pData);
        setPapers(pData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQualifications();
    fetchPersonalDetails();
    fetchExperience();
    fetchPublications();
  }, [username]);

  const staffPageData = [
    {
      title: "Personal Information",
      icon: <BsFilePerson size={"100%"} />,
      id: "personalInformation",
      element: (
        <PersonalDetails
          personalData={personalDetails}
          qualData={educationalQualification}
        />
      ),
    },
    // {
    //   title: "Educational Qualifications",
    //   icon: <FaGraduationCap size={"100%"} />,
    //   id: "educationalQualification",
    //   element: (
    //     <EducationalQualifications dataFetched={educationalQualification} />
    //   ),
    // },
    {
      title: "Professional Experience",
      icon: <FaSuitcase size={"100%"} />,
      id: "professionalExperience",
      element: <ProfessionalExperience dataFetched={professionalExperience} />,
    },
    {
      title: "Projects",
      icon: <BiSolidReport size={"100%"} />,
      id: "projects",
    },
    {
      title: "Honors & Awards",
      icon: <BsFillTrophyFill size={"100%"} />,
      id: "honorsAwards",
    },
    {
      title: "Professional Activities",
      icon: <BiNetworkChart size={"100%"} />,
      id: "professionalActivities",
    },
    {
      title: "Publications",
      icon: <ImBooks size={"100%"} />,
      id: "publications",
      element: (
        <>
          {papers?.map((item, index) => (
            <PublicationCard key={`${item}${index}`} data={item} />
          ))}
        </>
      ),
    },
  ];

  // const handleSubmitButton = () => {
  //   APIService.PostData(
  //     {
  //       id: 5,
  //       personalDetails: personalDetails,
  //       educationalQualification: educationalQualification,
  //       professionalExperience: professionalExperience,
  //     },
  //     "/User/addStaffDetails"
  //   )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // };

  return (
    <div className="staff-page-container">
      {/* <StaffSidebar
        data={staffPageData}
        method={moveToElement}
        dept={personalDetails?.department}
      /> */}

      <div className="content-title-wrapper">
        <div className="title-card">
          <div className="title-content">
            <div className="staff-details">
              <div className="staff-name">
                {personalDetails?.prefix}
                {personalDetails?.name}
              </div>
              <div className="designation">{personalDetails?.title}</div>
            </div>
            <div className="home-button">Home</div>
          </div>
        </div>

        <div className="content">
          {staffPageData?.map((item, index) => (
            <div id={item.id} className="box-content" key={`${item}${index}`}>
              <div className="content-title">{item.title}</div>
              {item.element}
            </div>
          ))}
        </div>
      </div>

      <StaffSidebar
        data={staffPageData}
        method={moveToElement}
        dept={personalDetails?.department}
      />
    </div>
  );
}

export default StaffPage;
