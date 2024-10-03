import { map } from "nanostores";

interface ProjectStoreValue {
  projectName: string | null;
  projectId: string | null;
}

export const projectStore = map<ProjectStoreValue>({
  projectName: null,
  projectId: null,
});
