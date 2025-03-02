import { Marker, Tooltip } from "react-leaflet";
import nonFlushKerbs from "../../../../data/non-flush-kerbs.json"
import warningIcon from "../../../assets/warning-icon.svg"
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: warningIcon,
  iconRetinaUrl: warningIcon,
  iconSize: new L.Point(20, 20),
});

const markers = nonFlushKerbs.features.map(feature => {
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

const NonFlushKerbs = () => {
  return (
    <>
      {markers.map(marker =>
        <Marker key={marker.id} position={marker.position} icon={icon}>
          <Tooltip>{marker.title}</Tooltip>
        </Marker>
      )}
    </>
  )
}

export default NonFlushKerbs;
