export type TabName =
  | "document"
  | "table"
  | "map"
  | "network"
  | "llm"
  | "settings"
  | "help"
  | "account";

export type TabProps = {
  name: string;
  icon: React.ReactNode;
  tabKey: TabName;
  tooltip: string;
  activeBg?: string;
};
