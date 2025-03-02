import { IconButton } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import { ComponentProps, useState } from "react";
import { OpenFooter } from "./OpenFooter/OpenFooter";

type Props = Pick<ComponentProps<typeof OpenFooter>, "setSource" | "setDestination">;

export const Footer = ({ setSource, setDestination}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 hover:bg-white/19 bg-white/5 p-1 rounded-full">
      <IconButton
        aria-label="delete"
        size="large"
        className=" "
        onClick={() => setIsOpen((prevValue) => !prevValue)}
      >
        <ExploreIcon fontSize="inherit" color="info" />
      </IconButton>
      <OpenFooter
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
        setSource={setSource}
        setDestination={setDestination}
      />
    </div>
  );
};
