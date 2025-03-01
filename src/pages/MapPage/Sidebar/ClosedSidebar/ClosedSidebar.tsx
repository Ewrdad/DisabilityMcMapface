import { Button, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const ClosedSidebar = ({ open }) => {
  return (
    <>
      <Button onClick={() => open()}>
        {" "}
        <Paper
          square
          className="fixed top-0 left-0 h-screen w-10 bg-gray-100  content-left"
        >
          <MenuIcon className="object-center pt-2 " />
        </Paper>
      </Button>
    </>
  );
};
