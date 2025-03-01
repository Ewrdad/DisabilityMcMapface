import { Autocomplete, TextField } from "@mui/material";

export const ProfileSelector = () => {
  return (
    <>
      <Autocomplete
        options={[
          { label: "You", value: "you" },
          { label: "All", value: "all" },
        ]}
        renderInput={(params) => <TextField {...params} label="Profile" />}
      />
    </>
  );
};
