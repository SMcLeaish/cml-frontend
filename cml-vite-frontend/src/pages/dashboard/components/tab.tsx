import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useStore } from "@nanostores/react";
import {
  contentStore,
  tabVisibilityStore,
  setActiveContent,
} from "@/stores/dashboard-store";
import { TabProps } from "@/types/tab";

export const Tab: React.FC<TabProps> = ({
  name,
  icon,
  tabKey,
  tooltip,
  activeBg = "bg-secondary",
}) => {
  const content = useStore(contentStore);
  const tabVisibility = useStore(tabVisibilityStore);

  if (!tabVisibility[tabKey]) {
    return null;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={content.activeContent === tabKey ? "outline" : "ghost"}
          size="icon"
          className={
            content.activeContent === tabKey
              ? `rounded-lg ${activeBg}`
              : "rounded-lg"
          }
          aria-label={name}
          onClick={() => setActiveContent(tabKey)}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
};
