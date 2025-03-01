import { Autocomplete, TextField } from "@mui/material";

const profiles = {
  default: {
    label: "",
    enabled: ["a", "b", "c"],
    disabled: ["d", "e", "f"],
  },
  you: {
    label: "You",
    enabled: ["a", "c"],
    disabled: ["d", "e", "f", "b"],
  },
  all: {
    label: "All",
    enabled: ["a", "b", "c", "d", "e", "f"],
    disabled: [],
  },
  party: {
    label: "Party",
    enabled: ["c", "d", "e", "f"],
    disabled: ["a", "b"],
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
