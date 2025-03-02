import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const ClosedSidebar = ({ open }: { open: () => void }) => {
  return (
    <div className="absoloute top-0 left-0 h-screen w-6">
      <Button
        onClick={() => open()}
        className="bg-linear-to-t to-sky-500/90 from-pink-500 content-left fixed top-0 left-0 h-full w-full"
      >
        {" "}
        <div className="object-center align-middle">
          <MenuIcon className="object-center pt-2 self-start text-white" />
        </div>
      </Button>
    </div>
  );
};
