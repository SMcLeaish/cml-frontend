import { useStore } from "@nanostores/react";
import { dialogOpenStore } from "@/stores/map-store";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function MapLayerDetectedModal() {
  const dialogState = useStore(dialogOpenStore);

  return dialogState.dialogOpen ? (
    <Dialog
      open={dialogState.dialogOpen}
      onOpenChange={(isOpen) =>
        dialogOpenStore.set({
          ...dialogState,
          dialogOpen: isOpen,
        })
      }
    >
      <DialogContent className="sm:max-w-md [&>button]:hidden">
        <DialogTitle>
          <VisuallyHidden>Map Layer Detected</VisuallyHidden>
        </DialogTitle>
        <DialogDescription>
          <VisuallyHidden>{dialogState.dialogDescription}</VisuallyHidden>
        </DialogDescription>
        <p>{dialogState.dialogDescription}</p>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="default"
            onClick={() => {
              console.log("New map layer creation confirmed.");
              dialogOpenStore.set({
                ...dialogState,
                dialogOpen: false,
              });
            }}
          >
            Confirm
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ) : null;
}
