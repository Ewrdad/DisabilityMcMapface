import { Drawer, Divider, Grid2, Button } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ProfileSelector } from "./ProfileSelector/ProfileSelector";
import { Selector } from "./Selector/Selector";
import { Dispatch, SetStateAction, useState } from "react";
import { Hazard, Profile, Tag } from "../../../../Types";
import { Weather } from "./Weather/Weather";

export const OpenSidebar = ({
  close,
  isOpen,
  setFilters,
  setHazards,
  filters,
}: {
  close: () => void;
  isOpen: boolean;
  setFilters: Dispatch<SetStateAction<Tag[]>>;
  setHazards: Dispatch<SetStateAction<Hazard[]>>;
  filters: Tag[];
}) => {
  const [currentProfile, setCurrentProfile] = useState<Profile>({
    name: "You",
    enabled: ["visual_sensitity"],
    disabled: ["wheelchair_user"],
  });

  return (
    <>
      <Drawer
        sx={{
          width: "20%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            backgroundColor: "transparent",
            width: "20%",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
        className=""
      >
        <div className="bg-linear-to-t to-sky-500/90 from-pink-500 h-full text-white">
          <Button
            onClick={() => {
              close();
            }}
            fullWidth
            className="p-2 text-blue-400 hover:text-blue-800"
          >
            <Grid2 container spacing={2} className="text-white">
              <Grid2 size={10} className="inline">
                <h1 className="text-xs">
                  <div className="text-white font-[Playwrite_US_Modern] text-sm inline">
                    Help me{" "}
                  </div>
                  <div className="italic inline font-[Playwrite_US_Trad] text-sm">
                    out
                  </div>
                </h1>
              </Grid2>
              <Grid2 size={1} className=""></Grid2>
              <Grid2
                size={1}
                justifyContent="right"
                alignContent="right"
                className="justify-end align-right"
              >
                {" "}
                <MenuOpenIcon
                  className="align-left self-end h-full"
                  fontSize="medium"
                />
              </Grid2>
            </Grid2>
          </Button>
          <Divider />
          <Weather filters={filters} />
          <ProfileSelector setCurrentProfile={setCurrentProfile} />
          <Selector
            currentProfile={currentProfile}
            setFilters={setFilters}
            setHazards={setHazards}
          />
        </div>
      </Drawer>
    </>
  );
};
