import { FaPlaneDeparture, FaCar } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import {
  GiHumanPyramid,
  GiGears,
  GiCircuitry,
  GiSatelliteCommunication,
} from "react-icons/gi";

import Rpt from "../../../assets/rpt.png";

import { HiMiniCpuChip } from "react-icons/hi2";

import { HorizontalCard } from "../../../components/general/HorizontalCards/HorizontalCards";
import { FooterContent } from "../../../components/general/Footer/Footer";

import bny from "../../../assets/PlacementPartners/bny_mellon.svg";
import oracle from "../../../assets/PlacementPartners/oracle.svg";
import cat from "../../../assets/PlacementPartners/caterpillar.svg";
import barclays from "../../../assets/PlacementPartners/barclays.svg";

// Centers Images Imports
import Scoe from "../../../assets/Facilities/scoe.jpg";
import LibraryImage from "../../../assets/Facilities/library.jpg";
import HealthCentreImage from "../../../assets/Facilities/health_centre.jpg";
import ComputerCenterImage from "../../../assets/Facilities/computer_center.jpg";
import SportsImage from "../../../assets/Facilities/sports.jpg";
import AUKBCImage from "../../../assets/Facilities/aukbc.jpg";
import CentreForAerospaceImage from "../../../assets/Facilities/centre_for_aersospace.jpeg";
import CenterForIoTImage from "../../../assets/Facilities/center_for_iot.jpg";
import PlacementImage from "../../../assets/Facilities/placement.jpg";
import CeatImage from "../../../assets/Facilities/ceat.png"

// Facilities Images Imports
import TEDCImage from "../../../assets/FacilitiesIcons/tedc.png";
import MuseumImage from "../../../assets/FacilitiesIcons/museum.png";
import NSOImage from "../../../assets/FacilitiesIcons/nso.png";
import MitraImage from "../../../assets/FacilitiesIcons/mitra.png";
import HostelImageIcon from "../../../assets/FacilitiesIcons/hostel.png";
import YRCImage from "../../../assets/FacilitiesIcons/yrc.png";
import PDAImage from "../../../assets/FacilitiesIcons/pda.png";
import NSSImage from "../../../assets/FacilitiesIcons/nss.png";
import CSMITImage from "../../../assets/FacilitiesIcons/csmit.png";
import AthaneumImage from "../../../assets/FacilitiesIcons/athaneum.png";
import MITQuillImage from "../../../assets/FacilitiesIcons/mit_quill.png";
import TamilMandramImage from "../../../assets/FacilitiesIcons/tamil_mandram.png";
import TBOImage from "../../../assets/FacilitiesIcons/tbo.png";
import RotaractClubImage from "../../../assets/FacilitiesIcons/rotaract_club.png";
import VarietyTeamImage from "../../../assets/FacilitiesIcons/variety_team.png";

export const numberCountsData = [
  { count: "2.8K+", description: "Undergraduates" },
  { count: "216", description: "Postgraduates" },
  { count: "306", description: "PhD Scholars" },
  { count: "06", description: "Research Centres" },
];

export const numberCountsData2 = [
  { count: "210/124", description: "Faculty/Staff" },
  { count: "49Cr+", description: "R & D Grants" },
  { count: "588", description: "Publications" },
  { count: "14/6", description: "Patents Published/Granted" },
  { count: "95.6K+", description: "Books RF ID - Automation" },
  { count: "23", description: "Student Clubs" },
];

export const departmentsData: HorizontalCard[] = [
  {
    name: "Aeronautical Engineering",
    Icon: <FaPlaneDeparture />,
    link : "https://mitindia.edu/en/aero-home",
    // iconFillColor: "#B799FF",
    iconFillColor: "#9848FF",
    description: "Established - 1949",
  },
  {
    name: "Automobile Engineering",
    Icon: <FaCar />,
    link : "https://mitindia.edu/en/auto-home",
    
    // iconFillColor: "#AEE2FF",
    iconFillColor: "red",
    description: "Established - 1949",
  },
  {
    name: "Electronics Engineering",
    Icon: <GiCircuitry />, 
    link : "https://mitindia.edu/en/ece-home",
    
    iconFillColor: "#F94C10",
    description: "Established - 1949",
  },
  {
    name: "Instrumentation Engineering",
    Icon: <HiMiniCpuChip />,
    link : "https://mitindia.edu/en/instrumentation-home",
    
    iconFillColor: "#F31559",
    description: "Established - 1949",
  },
  {
    name: "Production Technology",
    Icon: <GiGears />,
    link : "https://mitindia.edu/en/pt-home",
    
    iconFillColor: "#F8DE22",
    description: "Established - 1977",
  },
  {
    name: "Rubber and Plastics Technology",
    Icon: <img src={Rpt} style={{width: "70%"}}/>,
    // iconFillColor: "#960E10",
    link : "https://mitindia.edu/en/rpt-home",
    
    iconFillColor: "#0D1282",
    description: "Established - 1988",
  },
  {
    name: "Information Technology",
    Icon: <GiSatelliteCommunication />,
    link : "http://www.it.mitindia.edu/",
    
    iconFillColor: "#FE7BE5",
    description: "Established - 2001",
  },
  {
    name: "Computer Technology",
    Icon: <FaComputer />,
    // iconFillColor: "#EA1179",
    link : "http://www.ct.mitindia.edu/dct/#/home",
    
    iconFillColor: "#0096FF",
    description: "Established - 2010",
  },
  {
    name: "Applied Science and Humanities",
    Icon: <GiHumanPyramid />,
    link : "hhttp://www.dash.mitindia.edu/",
    iconFillColor: "#38E54D",
    description: "Established - 2021",
  },
];

export const footerContents: FooterContent[] = [
  {
    title: "Academics",
    url: "#",
    content: [
      {
        title: "Academic Courses",
        url: "https://mitindia.edu/en/courses",
      },
      {
        title: "ACOE",
        url: "https://acoe.annauniv.edu/",
      },
      {
        title: "Academic Schedules",
        url: "",
      },
      {
        title: "Centre for Research",
        url: "http://ctdt.annauniv.edu/",
      },
      {
        title: "Students Feedback",
        url: "http://fbonline.annauniv.edu:8080/fb/fb.jsp",
      },
    ],
  },
  {
    title: "Administration",
    url: "#",
    content: [
      {
        title: "Dean",
        url: "https://annauniv.irins.org/profile/43400",
      },
      {
        title: "People",
        url: "https://mitindia.edu/en/administration/office-page",
      },
      {
        title: "Departments",
        url: "https://mitindia.edu/en/all-departments",
      },
      {
        title: "Acts & Statues",
        url: "https://www.annauniv.edu/pdf/Acts%20&%20Statues-New.pdf",
      },
      {
        title: "Mandatory Disclosure",
        url: "https://iqac.annauniv.edu/",
      },
    ],
  },
  {
    title: "Downloads",
    url: "#",
    content: [
      {
        title: "WiFi Registration",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdfAkiupN8aSNQynN383_njOlsF-E_UWQY50S0DHOGLSzcxBw/viewform",
      },
      {
        title: "Network Issues",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdccEYSatG7fShAYwLMJ0hwvfvtDtW_cc00ZpGliYpfeYzhBA/viewform",
      },
    ],
  },
  {
    title: "Facilities",
    url: "#",
    content: [
      {
        title: "Computer Centre",
        url: "https://cc.mitindia.edu/",
      },
      {
        title: "Library",
        url: "",
      },
      {
        title: "Health Centre",
        url: "",
      },
      {
        title: "Student Grievance Redressal",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScrI2aIZGcv7FyhvQL-0bwJCliULY0dShhKLe7VEQXNT00Bpw/viewform",
      },
    ],
  },
];

export const placementPartnersLogos = [bny, oracle, cat, barclays];

export const centersData = [
  {
    title: "Computer Center",
    img: ComputerCenterImage,
    // description: "2K+ Active Members",
  },
  {
    title: "AUKBC - MIT",
    img: AUKBCImage,
    // description: "2K+ Active Members",
  },
  {
    title: "Center for Aerospace",
    img: CentreForAerospaceImage,
    // description: "2K+ Active Members",
  },
  {
    title: "Center for IoT",
    img: CenterForIoTImage,
    // description: "2K+ Active Members",
  },
  {
    title: "Library",
    img: LibraryImage,
    // description: "2K+ Active Members",
  },
  {
    title: "Placement",
    img: PlacementImage,
    // description: "2K+ Active Members",
  },
  {
    title: "Sports",
    img: SportsImage,
    // description: "2K+ Active Members",
  },
  {
    title: "Health Center",
    img: HealthCentreImage,
    // description: "2K+ Active Members",
  },
  {
    title: "SCoE",
    img: Scoe,
    // description: "2K+ Active Members",
  },
  {
    title: "CEAT",
    img: CeatImage,
    // description: "2K+ Active Members",
  },
];

export const facilitiesData = [
  {
    title: "Hostel",
    img: HostelImageIcon,
  },
  {
    title: "NSS",
    img: NSSImage,
  },
  {
    title: "NSO",
    img: NSOImage,
  },
  {
    title: "YRC",
    img: YRCImage,
  },
  {
    title: "Athanaeum",
    img: AthaneumImage,
  },
  {
    title: "PDA",
    img: PDAImage,
  },
  {
    title: "Tamil Mandram",
    img: TamilMandramImage,
  },
  {
    title: "Rotaract Club",
    img: RotaractClubImage,
  },
  {
    title: "Computer Society",
    img: CSMITImage,
  },
  {
    title: "TBO",
    img: TBOImage,
  },
  {
    title: "MIT Quill",
    img: MITQuillImage,
  },
  {
    title: "Variety Team",
    img: VarietyTeamImage,
  },
  {
    title: "Museum",
    img: MuseumImage,
  },
  {
    title: "MITRA",
    img: MitraImage,
  },
  {
    title: "TEDC",
    img: TEDCImage,
  },
];
