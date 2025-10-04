import { Client } from "minio";
import { MinioConfig } from "../config/minio";

export const minioClient = new Client({
  endPoint: MinioConfig.endpoint,
  port: MinioConfig.port,
  useSSL: false,
  accessKey: MinioConfig.accessKey,
  secretKey: MinioConfig.secretKey,
});

export async function ensureBucket() {
  const bucketName = MinioConfig.bucketName;
  const exists = await minioClient.bucketExists(bucketName);
  if (!exists) {
    await minioClient.makeBucket(bucketName);
    console.log(`Bucket "${bucketName}" criado.`);
  } else {
    console.log(`Bucket "${bucketName}" existe.`);
  }
}
