import { Location } from "../../../../Types"

const getLocation = async (name: string): Promise<Location> => {

  const params = new URLSearchParams({
    q: name,
    types: "neighborhood,street,address",
    limit: "1",
    access_token: "pk.eyJ1IjoiZHlsYW44OTAyIiwiYSI6ImNtN3Fhc2VoNTAyc2QybHM4YTFhOWRsazIifQ.GrCPCVKq98g-a0aQKOL2Mg",
  });
  const response = await fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${params}`);
  const data = await response.json();
  const coordinates = data.features[0].geometry.coordinates;
  return {
    name,
    lat: coordinates[1],
    lng: coordinates[0]
  };
}

export default getLocation;
