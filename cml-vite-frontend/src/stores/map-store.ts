import { map } from "nanostores";
import { MapEntry } from "@/types/map";

interface MapStoreValue {
  mapData: boolean;
  coordinates: MapEntry[];
}

export const mapStore = map<MapStoreValue>({
  mapData: false,
  coordinates: [],
});

export const dialogOpenStore = map({
  dialogOpen: false,
  dialogDescription:
    "Coordinates were present in the uploaded data. Would you like to create a map layer?",
});
