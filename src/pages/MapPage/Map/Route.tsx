import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { LatLngLiteral } from "leaflet";
import tags from "../../../../data/tags.json"
import { Tag, Location } from "../../../Types";

type Journey = {
  source: Location,
  destination: Location,
  filters: Tag[],
};

// mapbox access token
const accessToken = 'pk.eyJ1IjoiZHlsYW44OTAyIiwiYSI6ImNtN3Fhc2VoNTAyc2QybHM4YTFhOWRsazIifQ.GrCPCVKq98g-a0aQKOL2Mg';

// layer group stores routes on
const layerGroup = L.layerGroup();

const Route = ({ source, destination, filters }: Journey) => {
  const map = useMap();
  layerGroup.addTo(map);

  const exclusions: LatLngLiteral[] = filters.flatMap(tag => tags.dangers[tag]);

  // build url params for exclusion
  const exclusionUrlParams = exclusions.length > 0 ? `&exclude=${exclusions.map(exclusion => `point(${exclusion.lng} ${exclusion.lat})`).join(',')}` : '';

  // you can only use driving routes with the beta exclude points
  const profile = exclusions.length > 0 ? 'driving' : 'walking';

  useEffect(() => {
    const fetchRoute = async () => {
      const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/${profile}/${source.lng}%2C${source.lat}%3B${destination.lng}%2C${destination.lat}?geometries=geojson&overview=full&access_token=${accessToken}${exclusionUrlParams}`);
      const data = await response.json();
      const coordinates = data.routes[0].geometry.coordinates.map((c: number[]) => [c[1], c[0]]);
      layerGroup.clearLayers();
      L.polyline(coordinates, { color: "red" }).addTo(layerGroup);
    };

    fetchRoute();
  }, [source, destination, filters, map]);

  return null;
};

export default Route;
