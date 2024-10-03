import { map } from "nanostores";

interface FileMeta {
  name: string;
  id: string;
}

interface FileStoreValue {
  files: FileMeta[];
  currentFileId: string | null;
}
export const filesStore = map<FileStoreValue>({
  files: [],
  currentFileId: null,
});
