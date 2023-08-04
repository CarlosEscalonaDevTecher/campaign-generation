import "reflect-metadata";
import { getDb } from "./data/db";
import * as dotenv from "dotenv";
import { TemplateService } from "./services/templates/main";
import { TemplateRepository } from "./data/repositories/template/main";

(async () => {
  dotenv.config();
  const db = await getDb();

  const service = new TemplateService(new TemplateRepository(db));

  await service.create();

  console.log(process.env.TESTE);
})();
