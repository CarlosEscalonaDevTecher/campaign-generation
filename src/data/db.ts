import * as fs from "fs";
import * as sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

const DB_PATH = "./main.sqlite";
const db = null;

async function createDbConnection() {
  if (fs.existsSync(DB_PATH)) {
    return await open({
      filename: DB_PATH,
      driver: sqlite3.Database,
    });
  } else {
    const db = await open({
      filename: DB_PATH,
      driver: sqlite3.Database,
    });

    await createTable(db);
    console.log("Connection with SQLite has been established");
    return db;
  }
}

async function createTable(db: Database<sqlite3.Database, sqlite3.Statement>) {
  await db.exec(`
    CREATE TABLE Template
    (
        Id CHAR(26) PRIMARY KEY,
        Name   VARCHAR(50) NOT NULL
    );

    CREATE TABLE Project
    (
        Id CHAR(26) PRIMARY KEY,
        Name   VARCHAR(50) NOT NULL,
        TemplateId CHAR(26) NOT NULL,
        FOREIGN KEY(TemplateId) REFERENCES Template(Id)
    );

    CREATE TABLE Campain
    (
        Id CHAR(26) PRIMARY KEY,
        Name   VARCHAR(50) NOT NULL,
        ProjectId CHAR(26) NOT NULL,
        FOREIGN KEY(ProjectId) REFERENCES Project(Id)
    );
  `);

  console.log("ALL OK!!!");
}

export const getDb = async () => {
  if (db) return db;

  return createDbConnection();
};
