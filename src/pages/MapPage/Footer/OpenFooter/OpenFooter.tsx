import {
  Drawer,
  Grid2,
  IconButton,
  Autocomplete,
  TextField,
} from "@mui/material";
import ExploreOffIcon from "@mui/icons-material/ExploreOff";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const locations = [
  "Hayden Ellis,Cardiff",
  "Cardiff Castle,Cardiff",
  "Cardiff University,Cardiff",
];

export const OpenFooter = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) => {
  return (
    <Drawer
      className="z-500  "
      sx={{
        width: "100%",
        flexShrink: 0,
        zIndex: 9999,
        position: "fixed",
        "& .MuiDrawer-paper": {
          width: "100%",
          zIndex: 9999,
          position: "fixed",
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="bottom"
      open={isOpen}
    >
      <Grid2 container spacing={2} className="pb-4 pl-2 pr-2 bg-slate-400">
        <Grid2
          size={10}
          className="justify-center content-start text-start align-center p-8"
        >
          <h1>Help me OUT</h1>
        </Grid2>
        <Grid2 size={2}>
          <div className="p-8 rounded-lg relative w-full content-end text-right">
            <IconButton
              className="content-end text-gray-500 hover:text-gray-700 "
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
            options={locations}
            renderInput={(params) => <TextField {...params} label="From" />}
          />
        </Grid2>
        <Grid2 size={1} className="flex items-center justify-center">
          <DoubleArrowIcon />
        </Grid2>
        <Grid2 size={5.5}>
          {" "}
          <Autocomplete
            options={locations}
            renderInput={(params) => <TextField {...params} label="To" />}
          />
        </Grid2>
      </Grid2>
    </Drawer>
  );
};
