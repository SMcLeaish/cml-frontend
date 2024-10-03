import React from "react";
import axios from "axios";
import { useStore } from "@nanostores/react";
import { filesStore } from "@/stores/files-store";
import { useDropzone } from "react-dropzone";

export const FileUpload: React.FC = () => {
  const { files } = useStore(filesStore);
  const onDrop = (acceptedFiles: File[]) => {
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
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop files here, or click to select files</p>
    </div>
  );
};
