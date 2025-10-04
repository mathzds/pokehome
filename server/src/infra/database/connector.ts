import { DataSource } from "typeorm";
import { CardEntity } from "../../domain/entities/card";
import { UserEntity } from "../../domain/entities/user";
import { DatabaseConfig } from "../config/database";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: DatabaseConfig.databaseName,
  logger: "formatted-console",
  logging: true,
  synchronize: true,
  entities: [UserEntity, CardEntity],
});

export default AppDataSource;
