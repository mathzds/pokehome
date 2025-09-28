import Server from "./infrastructure/http/server.js";

async function main() {
  const server = Server.getInstance();
  await server.listen();
}

main();
