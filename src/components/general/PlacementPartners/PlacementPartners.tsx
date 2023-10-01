import "./placementpartners.css";

import { placementPartnersLogos } from "../../../pages/public/Home/data";

function PlacementPartners() {
  return (
    <span className="placement-container">
      <h2>Trusted by Great Companies</h2>
      <div className="company-list">
        {placementPartnersLogos.map((logo, index: number) => (
          <div key={index} className="logo-wrapper">
            <img src={logo} />
          </div>
        ))}
      </div>
    </span>
  );
}

export default PlacementPartners;
