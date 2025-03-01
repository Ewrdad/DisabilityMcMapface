import { Sidebar } from "./Sidebar/Sidebar";
import { Map } from "./Map/Map";
import { Footer } from "./Footer/Footer";

import { useState } from "react";

export const MapPage = () => {
  const [filters, setFilters] = useState<string[]>(["somethign"]);
  return (
    <div>
      <Sidebar setFilters={setFilters} />
      <Map />
      <Footer />
    </div>
  );
};
