import { Autocomplete, TextField } from "@mui/material";
import { Profile } from "../../../../../Types";

const profiles: Record<string, Profile> = {
  default: {
    name: "",
    enabled: ["visual_sensitity"],
    disabled: ["wheelchair_user"],
  },
  you: {
    name: "You",
    enabled: ["wheelchair_user"],
    disabled: ["visual_sensitity"],
  },
  all: {
    name: "All",
    enabled: ["visual_sensitity", "wheelchair_user"],
    disabled: [],
  },
  party: {
    name: "None",
    enabled: [],
    disabled: ["visual_sensitity", "wheelchair_user"],
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
    <div className="w-full p-2 text-black">
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
          <TextField
            {...params}
            label="Profile"
            className="bg-white rounded-s text-black"
          />
        )}
      />
    </div>
  );
};
