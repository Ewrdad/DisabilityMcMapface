import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { LatLngLiteral } from "leaflet";

type Journey = {
  source: LatLngLiteral,
  destination: LatLngLiteral,
};

const Route = ({ source, destination }: Journey) => {
  const map = useMap();

  useEffect(() => {
    const fetchRoute = async () => {
      const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/walking/${source.lng}%2C${source.lat}%3B${destination.lng}%2C${destination.lat}?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiZHlsYW44OTAyIiwiYSI6ImNtN3Fhc2VoNTAyc2QybHM4YTFhOWRsazIifQ.GrCPCVKq98g-a0aQKOL2Mg`);
      const data = await response.json();
      const coordinates = data.routes[0].geometry.coordinates.map((c: number[]) => [c[1], c[0]]);
      L.polyline(coordinates, { color: "red" }).addTo(map);
    };

    fetchRoute();
  }, [source, destination, map]);

  return null;
};

export default Route;
