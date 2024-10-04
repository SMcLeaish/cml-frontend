import { FileUpload } from "@/pages/dashboard/components/filedrop";
import { FileList } from "@/pages/dashboard/components/filelist";
import { TableContainer } from "./table-container";
export const TableMain: React.FC = () => {
  return (
    <>
      <div
        className="relative hidden flex-col items-start gap-8 md:flex"
        x-chunk="dashboard-03-chunk-0"
      >
        <form className="grid w-full items-start gap-6">
          <FileUpload />
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">Uploaded</legend>
            <FileList />
          </fieldset>
        </form>
      </div>
      <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
        <TableContainer />
      </div>
    </>
  );
};
