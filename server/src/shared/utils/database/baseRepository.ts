import type { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import Database from "../../../infrastructure/database/connector.js";

const db = Database.getInstance();

export default abstract class BaseRepository<T extends ObjectLiteral> {
  protected repository: Repository<T>;

  constructor(private readonly entity: EntityTarget<T>) {
    this.repository = db.ds.getRepository(this.entity);
  }
}
