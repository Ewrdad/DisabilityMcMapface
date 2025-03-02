import { Marker, Tooltip } from "react-leaflet";
import nonFlushKerbs from "../../../../data/non-flush-kerbs.json"

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

const Markers = ({ markers }: {
  markers: {
    position: {
      lat: number,
      lng: number,
    },
    title: string;
    id: string;
  }[]
}) => {
  return (
    <>
      {markers.map(marker =>
        <Marker key={marker.id} position={marker.position}>
          <Tooltip>{marker.title}</Tooltip>
        </Marker>
      )}
    </>
  )
}

export default Markers;
