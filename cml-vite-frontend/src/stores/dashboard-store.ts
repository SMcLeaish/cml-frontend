import { map } from "nanostores";
import { TabName } from "@/types/tab";

export const contentStore = map<{ activeContent: TabName }>({
  activeContent: "table",
});

export const tabVisibilityStore = map<Record<TabName, boolean>>({
  document: false,
  table: true,
  map: false,
  network: false,
  llm: false,
  settings: false,
  help: false,
  account: false,
});

export const setTabVisibility = (tab: TabName) => {
  tabVisibilityStore.setKey(tab, false);
};

export const setActiveContent = (content: TabName) => {
  contentStore.setKey("activeContent", content);
};
