import { Template } from "./entities/template";
import { ITemplateRepository } from "./interfaces/template-repository.interface";

export class TemplateService {
  #repository: ITemplateRepository;

  constructor(repository: ITemplateRepository) {
    this.#repository = repository;
  }

  public async create() {
    await this.#repository.add(new Template("teste", "este"));
  }
}
