import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Route from "./Route";
import { LatLngLiteral } from "leaflet";
import { Tag } from "../../../Types";

const source: LatLngLiteral = { lat: 51.4921091, lng: -3.1835541 };
const destination: LatLngLiteral = { lat: 51.4823, lng: -3.1812 };

export const Map = ({ filters }: {filters: Tag[]}) => {

  return (
    <div>
      <h1>Map</h1>
      <MapContainer className="h-128 w-128" center={source} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={source} />
      <Route source={source} destination={destination} filters={filters} />
    </MapContainer>
    </div>
  );
};
