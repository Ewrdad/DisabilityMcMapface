import { Grid2, IconButton, Paper } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Tag } from "../../../../../../Types";

export const NeedButton = ({ item, moveUp, moveDown, removeFromSymptoms }: {
  item: Tag;
  moveUp: () => void;
  moveDown: () => void;
  removeFromSymptoms: () => void;
}) => {
  return (
    <Paper elevation={5} className="w-full pr-4">
      <Grid2 size={12}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>{item}</Grid2>
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
                onClick={() => {
                  removeFromSymptoms();
                }}
              />
            </IconButton>
          </Grid2>
        </Grid2>
      </Grid2>
    </Paper>
  );
};
