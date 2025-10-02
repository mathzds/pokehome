import BaseRepository from "../../infra/database/utils/baseRepository";
import { decodeJwt, singJwt, verifyJwt } from "../../shared/utils/jwt";
import { CreateUserDTOType } from "../dto/user/create";
import { LoginUserDTOType } from "../dto/user/login";
import { UserEntity } from "../entities/user";

export default class UserService extends BaseRepository<UserEntity> {
  constructor() {
    super(UserEntity);
  }

  async create(data: CreateUserDTOType) {
    const user = await this.repository.save(data);
    return user;
  }

  private async findById(id: string) {
    const user = await this.repository.findOneBy({ id: id });
    return user;
  }

  private async findByEmail(email: string) {
    const user = await this.repository.findOneBy({ email: email });
    return user;
  }

  async login(data: LoginUserDTOType) {
    const user = await this.findByEmail(data.email);

    if (user && user.password === data.password) {
      return await singJwt(user);
    }

    return;
  }

  async me(cookie: string) {
    const verify = await verifyJwt(cookie);

    if (verify) {
      const decode = decodeJwt(cookie);
      const payload = decode.payload;
      const user = await this.findById(payload.sub);
      return user;
    }

    return;
  }
}
