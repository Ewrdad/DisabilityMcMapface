import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Route from "./Route";
import { LatLngLiteral } from "leaflet";
import { useState } from "react";
import { Tag } from "../../../Types";

const source: LatLngLiteral = { lat: 51.4921091, lng: -3.1835541 };
const destination: LatLngLiteral = { lat: 51.4823, lng: -3.1812 };

export const Map = () => {

  const [filters, setFilters] = useState<Tag[]>([]);

  return (
    <div>
      <h1>Map</h1>
      <button onClick={() => setFilters(["wheelchair"])}>wheelchair</button>
      <button onClick={() => setFilters(["noise"])}>noise</button>
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
