import React, { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { filesStore } from "@/stores/files-store";
import Papa from "papaparse";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const TableContainer: React.FC = () => {
  const { files, currentFileId } = useStore(filesStore);
  const [csvData, setCsvData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [editingRow, setEditingRow] = useState<number | null>(null);

  useEffect(() => {
    const loadFile = async () => {
      if (currentFileId) {
        const file = files.find((f) => f.name === currentFileId);
        if (file) {
          const text = await file.text();
          Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
              setCsvData(results.data);
              setCurrentPage(1);
            },
            error: (error) => {
              console.error("Error parsing CSV:", error);
            },
          });
        }
      } else {
        setCsvData([]);
      }
    };
    loadFile();
  }, [currentFileId, files]);

  const handleEdit = (rowIndex: number) => {
    setEditingRow(rowIndex);
  };

  const handleSave = (rowIndex: number, updatedRow: any) => {
    const updatedData = [...csvData];
    updatedData[rowIndex] = updatedRow;
    setCsvData(updatedData);
    setEditingRow(null);
  };

  const handleCancel = () => {
    setEditingRow(null);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = csvData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(csvData.length / rowsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(parseInt(value, 10));
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col gap-4">
      {currentFileId ? (
        <>
          <h1 className="text-2xl font-bold">Data Table - {currentFileId}</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-muted">
                  {csvData.length > 0 &&
                    Object.keys(csvData[0]).map((header, index) => (
                      <th
                        key={index}
                        className="px-4 py-2 text-left font-medium text-muted-foreground"
                      >
                        {header}
                      </th>
                    ))}
                  <th className="px-4 py-2 text-left font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      editingRow === index ? "bg-muted/20" : "hover:bg-muted/10"
                    }`}
                  >
                    {Object.keys(row).map((key, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-4 py-2 text-left"
                        contentEditable={editingRow === index}
                        onBlur={(e) => {
                          if (editingRow === index) {
                            const updatedRow = {
                              ...row,
                              [key]: e.currentTarget.textContent,
                            };
                            handleSave(
                              index + (currentPage - 1) * rowsPerPage,
                              updatedRow,
                            );
                          }
                        }}
                      >
                        {row[key]}
                      </td>
                    ))}
                    <td className="px-4 py-2 text-left">
                      {editingRow === index ? (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mr-2"
                            type="button"
                            onClick={() =>
                              handleSave(
                                index + (currentPage - 1) * rowsPerPage,
                                currentRows[index],
                              )
                            }
                          >
                            Save
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            type="button"
                            onClick={handleCancel}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          type="button"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>Rows per page:</span>
              <Select
                value={rowsPerPage.toString()}
                onValueChange={handleRowsPerPageChange}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                type="button"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <Button
                    key={pageNumber}
                    size="sm"
                    variant={currentPage === pageNumber ? "solid" : "outline"}
                    type="button"
                    onClick={() => handlePageChange(pageNumber)}
                    className={
                      currentPage === pageNumber
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {pageNumber}
                  </Button>
                ),
              )}
              <Button
                size="sm"
                variant="outline"
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <p>Please select a file to display its data.</p>
      )}
    </div>
  );
};

// Icon components
function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
