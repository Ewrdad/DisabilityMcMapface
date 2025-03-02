import { Drawer, Divider, Grid2, Button } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ProfileSelector } from "./ProfileSelector/ProfileSelector";
import { Selector } from "./Selector/Selector";
import { Dispatch, SetStateAction, useState } from "react";
import { Profile, Tag } from "../../../../Types";
import { Weather } from "./Weather/Weather";

export const OpenSidebar = ({
  close,
  isOpen,
  setFilters,
}: {
  close: () => void;
  isOpen: boolean;
  setFilters: Dispatch<SetStateAction<Tag[]>>;
}) => {
  const [currentProfile, setCurrentProfile] = useState<Profile>({
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
        className=""
      >
        <div className="bg-linear-to-t to-sky-500 from-pink-500 h-full text-white">
          <Button
            onClick={() => {
              close();
            }}
            fullWidth
            className="p-2 text-blue-400 hover:text-blue-800"
          >
            <Grid2 container spacing={2} className="text-white">
              <Grid2 size={10} className="inline">
                <p className="text-white font-[Playwrite_US_Modern] inline">
                  Help me{" "}
                </p>
                <p className="italic inline font-[Playwrite_US_Trad]">out</p>
              </Grid2>
              <Grid2 size={2}>
                {" "}
                <MenuOpenIcon className="align-left self-end" />
              </Grid2>
            </Grid2>
          </Button>
          <Divider />
          <Weather />
          <ProfileSelector setCurrentProfile={setCurrentProfile} />
          <Selector currentProfile={currentProfile} setFilters={setFilters} />
        </div>
      </Drawer>
    </>
  );
};
