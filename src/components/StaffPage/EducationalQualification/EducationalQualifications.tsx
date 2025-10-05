import "./educationalqualifications.css";
import EQCard from "../EQCard/EQCard";

import { QualificationDetail } from "../../../pages/public/Departments/common/StaffPage/StaffPage";

interface EducationalQualificationsProps {
  dataFetched: QualificationDetail[];
}

function EducationalQualifications({
  dataFetched,
}: EducationalQualificationsProps) {
  const colors = ["#fac3c3", "#c3e1fa", "#c3facf"];
  return (
    <div className="eqwrapper">
      {dataFetched?.map((item, index) => (
        <EQCard
          data={item}
          context={"eq"}
          color={colors[index % colors.length]}
          key={`${item}${index}`}
        />
      ))}
    </div>
  );
}

export default EducationalQualifications;
