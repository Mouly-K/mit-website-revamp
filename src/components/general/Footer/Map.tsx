import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map = ({ latitude, longitude }: MapProps) => {
  const position: LatLngExpression = [latitude, longitude];

  return (
    <div className="map-wrapper" style={{ height: "110%", width: "110%" }}>
      <MapContainer
        center={position}
        zoom={14}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Madras Institute of Technology, Anna University</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
