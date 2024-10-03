import { useStore } from "@nanostores/react";
import { activeTabStore } from "@/stores/active-tab-store";
import { Sidebar } from "@/pages/dashboard/components/sidebar";
import { Header } from "@/pages/dashboard/components/header";
import { LlmMain } from "./components/llm-main";
import { TableMain } from "./components/table-main";
import { DocMain } from "./components/document-main";
export const description =
  "An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.";

export function Dashboard() {
  const activeTab = useStore(activeTabStore);
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className={activeTab === "llm" ? "contents" : "hidden"}>
            <LlmMain />
          </div>
          <div className={activeTab === "table" ? "contents" : "hidden"}>
            <TableMain />
          </div>
          <div className={activeTab === "document" ? "contents" : "hidden"}>
            <DocMain />
          </div>
        </main>
      </div>
    </div>
  );
}
