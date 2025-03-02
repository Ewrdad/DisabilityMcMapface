import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import Route from "./Route";
import { Tag, Location } from "../../../Types";
import L from 'leaflet';
import marker from '../../../assets/react.svg';
import NonFlushKerbs from "./NonFlushKerbs";

type Props = { source?: Location, destination?: Location, filters: Tag[] };

const defaultCenter = {
  lat: 51.4921091,
  lng: -3.1835541
};

const sourceIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [32, 45],
});

const destinationIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor:  [-0, -0],
  iconSize: [32, 45],
});

export const Map = ({
  source,
  destination,
  filters
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
        <NonFlushKerbs />
        {source && <Marker position={source} icon={sourceIcon} />}
        {destination && <Marker position={destination} icon={destinationIcon} />}
        {source && destination && <Route source={source} destination={destination} filters={filters} />}
      </MapContainer>
    </div>
  );
};
