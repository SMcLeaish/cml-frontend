import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "@nanostores/react";
import { filesStore } from "@/stores/files-store";
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
  const [csvData, setCsvData] = useState<string[][]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalRows, setTotalRows] = useState<number>(0);

  useEffect(() => {
    const fetchCSVData = async () => {
      const selectedFile = files.find((f) => f.id === currentFileId);
      if (selectedFile && selectedFile.id) {
        try {
          const response = await axios.get(
            `https://api.civmillabs.com/csv/${selectedFile.id}?page=${currentPage}&rows_per_page=${rowsPerPage}`,
          );
          setHeaders(response.data.headers);
          setCsvData(response.data.data);
          setTotalRows(response.data.total_rows);
        } catch (error) {
          console.error("Error fetching CSV data:", error);
        }
      }
    };

    if (currentFileId) {
      fetchCSVData();
    }
  }, [currentFileId, files, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(totalRows / rowsPerPage);

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
                  {headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 text-left font-medium text-muted-foreground"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/10">
                    {row.map((cell: string, colIndex: number) => (
                      <td key={colIndex} className="px-4 py-2 text-left">
                        {cell}
                      </td>
                    ))}
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
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <Button
                    key={pageNumber}
                    size="sm"
                    variant={currentPage === pageNumber ? "default" : "outline"}
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
                Next
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
