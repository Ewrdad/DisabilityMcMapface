import { Grid2, IconButton, Paper } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

export const NeedButton = ({
  title,
  moveUp,
  moveDown,
  remove,
}: {
  title: string;
  moveUp: () => void;
  moveDown: () => void;
  remove: () => void;
}) => {
  return (
    <Paper elevation={5} className="w-full pr-4">
      <Grid2 size={12}>
        <Grid2 container spacing={2}>
          <Grid2 size={6} className="font-[Playwrite_US_Modern]">
            {title}
          </Grid2>
          <Grid2 size={2} onClick={() => moveUp()}>
            <IconButton className="">
              <KeyboardArrowUpIcon />
            </IconButton>
          </Grid2>
          <Grid2 size={2} onClick={() => moveDown()}>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Grid2>
          <Grid2 size={2}>
            <IconButton>
              <CloseIcon
                color="error"
                onClick={remove}
              />
            </IconButton>
          </Grid2>
        </Grid2>
      </Grid2>
    </Paper>
  );
};
