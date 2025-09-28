import { DataSource } from "typeorm";

export default class Database {
  private static _instance: Database;
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource({
      type: "sqlite",
      database: "./database.sqlite",
      logging: true,
      synchronize: true,
      entities: [],
      migrations: [],
    });
  }

  async connect() {
    await this.dataSource.initialize();
    console.log("Database connected");
  }

  public static getInstance() {
    if (!Database._instance) {
      Database._instance = new Database();
    }
    return Database._instance;
  }

  public get ds() {
    return this.dataSource;
  }
}
