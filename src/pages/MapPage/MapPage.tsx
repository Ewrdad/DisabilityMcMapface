import { Sidebar } from "./Sidebar/Sidebar";
import { Map } from "./Map/Map";
import { Footer } from "./Footer/Footer";

import { useState } from "react";
import { Tag } from "../../Types";

export const MapPage = () => {
  const [filters, setFilters] = useState<Tag[]>(["wheelchair"]);
  return (
    <>
      <div className="z-50">
        <Sidebar setFilters={setFilters} />
        <Footer />
      </div>
      <div className="-z-10 w-full h-full fixed top-0 right-0">
        <Map filters={filters} />
      </div>
    </>
  );
};
