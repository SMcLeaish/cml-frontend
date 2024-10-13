import React from "react";
import axios from "axios";
import { useStore } from "@nanostores/react";
import { filesStore } from "@/stores/files-store";
import { dialogOpenStore } from "@/stores/map-store";
import { useDropzone } from "react-dropzone";
import { CloudUpload } from "lucide-react";

export const FileUpload: React.FC = () => {
  const { files } = useStore(filesStore);
  const onDrop = (acceptedFiles: File[]) => {
    console.log("Files dropped: ", acceptedFiles);
    acceptedFiles.forEach((file) => {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post("https://api.civmillabs.com/upload-csv/", formData)
        .then((response) => {
          const { file_id, map_layer } = response.data;
          console.log("File uploaded successfully:", file_id, map_layer);
          filesStore.setKey("files", [
            ...files,
            { name: file.name, id: file_id },
          ]);
          if (map_layer) {
            dialogOpenStore.set({
              dialogOpen: true,
              dialogDescription:
                "Coordinates were detected in the uploaded file. Would you like to create a map layer?",
            });
          }
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
  });
  return (
    <div
      {...getRootProps()}
      className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 rounded-lg  transition-colors duration-300 cursor-pointer"
    >
      <CloudUpload className="w-8 h-8 mb-4" />
      <input {...getInputProps()} className="hidden" />

      <p className="mb-4 text-gray-500">
        Drag and drop files here or click to select
      </p>
    </div>
  );
};
