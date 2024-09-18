import { useState } from "react";
import { Sidebar } from "@/pages/dashboard/components/sidebar";
import { Header } from "@/pages/dashboard/components/header";
import { LlmMain } from "./components/llm-main";
export const description =
  "An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("llm");
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col">
        <Header />
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <LlmMain />
        </main>
      </div>
    </div>
  );
}
