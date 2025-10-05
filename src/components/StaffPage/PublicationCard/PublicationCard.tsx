import { paperDetails } from "../../../pages/public/Departments/common/ResearchPublications/PublicationsPage/PublicationsPage";
import "./publicationcard.css";
interface PCProps {
  data: paperDetails;
}

function PublicationCard({ data }: PCProps) {
  const redirectToJournal = () => {
    if (data.url.length > 0) {
      const newWindow = window.open(data.url, "_blank");
      newWindow?.focus();
    }
  };

  return (
    <div className="pc-container inner-box-content" onClick={redirectToJournal}>
      <div className="paper-details">
        <div className="paper-title">{data.title}</div>
        <div className="paper-members">{data.members}</div>
        <div className="journal-name">{data.publicationName}</div>
      </div>
      <div className="year-of-publishing">{data.year}</div>
    </div>
  );
}

export default PublicationCard;
