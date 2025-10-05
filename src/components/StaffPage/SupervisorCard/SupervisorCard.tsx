import "./supervisorcard.css";

import { AiOutlineStar, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

interface SupervisorCardProps {
  image: any;
  name: string;
  id: number;
  designation: string;
  email: string;
  phone: string;
  workingDomains: string[];
  researchScholars: {
    name: string;
    domain: string;
    duration: string;
  }[];
}

export default function SupervisorCard({
  image,
  name,
  id,
  designation,
  email,
  phone,
  workingDomains,
  researchScholars,
}: SupervisorCardProps) {
  return (
    <div className="supervisor-card-container">
      <div className="details-container">
        <div className="image-container">
          <img src={image} alt="Professor Image" />
        </div>
        <div className="subdetails-container">
          <div className="name-container">
            <h3>{name}</h3>
            <p>ID: {id}</p>
          </div>
          <span className="designation">
            <AiOutlineStar /> <p>{designation}</p>
          </span>
          <span className="email">
            <AiOutlineMail /> <p>{email}</p>
          </span>
          <span className="phone">
            <AiOutlinePhone /> <p>{phone}</p>
          </span>
        </div>
      </div>
      <div className="working-domain-container">
        <h4>Working Domain</h4>
        <p>{workingDomains.join(", ")}</p>
      </div>
      <div className="research-scholars-container">
        <h4>Research Scholars</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Domain</th>
              <th>Duration</th>
            </tr>
          </thead>
          {researchScholars.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.domain}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
