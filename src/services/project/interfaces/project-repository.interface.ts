import { Project } from "../entities/project";

export interface IProjectRepository {
  add(project: Project): Promise<void>;
  delete(projectId: string): Promise<void>;
}
