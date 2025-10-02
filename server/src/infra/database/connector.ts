import { DataSource } from "typeorm";
import { DatabaseConfig } from "../config/database";
import { UserEntity } from "../../domain/entities/user";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: DatabaseConfig.databaseName,
  logger: "formatted-console",
  logging: true,
  synchronize: true,
  entities: [UserEntity],
});

export default AppDataSource;
