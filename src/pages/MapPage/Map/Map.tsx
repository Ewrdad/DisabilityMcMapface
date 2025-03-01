import { MapContainer, Marker, TileLayer } from "react-leaflet";

export const Map = () => {
  return (
    <div>
      <h1>Map</h1>
      <MapContainer className="h-128 w-128" center={[51.49, -3.1835]} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.49, -3.1835]} />
    </MapContainer>
    </div>
  );
};
