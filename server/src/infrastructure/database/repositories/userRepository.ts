import UserEntity from "../../../domain/entities/user.js";
import type {
  IUserEntity,
  IUserRepository,
} from "../../../domain/interfaces/user.js";
import BaseRepository from "../../../shared/utils/database/baseRepository.js";

export class UserRepository
  extends BaseRepository<UserEntity>
  implements IUserRepository
{
  constructor() {
    super(UserEntity);
  }

  findById(id: string) {
    return this.repository.findOneBy({ id });
  }

  findAll() {
    return this.repository.find();
  }

  create(data: Partial<IUserEntity>) {
    return this.repository.save(data);
  }

  update(data: IUserEntity) {
    return this.repository.save(data);
  }

  delete(id: string) {
    this.repository.delete(id);
    return Promise.resolve();
  }
}
