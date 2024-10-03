import { map } from "nanostores";

interface MapEntry {
  lat: number;
  lng: number;
  name?: string;
  type?: string;
}

interface MapStoreValue {
  mapData: boolean;
  coordinates: MapEntry[];
}

export const mapStore = map<MapStoreValue>({
  mapData: false,
  coordinates: [],
});
