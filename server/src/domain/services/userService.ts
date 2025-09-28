import { UserRepository } from "../../infrastructure/database/repositories/userRepository.js";
import type { IUserEntity } from "../interfaces/user.js";

export class UserService {
  private readonly repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async createUser(data: Partial<IUserEntity>) {
    return this.repository.create(data);
  }

  async getAllUsers() {
    return this.repository.findAll();
  }
}
