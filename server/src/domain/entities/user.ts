import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  username: string;

  @Column("varchar", { unique: true })
  email: string;

  @Column("varchar")
  password: string;
}
