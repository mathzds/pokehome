import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CardEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  description: string;

  @Column("int")
  price: number; 

  @Column("varchar")
  imageUrl: string;
}
