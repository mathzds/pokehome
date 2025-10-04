import BaseRepository from "../../infra/database/utils/baseRepository";
import { CreateCardDTOType } from "../dto/card/create";
import { CardEntity } from "../entities/card";
import MinioService from "./minio";

export default class CardService extends BaseRepository<CardEntity> {
  constructor(private readonly minioService: MinioService) {
    super(CardEntity);
  }

  async create(data: CreateCardDTOType) {
    const buffer = Buffer.from(await data.image.arrayBuffer());

    const card = this.repository.create({
      name: data.name,
      description: data.description,
      price: data.price,
      imageUrl: await this.minioService.uploadCard(buffer, data.image.name),
    });

    return card;
  }
}
