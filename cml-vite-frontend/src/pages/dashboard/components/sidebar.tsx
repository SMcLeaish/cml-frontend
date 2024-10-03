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
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useStore } from "@nanostores/react";
import { activeTabStore } from "@/stores/active-tab-store";

export const Sidebar: React.FC = () => {
  const activeTab = useStore(activeTabStore);

  const handleTabChange = (tab: string) => {
    activeTabStore.set(tab);
  };
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <PipehawkIcon className="size-7 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={activeTab === "document" ? "outline" : "ghost"}
              size="icon"
              className={
                activeTab === "document" ? "rounded-lg bg-muted" : "rounded-lg"
              }
              aria-label="Document"
              onClick={() => handleTabChange("document")}
            >
              <FileText className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Document
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={activeTab === "table" ? "outline" : "ghost"}
              size="icon"
              className={
                activeTab === "table" ? "rounded-lg bg-secondary" : "rounded-lg"
              }
              aria-label="table"
              onClick={() => handleTabChange("table")}
            >
              <Table className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Table
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={activeTab === "map" ? "outline" : "ghost"}
              size="icon"
              className={
                activeTab === "map" ? "rounded-lg bg-secondary" : "rounded-lg"
              }
              aria-label="map"
              onClick={() => handleTabChange("map")}
            >
              <Map className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Map
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={activeTab === "network" ? "outline" : "ghost"}
              size="icon"
              className={
                activeTab === "network"
                  ? "rounded-lg bg-secondary"
                  : "rounded-lg"
              }
              aria-label="network"
              onClick={() => handleTabChange("network")}
            >
              <ChartNetwork className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Network
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={activeTab === "llm" ? "outline" : "ghost"}
              size="icon"
              className={
                activeTab === "llm" ? "rounded-lg bg-secondary" : "rounded-lg"
              }
              aria-label="LLM"
              onClick={() => handleTabChange("llm")}
            >
              <Bot className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            LLM
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={activeTab === "settings" ? "outline" : "ghost"}
              size="icon"
              className={
                activeTab === "settings"
                  ? "rounded-lg bg-secondary"
                  : "rounded-lg"
              }
              aria-label="Settings"
              onClick={() => handleTabChange("settings")}
            >
              <Settings2 className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Settings
          </TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Help"
            >
              <LifeBuoy className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Help
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Account"
            >
              <SquareUser className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Account
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};
