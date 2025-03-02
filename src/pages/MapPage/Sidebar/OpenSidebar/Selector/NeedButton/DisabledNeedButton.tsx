import { Grid2, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const DisabledNeedButton = ({
  title,
  add,
}: {
  title: string;
  add: () => void;
}) => {
  return (
    <Paper elevation={5} className="w-full pr-4">
      <Grid2 size={12}>
        <Grid2 container spacing={2}>
          <Grid2
            size={6}
            className="justify-center align-middle text-center self-center font-[Playwrite_US_Modern]"
          >
            <p className="font-[Playwrite_US_Modern]">{title}</p>
          </Grid2>
          <Grid2 size={4}></Grid2>

          <Grid2 size={2}>
            <IconButton
              className="text-green-700"
              onClick={add}
            >
              <AddIcon color="success" />{" "}
            </IconButton>
          </Grid2>
        </Grid2>
      </Grid2>
    </Paper>
  );
};
