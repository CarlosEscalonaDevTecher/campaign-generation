import * as sqlite3 from "sqlite3";
import { Database } from "sqlite";
import { Project } from "../../../services/project/entities/project";
import { IProjectRepository } from "../../../services/project/interfaces/project-repository.interface";

export class ProjectRepository implements IProjectRepository {
  #db: Database<sqlite3.Database, sqlite3.Statement>;

  constructor(db: Database<sqlite3.Database, sqlite3.Statement>) {
    this.#db = db;
  }

  public async add(project: Project): Promise<void> {
    this.#db.run(`
        INSERT INTO Project(Id, ) VALUES ()
    `);
  }

  public async delete(projectId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
