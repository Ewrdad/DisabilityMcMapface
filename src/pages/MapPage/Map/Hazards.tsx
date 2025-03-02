import nonFlushKerbs from "../../../../data/non-flush-kerbs.json"
import warningIcon from "../../../assets/warning-icon.svg"
import L from "leaflet";
import Markers from "./Markers";

const icon = new L.Icon({
  iconUrl: warningIcon,
  iconRetinaUrl: warningIcon,
  iconSize: new L.Point(20, 20),
});

const nonFlushKerbMarkers = nonFlushKerbs.features.map(feature => {
  const point = feature.geometry.coordinates;
  return {
    position: {
      lat: point[1],
      lng: point[0]
    },
    title: `${feature.properties.kerb} ${feature.properties.barrier}`,
    id: feature.id
  };
});

export const NonFlushKerbs = () => <Markers markers={nonFlushKerbMarkers} icon={icon} />
