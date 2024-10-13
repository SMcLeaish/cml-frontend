import { PipehawkIcon } from "@/components/pipe-hawk-icon";
import {
  FileText,
  Table,
  Map,
  ChartNetwork,
  Settings2,
  LifeBuoy,
  SquareUser,
  Bot,
} from "lucide-react";
import { Tab } from "./tab";
import { Button } from "@/components/ui/button";

export const Sidebar: React.FC = () => {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <PipehawkIcon className="size-7 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <Tab
          name="Document"
          icon={<FileText className="size-5" />}
          tabKey="document"
          tooltip="Document"
          activeBg="bg-muted"
        />
        <Tab
          name="Table"
          icon={<Table className="size-5" />}
          tabKey="table"
          tooltip="Table"
        />
        <Tab
          name="Map"
          icon={<Map className="size-5" />}
          tabKey="map"
          tooltip="Map"
        />
        <Tab
          name="Network"
          icon={<ChartNetwork className="size-5" />}
          tabKey="network"
          tooltip="Network"
        />
        <Tab
          name="LLM"
          icon={<Bot className="size-5" />}
          tabKey="llm"
          tooltip="LLM"
        />
        <Tab
          name="Settings"
          icon={<Settings2 className="size-5" />}
          tabKey="settings"
          tooltip="Settings"
        />
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <Tab
          name="Help"
          icon={<LifeBuoy className="size-5" />}
          tabKey="help"
          tooltip="Help"
        />
        <Tab
          name="Account"
          icon={<SquareUser className="size-5" />}
          tabKey="account"
          tooltip="Account"
        />
      </nav>
    </aside>
  );
};
