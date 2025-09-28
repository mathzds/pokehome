export interface IUserEntity {
  id: string;
  username: string;
  email: string;
  password: string;
  wishlist: number[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserRepository {
  findById(id: string): Promise<IUserEntity | null>;
  findAll(): Promise<IUserEntity[]>;
  create(data: Partial<IUserEntity>): Promise<IUserEntity>;
  update(data: Partial<IUserEntity>): Promise<IUserEntity>;
  delete(id: string): Promise<void>;
}
