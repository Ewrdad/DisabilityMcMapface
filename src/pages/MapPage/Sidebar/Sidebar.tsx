import { Dispatch, SetStateAction, useState } from "react";
import { OpenSidebar } from "./OpenSidebar/OpenSidebar";
import { ClosedSidebar } from "./ClosedSidebar/ClosedSidebar";
import { Hazard, Tag } from "../../../Types";

// Displays a sidebar on the side of the pages
export const Sidebar = ({
  setFilters,
  setHazards,
  filters,
}: {
  setFilters: Dispatch<SetStateAction<Tag[]>>;
  setHazards: Dispatch<SetStateAction<Hazard[]>>;
  filters: Tag[];
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 h-screen transition-all duration-500 `}
      style={{ width: isOpen ? "25%" : "2.5rem" }}
    >
      <OpenSidebar
        close={() => {
          setIsOpen(false);
        }}
        setFilters={setFilters}
        setHazards={setHazards}
        isOpen={isOpen}
        filters={filters}
      />
      {!isOpen && (
        <ClosedSidebar
          open={() => {
            setIsOpen(true);
          }}
        />
      )}
    </div>
  );
};
