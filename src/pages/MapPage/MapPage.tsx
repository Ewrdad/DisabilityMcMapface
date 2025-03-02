import { Sidebar } from "./Sidebar/Sidebar";
import { Map } from "./Map/Map";
import { Footer } from "./Footer/Footer";

import { useState } from "react";
import { Tag, Location } from "../../Types";

export const MapPage = () => {
  const [filters, setFilters] = useState<Tag[]>(["wheelchair"]);
  const [source, setSource] = useState<Location | undefined>();
  const [destination, setDestination] = useState<Location | undefined>();
  return (
    <>
      <div className="w-full h-full fixed top-0 right-0">
        <Map source={source} destination={destination} filters={filters} />
      </div>
      <div className="z-50">
        <Sidebar setFilters={setFilters} />
        <Footer setSource={setSource} setDestination={setDestination} />
      </div>
    </>
  );
};
