import { Sidebar } from "./Sidebar/Sidebar";
import { Map } from "./Map/Map";
import { Footer } from "./Footer/Footer";

import { useState } from "react";
import { Tag } from "../../Types";

export const MapPage = () => {
  const [filters, setFilters] = useState<Tag[]>(["wheelchair"]);
  return (
    <div>
      <Sidebar setFilters={setFilters} />
      <Map />
      <Footer />
    </div>
  );
};
