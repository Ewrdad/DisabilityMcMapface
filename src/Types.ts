import { LatLngLiteral } from "leaflet";

export type Tag = "wheelchair" | "noise";

export type Location = {
  name: string;
} & LatLngLiteral;
