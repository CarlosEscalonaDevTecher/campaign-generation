import * as sqlite3 from "sqlite3";
import { Database } from "sqlite";
import { Template } from "../../../services/templates/entities/template";
import { ITemplateRepository } from "../../../services/templates/interfaces/template-repository.interface";
import { instanceToPlain } from "class-transformer";

export class TemplateRepository implements ITemplateRepository {
  #db: Database<sqlite3.Database, sqlite3.Statement>;

  constructor(db: Database<sqlite3.Database, sqlite3.Statement>) {
    this.#db = db;
  }

  public async add(template: Template): Promise<void> {
    const plain = instanceToPlain(template);
    await this.#db.run(`
        INSERT INTO Template(Id, Name) VALUES ('${plain.id}', '${plain.name}');
    `);
  }

  public async delete(projectId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
