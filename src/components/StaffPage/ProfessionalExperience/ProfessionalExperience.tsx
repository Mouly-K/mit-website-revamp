import "./professionalexperience.css";
import EQCard from "../EQCard/EQCard";

import { ProfessionalDetail } from "../../../pages/public/Departments/common/StaffPage/StaffPage";

interface ProfessionalExperienceProps {
  dataFetched: ProfessionalDetail[];
}

function ProfessionalExperience({ dataFetched }: ProfessionalExperienceProps) {
  return (
    <div className="peWrapper">
      {dataFetched?.map((item, index: number) => (
        <EQCard key={`${item}${index}`} data={item} context={"pe"} color={""} />
      ))}
    </div>
  );
}

export default ProfessionalExperience;
