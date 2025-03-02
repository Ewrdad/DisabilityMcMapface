import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import Route from "./Route";
import { Tag, Location, Hazard } from "../../../Types";
import L from 'leaflet';
import sourceSvg from '../../../assets/source.svg';
import destinationSvg from '../../../assets/destination.svg';
import { NonFlushKerbs } from "./Hazards";

type Props = {
  source?: Location;
  destination?: Location;
  filters: Tag[];
  hazards: Hazard[]
};

const defaultCenter = {
  lat: 51.4921091,
  lng: -3.1835541
};

const sourceIcon = new L.Icon({
    iconUrl: sourceSvg,
    iconRetinaUrl: sourceSvg,
    popupAnchor: [0, 50],
    iconSize: [32, 45],
});

const destinationIcon = new L.Icon({
  iconUrl: destinationSvg,
  iconRetinaUrl: destinationSvg,
  popupAnchor: [0, 50],
  iconSize: [32, 45],
});

export const Map = ({
  source,
  destination,
  filters,
  hazards,
}: Props) => {
  return (
    <div
      className="-z-10 w-full h-full fixed top-0 right-0"
      style={{ zIndex: -1 }}
    >
      <MapContainer
        className="h-full w-full z-0"
        center={source ?? defaultCenter}
        zoom={17}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />
        {hazards.includes("non_flush_kerbs") && <NonFlushKerbs />}
        {source && <Marker position={source} icon={sourceIcon} />}
        {destination && <Marker position={destination} icon={destinationIcon} />}
        {source && destination && <Route source={source} destination={destination} filters={filters} />}
      </MapContainer>
    </div>
  );
};
