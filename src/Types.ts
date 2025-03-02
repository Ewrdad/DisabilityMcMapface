import { LatLngLiteral } from "leaflet";

export type Need = "wheelchair_user" | "visual_sensitity";
export type Tag = "wheelchair_access" | "elevation" | "crowded" | "traffic";
export type Hazard = "non_flush_kerbs";

export type Location = {
  name: string;
} & LatLngLiteral;

export type Profile = {
  name: string;
  enabled: Need[];
  disabled: Need[];
}
