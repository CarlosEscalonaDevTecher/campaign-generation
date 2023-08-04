import { Template } from "../entities/template";

export interface ITemplateRepository {
  add(project: Template): Promise<void>;
  delete(projectId: string): Promise<void>;
}
