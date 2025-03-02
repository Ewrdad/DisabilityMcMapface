import { Autocomplete, TextField } from "@mui/material";
import { Profile } from "../../../../../Types";

const profiles: Record<string, Profile> = {
  default: {
    name: "",
    enabled: ["noise"],
    disabled: ["wheelchair"],
  },
  you: {
    name: "You",
    enabled: ["wheelchair"],
    disabled: ["noise"],
  },
  all: {
    name: "All",
    enabled: ["noise", "wheelchair"],
    disabled: [],
  },
  party: {
    name: "None",
    enabled: [],
    disabled: ["noise", "wheelchair"],
  },
};

export const ProfileSelector = ({
  setCurrentProfile,
}: {
  setCurrentProfile: (profile: Profile) => void;
}) => {
  const options = Object.keys(profiles).map((item) => ({
    value: item,
    label: profiles[item].name,
  }));

  return (
    <div className="w-full p-2">
      <Autocomplete
        options={options}
        onChange={(_, newValue) => {
          if (newValue == null) {
            setCurrentProfile(profiles.default);
            return null;
          }
          setCurrentProfile(profiles[newValue.value]);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Profile" className="bg-white" />
        )}
      />
    </div>
  );
};
