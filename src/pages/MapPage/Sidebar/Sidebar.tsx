import { useState } from "react";
import { OpenSidebar } from "./OpenSidebar/OpenSidebar";
import { ClosedSidebar } from "./ClosedSidebar/ClosedSidebar";

// Displays a sidebar on the side of the pages
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 h-screen transition-all duration-500`}
      style={{ width: isOpen ? "25%" : "2.5rem" }}
    >
      <OpenSidebar
        close={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
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
