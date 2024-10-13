import { useStore } from "@nanostores/react";
import { contentStore } from "@/stores/dashboard-store";
import { Sidebar } from "@/pages/dashboard/components/sidebar";
import { Header } from "@/pages/dashboard/components/header";
import { TableContent } from "./components/table/table-content";
import { MapContent } from "./components/map/map-content";
import { MapLayerDetectedModal } from "./components/modals";

export function Dashboard() {
  const content = useStore(contentStore);
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            className={
              content.activeContent === "table" ? "contents" : "hidden"
            }
          >
            <TableContent />
          </div>
          <div
            className={content.activeContent === "map" ? "contents" : "hidden"}
          >
            <MapContent />
          </div>
        </main>
      </div>
      <MapLayerDetectedModal />
    </div>
  );
}
