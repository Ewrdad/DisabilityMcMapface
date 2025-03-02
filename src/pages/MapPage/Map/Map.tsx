import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import Route from "./Route";
import { LatLngLiteral } from "leaflet";
import { Tag } from "../../../Types";

const source: LatLngLiteral = { lat: 51.4921091, lng: -3.1835541 };
const destination: LatLngLiteral = { lat: 51.4823, lng: -3.1812 };

export const Map = ({ filters }: { filters: Tag[] }) => {
  return (
    <div
      className="-z-10 w-full h-full fixed top-0 right-0"
      style={{ zIndex: -1 }}
    >
      <MapContainer
        className="h-full w-full z-0"
        center={source}
        zoom={17}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        <Marker position={source} />
        <Route source={source} destination={destination} filters={filters} />
      </MapContainer>
    </div>
  );
};
