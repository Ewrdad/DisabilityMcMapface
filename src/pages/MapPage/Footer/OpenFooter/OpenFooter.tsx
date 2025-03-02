import {
  Drawer,
  Grid2,
  IconButton,
  Autocomplete,
  TextField,
} from "@mui/material";
import ExploreOffIcon from "@mui/icons-material/ExploreOff";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Dispatch, SetStateAction } from "react";
import { Location } from "../../../../Types";
import getLocation from "./getLocation";

const locations = [
  "52, Maindy Road, Cardiff",
  "Cardiff Castle, Castle Street, Cardiff",
  "Cardiff Bay, Cardiff",
  "Travelodge, Cardiff Bay",
  "Cardiff Central Station, Cardiff",
  "Cardiff Museum, Cardiff",
  "St Mary Street, Cardiff",
  "The Hayes, Cardiff",
  "Welsh Millennium Centre, Cardiff",
];

export const OpenFooter = ({
  isOpen,
  close,
  setSource,
  setDestination,
}: {
  isOpen: boolean;
  close: VoidFunction;
  setSource: Dispatch<SetStateAction<Location | undefined>>;
  setDestination: Dispatch<SetStateAction<Location | undefined>>;
}) => {
  return (
    <Drawer
      className="z-500"
      sx={{
        width: "100%",
        flexShrink: 0,
        zIndex: 500,
        position: "fixed",
        backgroundColor: "rgba(255, 255, 255, 0)",
        "& .MuiDrawer-paper": {
          width: "100%",
          zIndex: 500,
          position: "fixed",
          boxSizing: "border-box",
          backgroundColor: "rgba(255, 255, 255, 0)",
        },
      }}
      variant="persistent"
      anchor="bottom"
      open={isOpen}
    >
      <div className="h-5 bg-linear-to-t from-pink-500/90 to-pink-500/0"></div>
      <Grid2
        container
        spacing={2}
        className="pb-4 pl-2 pr-2 bg-linear-to-t from-sky-500/90 to-pink-500/100  z-50"
      >
        <Grid2
          size={10}
          className="justify-center content-start text-start align-center p-8"
        >
          <p className="text-white font-[Playwrite_US_Modern] inline text-3xl">
            Help me{" "}
          </p>
          <p className="italic inline font-[Playwrite_US_Trad] text-white text-3xl">
            out
          </p>
        </Grid2>
        <Grid2 size={2}>
          <div className="p-8 rounded-lg relative w-full content-end text-right text-white ">
            <IconButton
              className="content-end text-white "
              onClick={() => {
                close();
              }}
              size="large"
            >
              <ExploreOffIcon className="text-white w-5 hover:text-slate-400" fontSize="large" />
            </IconButton>
          </div>
        </Grid2>
        <Grid2 size={5.5}>
          <Autocomplete
            freeSolo
            options={locations}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                className="bg-white rounded-s"
                onBlur={async (e) =>
                  setSource(await getLocation(e.target.value))
                }
              />
            )}
          />
        </Grid2>
        <Grid2 size={1} className="flex items-center justify-center">
          <DoubleArrowIcon className="text-white" />
        </Grid2>
        <Grid2 size={5.5}>
          <Autocomplete
            freeSolo
            options={locations}
            className="bg-white rounded-s"
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                onBlur={async (e) =>
                  setDestination(await getLocation(e.target.value))
                }
              />
            )}
          />
        </Grid2>
      </Grid2>
    </Drawer>
  );
};
