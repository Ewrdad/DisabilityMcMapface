import { Grid2 } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NeedButton } from "./NeedButton/NeedButton";
import { DisabledNeedButton } from "./NeedButton/DisabledNeedButton";
import { Tag, Profile, Hazard } from "../../../../../Types";
import needsData from "../../../../../../data/needs.json";

export const Selector = ({
  currentProfile,
  setFilters,
  setHazards,
}: {
  currentProfile: Profile;
  setFilters: Dispatch<SetStateAction<Tag[]>>;
  setHazards: Dispatch<SetStateAction<Hazard[]>>;
}) => {
  const [needs, setNeeds] = useState(currentProfile.enabled);
  const [disabledNeeds, setDisabledNeeds] = useState(
    currentProfile.disabled
  );

  useEffect(() => {
    setNeeds(currentProfile.enabled);
    setDisabledNeeds(currentProfile.disabled);
  }, [currentProfile]);

  useEffect(() => {
    setFilters(needs.flatMap(need => needsData[need].tags as Tag[]));
    setHazards(needs.flatMap(need => needsData[need].hazards as Hazard[]));
  }, [setFilters, needs]);

  const moveUp = (index: number) => {
    if (index == 0) return null;

    const needsClone = [...needs];
    const ObjectHolder = needs[index - 1];
    needsClone[index - 1] = needs[index];
    needsClone[index] = ObjectHolder;

    setNeeds(needsClone);
  };

  const moveDown = (index: number) => {
    if (index == needs.length - 1) return null;

    const needsClone = [...needs];
    const ObjectHolder = needs[index + 1];
    needsClone[index + 1] = needs[index];
    needsClone[index] = ObjectHolder;

    setNeeds(needsClone);
  };

  const addToNeeds = (index: number) => {
    const need = disabledNeeds[index];
    setNeeds((prevValue) => [...prevValue, need]);
    setDisabledNeeds((prevValue) => {
      return prevValue.filter((_, metaindex) => metaindex !== index);
    });
  };

  const removeFromNeeds = (index: number) => {
    const need = needs[index];
    setDisabledNeeds((prevValue) => [...prevValue, need]);
    setNeeds((prevValue) => {
      return prevValue.filter((_, metaindex) => metaindex !== index);
    });
  };

  return (
    <Grid2 container spacing={2} className="p-2">
      <Grid2 size={12}>
        <h3>My needs</h3>
      </Grid2>
      {needs.map((item, index: number) => {
        {
          return (
            <NeedButton
              key={item}
              title={needsData[item].title}
              moveUp={() => moveUp(index)}
              moveDown={() => {
                moveDown(index);
              }}
              remove={() => {
                removeFromNeeds(index);
              }}
            />
          );
        }
      })}
      <Grid2 size={12}>
        <h3>Choose needs</h3>
      </Grid2>
      {disabledNeeds.map((item, index: number) => (
        <DisabledNeedButton
          key={item}
          title={needsData[item].title}
          add={() => addToNeeds(index)}
        />
      ))}
    </Grid2>
  );
};
