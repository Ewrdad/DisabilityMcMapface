import { Button, Grid2, IconButton, Paper } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

import CloseIcon from "@mui/icons-material/Close";
export const DisabledNeedButton = ({ item, addToSymptoms }) => {
  return (
    <Paper elevation={5} className="w-full pr-4">
      <Grid2 size={12}>
        <Grid2 container spacing={2}>
          <Grid2
            size={6}
            className="justify-center align-middle text-center self-center"
          >
            {item}
          </Grid2>
          <Grid2 size={4}></Grid2>

          <Grid2 size={2}>
            <IconButton
              className="text-green-700"
              onClick={() => addToSymptoms()}
            >
              <AddIcon color="success" />{" "}
            </IconButton>
          </Grid2>
        </Grid2>
      </Grid2>
    </Paper>
  );
};
