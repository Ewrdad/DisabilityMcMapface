import { LatLngLiteral } from "leaflet";

export type Tag = "wheelchair" | "noise";

export type Location = {
  name: string;
} & LatLngLiteral;

export type Profile = {
  name: string;
  enabled: Tag[];
  disabled: Tag[];
}
