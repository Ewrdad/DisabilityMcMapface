import { Drawer, Divider, Grid2, Button } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ProfileSelector } from "./ProfileSelector/ProfileSelector";
import { Selector } from "./Selector/Selector";
import { Dispatch, SetStateAction, useState } from "react";

export const OpenSidebar = ({
  close,
  isOpen,
  setFilters,
}: {
  close: () => void;
  isOpen: boolean;
  setFilters: Dispatch<SetStateAction<string[]>>;
}) => {
  const [currentProfile, setCurrentProfile] = useState({
    name: "You",
    enabled: ["noise"],
    disabled: ["wheelchair"],
  });

  return (
    <>
      <Drawer
        sx={{
          width: "20%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "20%",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <Button
          onClick={() => {
            close();
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={10}>Help me OUT</Grid2>
            <Grid2 size={2}>
              {" "}
              <MenuOpenIcon className="align-left self-end" />
            </Grid2>
          </Grid2>
        </Button>
        <Divider />
        <ProfileSelector setCurrentProfile={setCurrentProfile} />
        <Selector currentProfile={currentProfile} setFilters={setFilters} />
      </Drawer>
    </>
  );
};
