import { decode, sign, verify } from "hono/jwt";
import { ServerConfig } from "../../infra/config/server";
import IUserEntity from "../../domain/interface/user";

const secret = ServerConfig.jwtSecret;

export const singJwt = async (user: IUserEntity) => {
  const payload = {
    sub: user.id,
    exp: Math.floor(Date.now() / 1000) + 60 * 24,
  };
  const token = await sign(payload, secret);
  return token;
};

export const verifyJwt = async (token: string) => {
  return await verify(token, secret);
};

export const decodeJwt = (token: string) => {
  const { header, payload } = decode(token);
  return { header, payload };
};
