import { Autocomplete, TextField } from "@mui/material";
import { Tag } from "../../../../../Types";

interface Profile {
  label: string;
  enabled: Tag[];
  disabled: Tag[];
}

const profiles: Record<string, Profile> = {
  default: {
    label: "",
    enabled: ["noise"],
    disabled: ["wheelchair"],
  },
  you: {
    label: "You",
    enabled: ["wheelchair"],
    disabled: ["noise"],
  },
  all: {
    label: "All",
    enabled: ["noise", "wheelchair"],
    disabled: [],
  },
  party: {
    label: "None",
    enabled: [],
    disabled: ["noise", "wheelchair"],
  },
};

export const ProfileSelector = ({ setCurrentProfile }) => {
  const options = Object.keys(profiles).map((item, index) => ({
    value: item,
    label: profiles[item].label,
  }));

  return (
    <>
      <Autocomplete
        options={options}
        onChange={(event, newValue) => {
          if (newValue == null) {
            setCurrentProfile(profiles.default);
            return null;
          }
          setCurrentProfile(profiles[newValue.value]);
        }}
        renderInput={(params) => <TextField {...params} label="Profile" />}
      />
    </>
  );
};
