import { Drawer, Divider, Grid2, Button } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ProfileSelector } from "./ProfileSelector/ProfileSelector";
import { Selector } from "./Selector/Selector";
import { Dispatch, SetStateAction, useState } from "react";
import { Profile, Tag } from "../../../../Types";

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
        <div className="bg-linear-to-t to-sky-500 from-pink-500 h-full">
          <Button
            onClick={() => {
              close();
            }}
            fullWidth
            className="p-2 text-blue-400 hover:text-blue-800"
          >
            <Grid2 container spacing={2} className="text-white">
              <Grid2 size={10} className="">
                <p className="text-white font-[Playwrite_US_Modern]">
                  Help me{" "}
                  <p className="italic inline font-[Playwrite_US_Trad]">out</p>
                </p>
              </Grid2>
              <Grid2 size={2}>
                {" "}
                <MenuOpenIcon className="align-left self-end" />
              </Grid2>
            </Grid2>
          </Button>
          <Divider />
          <ProfileSelector setCurrentProfile={setCurrentProfile} />
          <Selector currentProfile={currentProfile} setFilters={setFilters} />
        </div>
      </Drawer>
    </>
  );
};
