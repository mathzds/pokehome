import { MinioConfig } from "../../infra/config/minio";
import { minioClient } from "../../infra/minio/minio";

export default class MinioService {
  private readonly bucketName: string;

  constructor() {
    this.bucketName = MinioConfig.bucketName;
  }

  async uploadCard(buffer: Buffer, fileName: string) {
    await minioClient.putObject(this.bucketName, fileName, buffer);
    return `http://localhost:9000/${this.bucketName}/${fileName}`;
  }

  async deleteCard(fileName: string) {
    await minioClient.removeObject(this.bucketName, fileName);
    return { message: `Arquivo ${fileName} deletado` };
  }

  async listCards() {
    const cards: string[] = [];
    const stream = minioClient.listObjectsV2(this.bucketName, "", true);

    return new Promise<string[]>((resolve, reject) => {
      stream.on("data", (obj) => cards.push(obj.name));
      stream.on("error", reject);
      stream.on("end", () => resolve(cards));
    });
  }
}
