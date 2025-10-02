import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import AppDataSource from "../connector";

export default abstract class BaseRepository<T extends ObjectLiteral> {
  protected repository: Repository<T>;

  constructor(private readonly entity: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(this.entity);
  }
}
