import { Icon, IconOptions } from "leaflet";
import { Marker, Tooltip } from "react-leaflet";

const Markers = ({ markers, icon }: {
  markers: {
    position: {
      lat: number,
      lng: number,
    },
    title: string;
    id: string;
  }[],
  icon?: Icon<IconOptions>
}) => {
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

export default Markers;
