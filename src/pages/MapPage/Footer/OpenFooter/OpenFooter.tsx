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
  "Cardiff Castle, Cardiff",
  "Cardiff Bay, Cardiff",
];

export const OpenFooter = ({
  isOpen,
  close,
  setSource,
  setDestination
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
        "& .MuiDrawer-paper": {
          width: "100%",
          zIndex: 500,
          position: "fixed",
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="bottom"
      open={isOpen}
    >
      <Grid2 container spacing={2} className="pb-4 pl-2 pr-2 bg-slate-400 z-50">
        <Grid2
          size={10}
          className="justify-center content-start text-start align-center p-8"
        >
          <h1>Help me OUT</h1>
        </Grid2>
        <Grid2 size={2}>
          <div className="p-8 rounded-lg relative w-full content-end text-right">
            <IconButton
              className="content-end text-gray-500 hover:text-gray-700"
              onClick={() => {
                close();
              }}
              size="large"
            >
              <ExploreOffIcon />
            </IconButton>
          </div>
        </Grid2>
        <Grid2 size={5.5}>
          <Autocomplete
            freeSolo
            options={locations}
            renderInput={(params) => <TextField {...params} label="From" onBlur={async (e) => setSource(await getLocation(e.target.value))}/>}
          />
        </Grid2>
        <Grid2 size={1} className="flex items-center justify-center">
          <DoubleArrowIcon />
        </Grid2>
        <Grid2 size={5.5}>
          <Autocomplete
            freeSolo
            options={locations}
            renderInput={(params) => <TextField {...params} label="To" onBlur={async (e) => setDestination(await getLocation(e.target.value))} />}
          />
        </Grid2>
      </Grid2>
    </Drawer>
  );
};
