import React from "react";
import { useStore } from "@nanostores/react";
import { filesStore } from "@/stores/files-store";

export const FileList: React.FC = () => {
  const { files, currentFileId } = useStore(filesStore);

  const handleFileSelection = (fileName: string) => {
    filesStore.setKey("currentFileId", fileName);
  };

  return (
    <div>
      {files.length > 0 ? (
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <button
                type="button"
                onClick={() => handleFileSelection(file.id)}
                style={{
                  fontWeight: currentFileId === file.id ? "bold" : "normal",
                }}
              >
                {file.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files uploaded yet.</p>
      )}
    </div>
  );
};
