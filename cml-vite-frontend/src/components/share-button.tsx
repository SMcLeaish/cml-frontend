import { Share } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ShareButton: React.FC = () => {
  return (
    <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
      <Share className="size-3.5" />
      Share
    </Button>
  );
};
