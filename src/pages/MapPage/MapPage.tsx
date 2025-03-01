import { Sidebar } from "./Sidebar/Sidebar";
import { Map } from "./Map/Map";
import { Footer } from "./Footer/Footer";

export const MapPage = () => {
  const [filters, setFilters] = useState(["somethign"])
  return (
    <div>
      <Sidebar filters setFilters() />
      <Map filters />
      <Footer />
    </div>
  );
};
