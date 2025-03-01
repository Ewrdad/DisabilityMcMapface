import { Button, Divider, Grid2, Paper } from "@mui/material";
import { useState } from "react";
import { NeedButton } from "./NeedButton/NeedButton";
import { DisabledNeedButton } from "./NeedButton/DisabledNeedButton";

export const Selector = () => {
  const [symptoms, setSymptoms] = useState(["a", "b", "c"]);
  const [disabledSymptoms, setDisabledSymptoms] = useState(["a", "b", "c"]);

  const moveUp = (index) => {
    if (index == 0) return null;

    const symptomsClone = [...symptoms];
    const ObjectHolder = symptoms[index - 1];
    symptomsClone[index - 1] = symptoms[index];
    symptomsClone[index] = ObjectHolder;

    setSymptoms(symptomsClone);
  };

  const moveDown = (index) => {
    if (index == symptoms.length - 1) return null;

    const symptomsClone = [...symptoms];
    const ObjectHolder = symptoms[index + 1];
    symptomsClone[index + 1] = symptoms[index];
    symptomsClone[index] = ObjectHolder;

    setSymptoms(symptomsClone);
  };

  const addToSymptoms = (index) => {
    const Need = disabledSymptoms[index];
    setSymptoms((prevValue) => [...prevValue, Need]);
    setDisabledSymptoms((prevValue) => {
      return prevValue.filter((_, metaindex) => metaindex !== index);
    });
  };

  const removeFromSymptoms = (index) => {
    const Need = symptoms[index];
    setDisabledSymptoms((prevValue) => [...prevValue, Need]);
    setSymptoms((prevValue) => {
      return prevValue.filter((_, metaindex) => metaindex !== index);
    });
  };

  return (
    <Grid2 container spacing={2} className="pt-2">
      <Grid2 size={12}>
        <h3>Please Highlight</h3>
      </Grid2>
      {symptoms.map((item, index) => {
        {
          return (
            <NeedButton
              item={item}
              moveUp={() => moveUp(index)}
              moveDown={() => {
                moveDown(index);
              }}
              removeFromSymptoms={() => {
                removeFromSymptoms(index);
              }}
            />
          );
        }
      })}
      <Grid2 size={12}>
        <h3>Don't Show</h3>
      </Grid2>
      {disabledSymptoms.map((item, index) => (
        <DisabledNeedButton
          item={item}
          addToSymptoms={() => addToSymptoms(index)}
        />
      ))}{" "}
    </Grid2>
  );
};
