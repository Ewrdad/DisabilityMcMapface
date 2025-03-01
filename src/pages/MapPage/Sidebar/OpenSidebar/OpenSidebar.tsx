import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid2,
  Button,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ProfileSelector } from "./ProfileSelector/ProfileSelector";

export const OpenSidebar = ({ close, isOpen }) => {
  return (
    <>
      <Drawer
        sx={{
          width: "20%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "20%",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <Button
          onClick={() => {
            close();
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={10}>Am I going to fall?</Grid2>
            <Grid2 size={2}>
              {" "}
              <MenuOpenIcon className="align-left self-end" />
            </Grid2>
          </Grid2>
        </Button>
        <Divider />
        <ProfileSelector />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
